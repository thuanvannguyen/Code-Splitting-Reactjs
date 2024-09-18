// import Comments from "../components/Comments";
import React, { Suspense } from "react";
import Content from "../components/Content";

const Comments = React.lazy(() => import("../components/Comments"));
const Comments2 = React.lazy(() => import("../components/Comments2"));

const Post = () => {
  return (
    <div
      style={{
        width: "70%",
        margin: "0 auto",
      }}
    >
      <Content />
      <Suspense fallback="loading...">
        <Comments />
        <Comments2 />
      </Suspense>
    </div>
  );
};

export default Post;
