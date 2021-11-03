import React from "react";
import NewsCards from "./NewsCards";

function News() {
  return (
    <div className="news-cards">
        <div className="spacer" />
        <h1>News</h1>
        <hr/>
        <div className="grid-wrapper">
            <NewsCards />
            <NewsCards />
            <NewsCards />
            <NewsCards />
            <NewsCards />
            <NewsCards />
        </div>
    </div>
  );
}

export default News;