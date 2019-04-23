const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { WebSocketLink } = require('apollo-link-ws');
const { HttpLink } = require('apollo-link-http');
const { onError } = require('apollo-link-error');
const { ApolloLink } = require('apollo-link');
const { getMainDefinition } = require('apollo-utilities');
const { SubscriptionClient } = require('subscriptions-transport-ws');
const ws = require('ws');
const fetch = require('node-fetch');

const END_POINT_URL = 'http://localhost:4000/graphql';
const SUBSCRTION_URL = 'ws://localhost:4000/graphql';

const twoWayLink = ApolloLink.split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  new WebSocketLink(
    new SubscriptionClient(
      SUBSCRTION_URL,
      {
        reconnect: true,
      },
      ws,
    ),
  ),
  new HttpLink({
    uri: END_POINT_URL,
    credentials: 'same-origin',
    fetch,
  }),
);

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ));
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    twoWayLink,
  ]),
  cache: new InMemoryCache(),
});

module.exports = client;
