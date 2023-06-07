import { google } from 'googleapis'
import config from '@src/config'

const authFunction = () => {
  let auth = new google.auth.GoogleAuth({
    projectId: config.google.projectID,
    credentials: {
      client_email: config.google.email,
      client_id: config.google.clientID,
      private_key: config.google.privateKey,
      type: config.google.serviceType,
      token_url: config.google.tokenUri,
    },
    clientOptions: {
      clientId: config.google.clientID,
      email: config.google.email,
      redirectUri: config.google.redirectUri,
    },
    scopes: config.google.scopes,
  })
  return auth
}

export { authFunction }
