import fs from 'fs';
import { ZeroConf } from 'zeroconf';
import appRoot from 'app-root-path';
import { ApolloServer } from 'apollo-server';

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
    allows: [], // will be implemented
    context,
    uploads: {
      maxFieldSize: 100000000,
      maxFileSize: 100000000,
      maxFiles: 20,
    },
    withApollo: true,
  });

  await zeroConf.configuration();

  fs.writeFileSync(`${appRoot}/.zeroconf/schema.graphql`, zeroConf.typeDefs, 'utf-8');

  const server = new ApolloServer(zeroConf);
  const { url } = await server.listen({
    host: process.env.GRAPHQL_HOST,
    port: process.env.GRAPHQL_PORT,
  });
  console.log(`Server ready at ${url}/graphql`);
};

initServer();
