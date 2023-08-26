import React from 'react';
import '../assets/styles/style.scss'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FullLayout({children}) {
    return (
        <div> 
            <div className="pageWrapper login"> 
                    <main className="contentArea flex-grow-1">
                        <div >{children}</div>
                    </main> 
            </div>
        </div> 
    );
}

export default FullLayout;