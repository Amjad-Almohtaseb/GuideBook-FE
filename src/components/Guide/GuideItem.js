// still under work


import React from 'react'
import { Link } from 'react-router-dom'

const GuideItem = () => {
    return (
        <Link to="/guides/:guideSlug">
           <div className="card mb-3 absolute flex ml-10 mt-4 max-w-xl" >
  <div className="row no-gutters">
    <div className="col-md-4">
    <img className="card-img" src="https://cdn1.vectorstock.com/i/1000x1000/32/10/young-man-avatar-character-vector-14213210.jpg" alt="guide-image" />
    </div>
    <div className="col-md-8 ">
      <div className="card-body">
        <h4 className="card-title absolute top-10 ">@Amjad123 </h4>

        <p className="card-text absolute left-3/4 top-10 text-blue-600"><h4>$10/person</h4></p>
        <hr className=" relative right-3 top-20" />
        <h5 className="card-title absolute top-32">Max group size</h5>
        <h5 className="card-title right-72 absolute top-40">2</h5>

<p className="card-text absolute right-4 top-3/4 text-blue-600"><h5>⭐⭐⭐⭐⭐</h5></p>
        <p className="card-text"><p style={{color:"blueviolet"}}></p></p>
      </div>
    </div>
  </div>
</div> 
        </Link>
    )
}

export default GuideItem
