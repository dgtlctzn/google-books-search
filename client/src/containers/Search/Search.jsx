import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import API from "../../utils/API";
import Card from "../../components/Card/Card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.getBooks(search)
      .then(({ data }) => {
        console.log(data);
        const topTen = data.items.filter((book, index) => index < 10);
        console.log(topTen)
        setBooks(topTen);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveButton = (e) => {
    API.postBook(e.target.value)
      .then((response) => {
        console.log("success")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <SearchForm
        input={search}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      {books.map((book) => (
        <Card
          key={book.id} value={book.selfLink}
          {...book.volumeInfo}
          handleSaveButton={handleSaveButton}
          image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
        />
      ))}
    </div>
  );
};

export default Search;
