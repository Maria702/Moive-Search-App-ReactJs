import React from 'react'

const Cards = ( {movie} ) => {
    return (
        <>
            <div className='container my-3'>
                <div className='row'>
                    {
                        movie && movie.map((item) => {
                      
                            return (
                                <div className='col-3'>
                                    <div className="card" style={{ width: '18rem', }}>
                                        <img src=
                                    {item.poster} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>


        </>
    )
}

export default Cards