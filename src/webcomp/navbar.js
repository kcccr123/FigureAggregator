import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import Axios from "axios";
import Browse from "./browse";
import logo from './images/logo.png'
import './navbar.css'

export default function Navbar() {
    async function UpdateDB() {
        Axios.post('https://figurecenter.herokuapp.com/updateDB').then(() => {
        })
    }

    return (
        <div className="navbarContainer">
            <div className="navbarElementMain">
                <Link className="navbarLink" to='/'>
                    <img id='mainLogo' src={logo} className='navbarLogo' style={{ display: 'inline' }}></img>
                    FigureCenter
                </Link>
            </div>
            <div className="navbarSearch">
                <SearchBar />
            </div>
            <div className="navbarElement">
                <div className="navbarLinkCata">
                    <button onClick={() => UpdateDB()} />
                </div>
            </div>

        </div>
    )
}