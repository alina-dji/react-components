import React from 'react';
 
function ProfilPhoto() {
    return (
        <div>
            <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="avatar"
                style = {{borderRadius: '50%', border: '4px solid #17a589'}} >
            </img>
        </div>
    )
}

export default ProfilPhoto;