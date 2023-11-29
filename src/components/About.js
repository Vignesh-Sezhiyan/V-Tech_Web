// About.js

import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="ms-5">
      <h2 className="mt-4 text-success">About Us...</h2>
      <p className=" mt-4 text-muted">
        Welcome to our New Vs-Tech! We are Newly Entered into an Software Development Field With Amazing and <br/>enthusiastic experienced workers with Affortable Prices For Development
      </p>
      <h3 className="mt-4 text-success">Our Team</h3>
      <ul className="mt-4 text-muted">
        <li className="p-2">Vignesh - Frontend Developer</li>
        <li className="p-2">Vaishnavi - Backend Developer</li>
        <li className="p-2">Senthamizh -Full-stack Developer</li>
        <li className="p-2">Sezhiyan - Java Developer</li>
        <li className="p-2">Subash - Database Administrator</li>
      </ul>
      <p className="text-muted">
       for More Details <a className="text-primary">click...</a>
      </p>
    </div>
  );
};

export default About;
