require('dotenv').config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  dev: process.env.NODE_ENV !== 'production',
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 8000,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  google: {
    projectID: process.env.GOOGLE_PROJECT_ID,
    clientID: process.env.GOOGLE_CLIENT_ID,
    serviceType: process.env.GOOGLE_SERVICE_TYPE,
    tokenUri: process.env.GOOGLE_TOKEN_URI,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    email: process.env.GOOGLE_CLIENT_EMAIL,
    spreadsheetId: process.env.GOOGLE_SPREAD_SHEET_ID,
    scopes: [process.env.GOOGLE_SCOPES],
  },
  api: {
    prefix: '/api',
  },
}
