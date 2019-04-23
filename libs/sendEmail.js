const gql = require('graphql-tag');

const sendEmail = async (input, context, variables) => {
  const { client } = context;

  const SEND_EMAIL = gql`
    mutation sendEmail($title: String!, $content: String!, $toAddress: String!, $sender: String!) {
      sendEmail(title: $title, content: $content, toAddress: $toAddress, sender: $sender)
    }
  `;

  const result = await client.mutate({
    mutation: SEND_EMAIL,
    variables: {
      fromAddress: 'admin@blarblar.com',
      ...variables,
    },
  });

  return result;
};

module.exports = sendEmail;
