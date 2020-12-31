import { Component } from "react";
// import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { myFunction } from '../custom.js';
import '../style.css';
import axios from 'axios';
// import {componentDidMountGet} from './about';
// import React, { useRef } from "react";
// import cors from "cors";
//  import { BrowserRouter as Link } from 'react-router-dom'; 
// import { BrowserRouter as Router, Route, Link, Switch, useNavigates  } from 'react-router-dom'; 
// import Home from './components/home'; 
// import About from './components/about';
// import Employee from '../components/employee';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            students: [{ id: 0 }],
            delid: [{id:0}]
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(res => {
                const response = res.data;
                this.setState({
                    students: response
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    // DataTable() {
    //     this.state.students.map((x, i) => {
    //         return (<div> key={x}, i={i} </div>);
    //     });
    // }
    // this.onSubmit = this.onSubmit.bind(this);
    handleSubmit = event => {
        event.preventDefault();
        
    console.log(this.setState.delid.item._id);
        axios.delete("http://localhost:4000/"+this.setState.delid.item._id)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }


    render() {
        // const { students } = this.state
        // console.log(students);

        return (
            (this.state.students !== []) ? (

                <div className="container">
                    <br /><br /><br />
                    <div className="jombotron">
                        <fieldset className="bor-field">
                            <div>
                                <div className="row mb-4">
                                    <div className="col align-dvd">
                                        <button type="button" className="btn btn-primary" onClick={() => { this.props.history.replace('/employee') }} >Add Employee</button>
                                    </div>
                                </div>
                                <br />
                                <div className="bor-field">

                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label home-field" htmlFor="male">First Name</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label home-field" htmlFor="female">EmaiID</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label home-field" htmlFor="othergender">Mobile No.</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label home-field" htmlFor="othergender">Salary</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

<form onSubmit={this.handleSubmit} >
{
this.items = this.state.students.map((item, key) =>
<div className="boxcover">
<br />
<div className="bor-field">
<div className="row mb-4">
    <div className="col">
        <div className="form-check form-check-inline">
            <label className="form-check-label home-field" htmlFor="male">{item.firstname} {key}</label>
        </div>
        <div className="form-check form-check-inline">
            <label className="form-check-label home-field" htmlFor="female">{item.email1}</label>
        </div>
        <div className="form-check form-check-inline">
            <label className="form-check-label home-field" htmlFor="othergender">{item.mmobilenum}</label>
        </div>
        <div className="form-check form-check-inline">
            <label className="form-check-label home-field" htmlFor="othergender">{item.basicSal}</label>
        </div>
        <div className="form-check form-check-inline ">
            <button type="button" className="btn" data-toggle="collapse" data-target={"#k"+key} id="btnarrow"  >
                <i id={"arr"+key} className="arrow down" onClick={() => myFunction("arr"+key)}></i>
            </button>
        </div>
        <div className="align-dvd">
            <div id={"k"+key} className="collapse">
                <div className="form-check form-check-inline">
                    <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push({ pathname: '/viewdetail', data: {item} } ) }}>
                        {/* <Link to={{ pathname:"/viewdetail" , data :[ item._id] }}>View Detail</Link> */}
                        {/* {this.props.history.push({ pathname: '/viewdetail', data: {item} } ) } */}
View Detail
                    </button>
                </div>
                <div className="form-check form-check-inline">
                    <button type="button" className="btn btn-primary"> Edit</button>
                </div>
                <div className="form-check form-check-inline">
                    <button type="submit" className="btn btn-primary" id={"del"+key} 
                    onClick={() => (this.setState.delid = {item} )} > Delete</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
)
}
</form>

                            </div>

                        </fieldset>
                    </div>
                </div>
            ) : (<div> Loading....</div>)


        );
    }
}
export default Home;