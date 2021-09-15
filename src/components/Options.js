import React from "react";
import {Link} from "react-router-dom";

function Options(){
  return (
    
       <div className = "text-center optionsDiv">
        <ul>
          <hr />
          <Link to="/orderlist" className="btn btn-success">Confirm Orders</Link>
          <hr />  
          <Link to="/placeorder" className="btn btn-success">Place your Order</Link>
          <hr />
          <Link to="/cancelorder" className="btn btn-success">Cancel Order</Link>
        </ul>   
      </div>
     
);
}
export default Options;