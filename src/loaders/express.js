import express from "express";
import cookieParser from "cookie-parser";
import { json } from "body-parser";

export default async () => {
      console.log(process.cwd());
      const app = express();
      app.use(cookieParser());
      app.use(json());
};
