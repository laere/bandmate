import React from "react";

const Card = props => {
  console.log(props.band.description);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{props.band.bandname}</p>
            <p className="subtitle is-6">@{props.band.bandname}</p>
          </div>
        </div>
        <div className="content">
          {props.band.genre}
          <br />
          {props.band.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
