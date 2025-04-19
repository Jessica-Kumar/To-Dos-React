import React from 'react';

export const Footer = () => {
    let footerStyle = {
        position: "relative", // Keeps the footer relative to the content
        width: "100%",
        border: "2px solid black",
        top: "20vh",
        marginTop: "auto", // Ensures it stays below the content
        height: "60px", // Added height for the footer
        paddingTop: "10px", // Optional: Add padding inside the footer
    };
    return (
        <div className='bg-dark text-light py-3 text-center' style={footerStyle}>
            by Jessica Kumar<br/>
            Copyright &copy; MyTodosList.com | All Rights Reserved | 2025
        </div>
    );
};
