// @flow

const LogTagEnum = Object.freeze({
  MYSQL: '[MySQL]',
  DYNAMO_DB: '[DynamoDB]',
  KMS: '[KMS]',
  S3: '[S3]',
  SERIALIZE: '[Serialize]',
  LAMBDA: '[Lambda]',
  CAMPAIGN_CONFIG: '[CAMPAIGN_CONFIG]',
});

module.exports = LogTagEnum;

export type LogTag = $Values<typeof LogTagEnum>;
