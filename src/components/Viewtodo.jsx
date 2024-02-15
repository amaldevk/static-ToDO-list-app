import React, { useEffect, useState } from 'react'
import Navtodo from './Navtodo'
import axios from 'axios';

const Viewtodo = () => {
    const [data, setData] = useState([]);
    const getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                setData(response.data)
            }
        )
    }

    useEffect( ()=>{getData()},[])
  return (
    <div>
        <Navtodo/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">userid</th>
                                    <th scope="col">id</th>
                                    <th scope="col">title</th>
                                    <th scope="col">Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                   {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td>{value.userId}</td>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.completed ? "true" : "false"}</td>
                                            </tr>
                                        }
                                    )
                                   }
                                </tbody>
                                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewtodo