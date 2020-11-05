import React, {useState} from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';

const Search = () => {

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value) 
    }


    return (
        <div className="container">
            <SearchForm input={input} handleInput={handleInput}/>
        </div>
    );
};

export default Search;