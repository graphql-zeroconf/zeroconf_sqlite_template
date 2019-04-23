const jwt = require('jsonwebtoken');
const client = require('./libs/apollo-client');

const context = async (args, models, acl) => {
  const { req, connection } = args;

  // get the user token from the headers
  let token = null;
  if (req) {
    token = req.headers.authorization;
  } else if (connection) {
    token = connection.context.authorization;
  }

  let user = null;
  const role = 'guest';

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      const { user_id } = decoded;
      user = await models.user.findOne({
        where: user_id,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return {
    user,
    role,
    models,
    token,
    client,
  };
};

export default context;
