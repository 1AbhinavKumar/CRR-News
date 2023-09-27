import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" to="/">CRR News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a className="nav-link active" aria-current="page" to="/">General</a>
                                <a className="nav-link active" aria-current="page" to="/business">Business</a>
                                <a className="nav-link active" aria-current="page" to="/health">Health</a>
                                <a className="nav-link active" aria-current="page" to="/entertainment">Entertainment</a>
                                <a className="nav-link active" aria-current="page" to="/sports">Sports</a>
                                <a className="nav-link active" aria-current="page" to="/technology">Technology</a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar