const _ = require('lodash');
const gql = require('graphql-tag');

const query = gql`
  query {
    configs {
      name
      value
    }
  }
`;

module.exports = async (client) => {
  const res = await client.query({
    query,
  });

  return _.mapValues(_.keyBy(res.data.configs, 'name'), 'value');
};
