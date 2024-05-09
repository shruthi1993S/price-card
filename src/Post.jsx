import React from "react";
import "./Post.css";
function Post(props) {
  return (
    <div >
      <div className="card ">
        <div className="card-header">
          <h3>{props.p1}</h3>
        </div>
        <div className="card-body" >
          <h2>{props.icontick}{props.head}</h2>
          
          <button className="btn btn-primary " type="button">
            BUTTON
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
