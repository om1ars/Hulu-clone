import React from 'react'
import './VideoCard.css'
import img from './images/download.jpg'
import TextTruncate from 'react-text-truncate';
// import { ThumbsUpDown, ThumbsUpDownSharp } from '@material-ui/icons';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = ({movie}) => {
    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path  || movie.poster_path}`} alt="movie poster" />
            {/* <p>{movie.o verview}</p> */}
            <TextTruncate 
            line={2}
            element='p'
            truncateText='...'
            text={movie.overview}
            // textTruncateChild={<a href='#'>Read more</a>}
            />
            <h2>{movie.title || movie.original_name }</h2>
            <p className='wow'>
                {/* {movie.media_type  || `${movie.media_type} *` } */}
                {movie.release_date || movie.first_air_date } 
                <ThumbUpAltOutlinedIcon />
                {movie.vote_count}  </p>
        </div>
    )
}

export default VideoCard 
