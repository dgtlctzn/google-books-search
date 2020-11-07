import React from "react";
import "./SearchForm.css"

const SearchForm = ({ input, handleInput, handleSubmit }) => {
  return (
    <div className="row search-bar teal lighten-5">
      <div className="col s12 center">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div id="search-input" className="input-field col s10 offset-xl3 xl6">
              <input
                id="library_books"
                type="text"
                className="validate"
                value={input}
                onChange={handleInput}
              />
              <label htmlFor="library_books">Search Title</label>
              <button className="search-button right" type="submit">
                <i className="material-icons prefix">search</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
