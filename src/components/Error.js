import React from 'react';

const imagePath = "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

const Error = () => {
    return (
        <>
        <h1 className=" bg-dark text-white text-center  p-5 hero-container">404 Error Page</h1>
        <h2 className=" p-5 text-center"> Oh Snap, you broke something!</h2>
        <div className="container">
        <img className='error-image' src={imagePath} alt="..."/>
        </div>
        
       
       </>
        
    )
}
export default Error;