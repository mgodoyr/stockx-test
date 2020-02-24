require('appmetrics-dash').monitor();
import {StockxApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {StockxApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new StockxApplication(options);
  app.api( {
    basePath: "/",
    openapi: '3.0.0',
    info: {
      title: 'API - stockx',
      version: '1.0.0',
      description: "test application gateway",
      contact:{
        email: "neo.mdgr@gmail.com"
      }
    },
    paths: {},
    setServersFromRequest: false,
    endpointMapping: {
      "/api-gateway.json": {
        "version": "3.0.0",
        "format": "json"
      }
    }
  });
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
