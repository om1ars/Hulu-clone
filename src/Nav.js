import React from 'react'
import './Nav.css'
import request from './request'

const Nav = ({setSelectedOption}) => {
    return (
        <div className='nav'>
            <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)} >Top Rated</h2>
            <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)} >Mystery</h2>
            <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOption(request.fetchComedyMovies)}>Western</h2>
            <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(request.fetchActionMovies)}>Movie</h2>
        </div>
    )
}

export default Nav
