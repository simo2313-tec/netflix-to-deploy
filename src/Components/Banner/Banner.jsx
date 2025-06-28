import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

        function truncate(str, x) {
            return str?.length > x ? str.substr(0, x - 1) + '...' : str;
        }

    return (
        <div className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='banner-content'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-button'>
                    <button className='banner-button play'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner_fadeBottom'/>
        </div>
    )
}

export default Banner