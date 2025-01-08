import React from 'react';

function About() {
  return (
    <div>
      <h1>About This Project</h1>
      <p>This project is a full-stack web application built with React on the frontend and Node.js/Express on the backend, connected to MongoDB for data storage. Here are some of the features:</p>
      <ul>
        <li>User Registration with role-based access control (Admin, Explorer)</li>
        <li>Login Authentication using JSON Web Tokens (JWT)</li>
        <li>Middleware to handle user validation and logging</li>
        <li>CRUD operations for user data (accessible only to Admin users)</li>
        <li>Dynamic Navbar showing the current logged-in user</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Frontend: React, Axios</li>
        <li>Backend: Node.js, Express, JWT</li>
        <li>Database: MongoDB with Mongoose</li>
      </ul>
      <h3>Screenshots:</h3>
      <p>Here are some screenshots of the project:</p>
      <img src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709833883/catalog/1331956702743605248/m9aduu2jurz6n07o54yr.webp" alt="" width={500} height={500} />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCQclKhi_wMbetivJCQbB6Nlsmgi3DYjj4gVOiUCjS3KBdaYP89dHOH06FZVPJda3J8c&usqp=CAU" alt="" width={500} height={500} />
    </div>
  );
}

export default About;
