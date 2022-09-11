import React, { useState } from 'react';
import { useGlobleContext } from '../Context';

const Search = () => {
    const [text, setText] = useState("")
    const { setSearchTerm, fetchRandomMeal} = useGlobleContext()

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        text && setSearchTerm(text)
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    return (
        <header className='search-container'>
            <form>
                <input type='text' placeholder='type favorite meal' className='form-input' onChange={handleChange} value={text} />
                <button type='submit' className='btn' onClick={handleSubmit}>Search</button>
                <button type='button' className='btn btn-hipster' onClick={handleRandomMeal}>suprise me!</button>
            </form>
        </header>
    );
};

export default Search;