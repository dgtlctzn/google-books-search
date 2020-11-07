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

  const handleDelete = (e) => {
    API.deleteBook(e.target.value).then(() => {
      console.log("book deleted")
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="container">
      {savedBooks.map((book) => (
        <Card key={book._id} image={book.image} {...book} handleDelete={handleDelete} value={book._id}/>
      ))}
    </div>
  );
};

export default Saved;
