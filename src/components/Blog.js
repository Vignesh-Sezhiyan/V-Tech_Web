import React from "react";
import "./style.css";
import x1 from '../assets/html.jpg.png'
import x2 from '../assets/css.jpg.png'
import x3 from '../assets/js.jpg.png'
import x4 from '../assets/react.jpg.png'
import x5 from '../assets/node.jpg.png'
import x6 from '../assets/express.jpg.png'
import x7 from '../assets/mongo.jpg.png'

function Services() {
  return (
    <div>
      <h1 className="mt-5 ms-5 font-weight-bold text-success">
        Trending Courses...
      </h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img src={x1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-success">HTML</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={x2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-success">CSS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <img src={x3} class="card-img-top" alt="..." height={200} />
              <div class="card-body">
                <h5 class="card-title text-success">JAVASCRIPT</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-4">
              <img
                src={x4}
                class="card-img-top"
                alt="..."
                width={100}
                height={250}
              />
              <div class="card-body">
                <h5 class="card-title text-success">REACT-JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-4">
              <img src={x5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-success">NODE-JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-4">
              <img src={x6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-success">EXPRESS-JS</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-4">
              <img src={x7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-success">MongoDB</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
