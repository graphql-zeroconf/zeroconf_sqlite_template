import fs from 'fs';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { ZeroConf, ACL } from 'zeroconf';
import appRoot from 'app-root-path';
import { makeExecutableSchema } from 'graphql-tools';

import context from './context';
import sequelizeConfig from './.sequelize.cfg';

const hooksPath = `${appRoot}/clouds/hooks`;
const extendsPath = `${appRoot}/clouds/extends`;
const typesPath = `${appRoot}/clouds/types`;

const initServer = async () => {
  const zeroConf = new ZeroConf({
    hooksPath,
    extendsPath,
    typesPath,
    sequelizeConfig,
    context,
    uploads: {
      maxFieldSize: 100000000,
      maxFileSize: 100000000,
      maxFiles: 20,
    },
  });

  await zeroConf.configuration();

  const { typeDefs, resolvers } = zeroConf;

  // You can also see the generated schema by zeroconf through to save the file.
  fs.writeFileSync(`${appRoot}/.zeroconf/schema.graphql`, typeDefs, 'utf-8');

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const app = express();
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      ...zeroConf,
    }),
  );
  app.listen(process.env.GRAPHQL_PORT, process.env.GRAPHQL_HOST, () => {
    const url = `http://${process.env.GRAPHQL_HOST}:${process.env.GRAPHQL_PORT}`;
    console.log(`Server ready at ${url}/graphql`);
  });
};

initServer();
