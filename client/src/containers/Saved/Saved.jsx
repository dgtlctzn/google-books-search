import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Card from "../../components/Card/Card";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.getSavedBooks()
      .then((response) => {
          console.log(response.data)
        setSavedBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {savedBooks.map((book) => (
        <Card key={book._id} image={book.image} {...book} />
      ))}
    </div>
  );
};

export default Saved;
