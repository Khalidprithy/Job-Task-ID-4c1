import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>{show.name}</h1>
        </div>
    );
};

export default ShowDetails;