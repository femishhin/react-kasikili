import React from 'react';
import '../assets/styles/style.scss'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Leftbar from '../components/leftbar';
import { Link } from "react-router-dom";

function MainLayout({children}) {
    return (
        <div>
            <div className="navbar sticky-top navbar-dark bg-dark flex-md-nowrap p-0 shadow">
                <Link  className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/dashboard">
                    <span data-feather="home" className="align-text-bottom"></span>
                    KASIKILI
                </Link> 
                <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="pageWrapper d-sm-block d-md-flex "> 
                    <Leftbar></Leftbar>
                    <main className="contentArea flex-grow-1">
                        <div className='p-4'>{children}</div>
                    </main> 
            </div>
        </div> 
    );
}

export default MainLayout;