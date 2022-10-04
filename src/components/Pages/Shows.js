import React, { useEffect, useState } from 'react';
import Show from './Show';

const Shows = () => {

    const [shows, setShows] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShows(data))
    }, [])

    return (
        <div>
            <div>
                {
                    shows.map(show => <Show
                        key={show.show.id}
                        show={show}
                    ></Show>)
                }
            </div>
        </div>
    );
};

export default Shows;