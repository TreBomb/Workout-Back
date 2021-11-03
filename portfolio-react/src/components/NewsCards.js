import React from "react";

function NewsCards() {
  return (
    <div className="card">
        <img className="card-img" src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="Snow" />
        <div className="card-base">
            <h3 className="card-detail">Date</h3>
            <h1 className="card-header">News Title</h1>
            <p className="card-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget ex eu nisi egestas efficitur.
            </p>
        </div>
    </div>
  );
}

export default NewsCards;