import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero py-10 bg-neutral">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/91TmR1v-qRL._RI_f7aa2caf-8e52-4bf4-9506-1595c8440c74.jpg?v=1570155292" className="rounded-lg shadow-2xl w-1/2" alt='' />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">What latest TV shows</h1>
                        <p className="py-6">One place for all latest and top rated TV shows</p>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;