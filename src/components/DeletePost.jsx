import React from 'react'
import NavBar from './NavBar'

const DeletePost = () => {
  return (
    <div>
<NavBar/>
<br />
<center><h1>DELETE POST</h1>
<br />
<div className="container">
    <div className="row">
        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <label htmlFor="" className="form-label">Id</label>
                    <input type="number" name="" id="" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</div>
</center>
    </div>
  )
}

export default DeletePost