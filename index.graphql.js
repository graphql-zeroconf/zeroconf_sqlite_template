import fs from 'fs';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { ZeroConf } from 'zeroconf';
import ZeroConfUpload from 'zeroconf_upload';
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

  zeroConf.use(ZeroConfUpload);

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
    graphqlHTTP(async (...args) => {
      return {
        schema,
        ...zeroConf,
        context: await zeroConf.context(args)
      }
    }),
  );

  app.listen(process.env.GRAPHQL_PORT, process.env.GRAPHQL_HOST, () => {
    const url = `http://${process.env.GRAPHQL_HOST}:${process.env.GRAPHQL_PORT}`;
    console.log(`Server ready at ${url}/graphql`);
  });
};

initServer();
