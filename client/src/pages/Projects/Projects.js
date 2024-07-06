import React from "react";
import "./Projects.css";
import { Rotate } from "react-reveal";
const Projects = () => {
  return (
    <div className="project" id="project-1">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Top Recent Projects
      </h2>
      <hr />
      <p className="pb-4 text-center">
        Here is My Top 3 Projects based on mern stack we recently work on it.The
        Projects is Fully responsive and dynamicly
      </p>
      <Rotate>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mern Stack</span>
                <img
                  src="https://th.bing.com/th/id/OIP.ISvVea-WpkyJci7ypgIrwwHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="project-1"
                />
              </div>
              <div className="card-image-overly">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">MongoDbB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Mern JOB Website</h5>
                </div>
                {/* eslint-disable-next-line */}
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          <Rotate>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img
                    src="https://th.bing.com/th/id/OIP.vJ5sqgGsIDo7ECyVQuT-awHaEl?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">MongoDbB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Mern Ecommerce Website</h5>
                  </div>
                  {/* eslint-disable-next-line */}
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Rotate>

          <Rotate>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img
                    src="https://th.bing.com/th/id/OIP.vJ5sqgGsIDo7ECyVQuT-awHaEl?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="project-1"
                  />
                </div>
                <div className="card-image-overly">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">MongoDbB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Mern Ecommerce Website</h5>
                  </div>
                  {/* eslint-disable-next-line */}
                  <a className="ad-btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Rotate>
        </div>
      </Rotate>
    </div>
  );
};

export default Projects;
