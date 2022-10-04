import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';


const ShowDetails = () => {

    const { id } = useParams();

    const [show, setShow] = useState({});

    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setShow(data))
    }, [id]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 m-4'>
            <img className='rounded-xl' src={show.image?.original} alt="" />
            <div>
                <div>
                    <h1 className='text-2xl font-bold'>{show.name}</h1>
                    <div className='flex gap-2'>
                        <p>{show.runtime} min</p>
                        <p className='flex items-center ml-1 '><AiFillStar className='text-red-400'></AiFillStar>{show.rating?.average}</p>
                    </div>
                    <p>{show.summary}</p>
                    <div>
                        <p>Language: {show.language}</p>
                        <p>Genre: {show.genres}</p>
                        <p>Release: {show.premiered}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowDetails;