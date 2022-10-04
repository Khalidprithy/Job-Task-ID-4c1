import React from 'react';
import { useNavigate } from 'react-router-dom';

const Show = ({ show }) => {

    const navigate = useNavigate();
    const { id } = show.show;
    console.log(id);

    // console.log(show.show.id)
    const handleDetails = p => {
        navigate(`/${id}`)
    }

    return (
        <div
            onClick={() => handleDetails(id)}
            className='mx-auto border rounded-lg hover:bg-neutral hover:text-white p-1 hover:scale-105 ease-in-out duration-300'>
            <div>
                <img className='rounded-lg' src={show.show.image.medium} alt="" />
                <div className='flex items-center justify-between m-1'>
                    <h1 className='text-xl font-semibold'>{show.show.name}</h1>
                    <p className='font-light'>{show.show.runtime} min</p>
                </div>
                <p className='font-light text-left ml-2'>{show.show.language}</p>
                <div className='flex items-center'>
                    {
                        show.show.genres.map(genre =>
                            <div className='flex flex-col justify-end ml-2'><p>{genre}</p></div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Show;