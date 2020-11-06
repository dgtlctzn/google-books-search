import React from "react";

const Card = ({ imageLinks, title, description, authors, canonicalVolumeLink }) => {
    // console.log(imageLinks);
    // let image;
    // if (!imageLinks) {
    //     image = "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    // } else {
    //     image = imageLinks.thumbnail;
    // }
  return (
    <>
      <div className="row">
        <div className="col m12">
          <h3>{title}</h3>
          <h5>{authors}</h5>
          <a href={canonicalVolumeLink}>
            <button className="waves-effect waves-light btn-small">View</button>
          </a>
          <button className="waves-effect waves-light btn-small">Save</button>
        </div>
      </div>
      <div className="row">
        <div className="col m3">
        {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
        </div>
        <div className="col m9">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
