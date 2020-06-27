import "dotenv/config";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2Client.setCredentials({
      access_token: ACCESS_TOKEN,
      refresh_token: REFRESH_TOKEN,
});

oauth2Client.refreshAccessToken();

const youtube = google.youtube({
      version: "v3",
      auth: oauth2Client,
});

export default youtube;
