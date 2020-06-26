import youtube from "./y-api";

const params = {
      part: ["snippet"],
      resource: {
            snippet: {
                  videoId: "QrgXCkr_j3s",
                  topLevelComment: {
                        snippet: {
                              textOriginal:
                                    "This is the start of a comment thread.",
                        },
                  },
            },
      },
};

youtube.commentThreads.insert(params).catch((e) => {
      console.log(e);
});
