"use strict";

import youtube from "./y-api";
import express from "express";
import expressLoader from "./src/loaders/express";

const app = express();
const PORT = process.env.PORT;
expressLoader();

const params = {
      part: ["snippet"],
      resource: {
            snippet: {
                  videoId: "QrgXCkr_j3s",
                  topLevelComment: {
                        snippet: {
                              textOriginal: "test",
                        },
                  },
            },
      },
};

function addComment(params) {
      youtube.commentThreads
            .insert(params)
            .then(() => {
                  console.log("done");
            })
            .catch((e) => {
                  console.log(e);
            });
}

async function main(args) {
      const server = app.listen(
            PORT,
            console.log(`Server started at port ${PORT}`)
      );
}

main(process.argv);
