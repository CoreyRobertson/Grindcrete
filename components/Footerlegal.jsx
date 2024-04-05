import React from 'react'

const Footerlegal = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='footer_legal-container'>
            <p className='roboto-light'>&copy; {currentYear} Grind Crete. All rights reserved. | Web design by Southshore Digital</p>
        </div>
    )
}

export default Footerlegal