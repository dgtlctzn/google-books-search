import React from "react";
import "./Card.css";

const Card = ({
  value,
  image,
  title,
  description,
  authors,
  canonicalVolumeLink,
  handleSaveButton,
}) => {
  const combineAuthors = (author) => {
    if (author) {
      if (author.length === 1) {
        return "By " + author[0];
      } else if (author.length > 1) {
        return "By " + author.join(", ");
      }
    } else {
      return "author unknown";
    }
  };

  //   const shortDescription = (text) => {
  //     let end = "";
  //     if (text.length > 600) {
  //         end = "..."
  //     }
  //     const shortText = text.substring(0, 600);
  //     return shortText + end;
  //   }

  //   const remaining = (text) => {
  //     if (text.length > 600) {
  //         return text.substring(600, text.length -1)
  //     }
  //   }

  return (
    <div className="card-content">
      <div className="row">
        <div className="col s6">
          <h3>{title}</h3>
          <h5>{combineAuthors(authors)}</h5>
        </div>
        <div className="col s6">
          <a href={canonicalVolumeLink}>
            <button className="waves-effect waves-light btn-small right card-button">
              View
            </button>
          </a>
          <button
            title={title}
            value={value}
            onClick={handleSaveButton}
            className="waves-effect waves-light btn-small right card-button"
          >
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m3">
          {/* {image && <img src={image} alt={title} />} */}
          <img className="center" src={image} alt={title}/>
        </div>
        <div className="col s12 m9">
          {description ? (
            <p>{description}</p>
          ) : (
            <p>No description found ¯\_(ツ)_/¯</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
