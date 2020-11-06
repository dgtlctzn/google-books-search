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
        setBooks(topTen);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveButton = (e) => {
    // const { imageLinks, title, description, authors } = e.target;
    console.log(e.target);
    // console.log(id.authors);
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
          key={book.id}
          {...book.volumeInfo}
          handleSaveButton={handleSaveButton}
        />
      ))}
    </div>
  );
};

export default Search;
