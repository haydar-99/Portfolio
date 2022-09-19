import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Project.module.css";
import cs from "../../assets/cartImage.jpg"

import React from "react";

function Projects() {
  return (
    <div className={` ${css.project}`} id="Projects">
      <div className="row">
        <div className={`col `}>
          <div className={`card ${css.cardSize}`}>
            <img
              className="card-img-top"
              src={cs}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p>jere os jdkla.</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className={`col `}>
          <div className={`card ${css.cardSize}`}>
            <img
              class="card-img-top"
              src="client\src\assets\cartImage.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p>jere os jdkla.</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="w-100"></div>
        <div className={`col `}>
          <div className={`card ${css.cardSize}`}>
            <img
              class="card-img-top"
              src="client\src\assets\cartImage.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p>jere os jdkla.</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className={`col `}>
          <div className={`card ${css.cardSize}`}>
            <img
              class="card-img-top"
              src="client\src\assets\cartImage.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p>jere os jdkla.</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;




// old design, might be helpful
// <div className={` ${css.project}`} id="Projects">
// <div className="row">
//   <div className={`col `}>
//     <div className={`card ${css.cardSize}`}>
//       <img
//         className="card-img-top"
//         src={cs}
//         alt="Card image cap"
//       />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p>jere os jdkla.</p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   </div>

//   <div className={`col `}>
//     <div className={`card ${css.cardSize}`}>
//       <img
//         class="card-img-top"
//         src="client\src\assets\cartImage.jpg"
//         alt="Card image cap"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p>jere os jdkla.</p>
//         <a href="#" class="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   </div>

//   <div className="w-100"></div>
//   <div className={`col `}>
//     <div className={`card ${css.cardSize}`}>
//       <img
//         class="card-img-top"
//         src="client\src\assets\cartImage.jpg"
//         alt="Card image cap"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p>jere os jdkla.</p>
//         <a href="#" class="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   </div>

//   <div className={`col `}>
//     <div className={`card ${css.cardSize}`}>
//       <img
//         class="card-img-top"
//         src="client\src\assets\cartImage.jpg"
//         alt="Card image cap"
//       />
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p>jere os jdkla.</p>
//         <a href="#" class="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
// </div>