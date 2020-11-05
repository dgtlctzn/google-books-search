import React from "react";

const SearchForm = ({input, handleInput, handleSubmit}) => {
  return (
    <div className="row">
      <div className="col s12">
        <h2>Search Books</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">library_books</i>
              <input id="library_books" type="text" className="validate" value={input} onChange={handleInput}/>
              <label htmlFor="library_books">Title</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
