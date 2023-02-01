import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/" class="navbar-brand">skillhub</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/multiple-image" class="nav-link active">Multiple Upload</Link>
                        <Link to="/single-image" class="nav-link">Single Upload</Link>
                        <Link to="/multiDoc-upload" class="nav-link">MultiDoc Upload</Link>

                    </div>
                </div>
            </div>
        </nav>

    </>
}
