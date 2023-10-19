import React, { useState } from 'react';

// CourceSearch component that takes a function getSearchResults as a prop
const CourceSearch = ({ getSearchResults }) => {
    // Initialize a state variable for the search query
    const [query, setQuery] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Send a GET request to the server's API with the search query
        const res = await fetch(`/api/courses/search?query=${query}`);
        console.log(res, 'res'); // Log the response to the console

        // Parse the response as JSON
        const courses = await res.json();

        // Call the getSearchResults function with the retrieved courses
        getSearchResults(courses);
    };

    // Render a form for course searching
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className='search-input'
                type="text"
                placeholder='Search Courses'
                value={query}
                onChange={(e) => setQuery(e.target.value)}>
            </input>
            <button className="search-button" type='submit'>Search</button>
        </form>
    );
}

export default CourceSearch; // Export the CourceSearch component
