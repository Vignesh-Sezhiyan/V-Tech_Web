import React from "react";
import image from "../assets/i1.jpg.jpg";
import Blog from "./Services";
import "./style.css";
import Contact from "./Contact";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="container mb-5">
        <div class="row  mx-auto mb-5">
          {/* <!--col-1--> */}
          <div class="col-lg-4 mx-auto">
            <h1 class="text-dark mt-5 text-muted">
              Demo Website for contact form...
            </h1>
            <p class="text-dark my-5 text-muted">
              <h4></h4>
              We Have Just Created An Website For When a user Moves to Contact
              Page And they Entered their Details , That details Will be stored
              in our database.We will reach u as soon as Possible
            </p>
            <Link to='/contact'>
              <button id="button-color" class="btn px-4 bg-info text-white">
                Learn More
              </button>
            </Link>
          </div>
          {/* <!--col-1-end--> */}

          {/* <!--col-2--> */}

          <div class="col-lg-5 mx-auto mt-5">
            <img src={image} width={550} height={400} />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-5 text-success">Our Services...</h2>
      </div>
      <Blog />
      <div className="container">
        <h2 className="mt-5 text-success">For more Details...</h2>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
