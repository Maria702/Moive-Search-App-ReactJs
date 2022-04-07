import axios from 'axios';
import React, { useState } from 'react'




const Nav = () => {
    const [text, setText] = useState('Search Movies');
    const [movie, setMovie] = useState();
    const ChangeTextHandler = (e) => {
        setText(e.target.value)
        console.log(e)
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios
            .get(`https://www.omdbapi.com/?s=${text}&apikey=89186023`)
            .then((data) => {
                console.log(data)
                setMovie(data.data.Search)
            })

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movie APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={SubmitHandler}>
                            <input value={text} onChange={ChangeTextHandler} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            < br />

            {/* <Cards movie={movie} /> */}

            <div className='container'>
                <div className='row'>
                    {movie && movie.map((value, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 box-shadow" >
                                    <img src={value.Poster} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="card-title">{value.Year}</h4>
                                            <p className="card-text">{value.Title}</p>

                                        </div>
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

export default Nav