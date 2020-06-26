import "dotenv/config";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET
);
oauth2Client.setCredentials({
      access_token: process.env.ACCESS_TOKEN,
      refresh_token: process.env.REFRESH_TOKEN,
});

oauth2Client.refreshAccessToken((err, tokens) => {});

const youtube = google.youtube({
      version: "v3",
      auth: oauth2Client,
});

export default youtube;
