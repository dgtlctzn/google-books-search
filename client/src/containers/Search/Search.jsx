import React, {useState} from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import API from "../../utils/API"

const Search = () => {

    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        API.getBooks(search).then((response) => {
            console.log(response.data);
        })
    }


    return (
        <div className="container">
            <SearchForm input={search} handleInput={handleInput} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default Search;