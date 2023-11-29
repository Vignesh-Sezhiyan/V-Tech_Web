import React from 'react'
import i1 from '../assets/t3.jpg.jpg'
import i2 from '../assets/t7.jpg.jpg'
import i4 from '../assets/t4.jpg.jpg'
import i5 from '../assets/t5.jpg.jpg'
import i6 from '../assets/t6.jpg.jpg'
import "./style.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <img src={i2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web Dev</h5>
              <p class="card-text text-muted">
                Easily Create Responsive websites and single Page Applications
                using REACT JS
              </p>
              <Link to="/contact1">
                <button id="button-color" class="btn px-4 bg-primary text-white">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img src={i1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">App Dev</h5>
              <p class="card-text text-muted">
                By Using Java and python We Have created So many Application
              </p>
              <a href="#" class="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img src={i5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Game Dev</h5>
              <p class="card-text text-muted">
                Some quick example text to build on the card title and make up
              </p>
              <a href="#" class="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card mt-4">
            <img src={i4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Python</h5>
              <p class="card-text text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card mt-4 ">
            <img src={i5} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Java</h5>
              <p class="card-text text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card mt-4">
            <img src={i6} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Data Scientist</h5>
              <p class="card-text text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog