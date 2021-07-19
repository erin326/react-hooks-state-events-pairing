import React from 'react';

function Header({views, uploadDate}) {
    return (
        <header>
            <h2>React Today and Tomorrow and 90% Cleaner React With Hooks</h2>
            <h5>{views} Views | Uploaded {uploadDate}
            </h5>
        </header>
        

    )
}

export default Header;