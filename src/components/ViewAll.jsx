import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {

    const [data, changeData] = useState([])
    const fetchData=()=>{
       axios("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
            changeData(response.data)
        }
       ).catch() 
    }
    useEffect(
        ()=>{fetchData()},[]
    )


    return (
        <div>
            <NavBar />
            <center><h1>VIEW POSTS</h1></center>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-1 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">

                            {
                                data.map(
                                    (value,index) => {
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">UserId :{value.userId}</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary">Title : {value.title}</h6>
                                                <p className="card-text">{value.body}</p>
        
                                            </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }

                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll