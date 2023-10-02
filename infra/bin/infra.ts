#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const APP_ENV = {
  account: process.env.AWS_ACCOUNT_ID,
  region: process.env.AWS_ACCOUNT_REGION,
};
const app: App = new App();
new InfraStack(app, 'FakeECommerceApp', {
  env: APP_ENV,
});
