import React , {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import {Tabs, Tab} from 'react-bootstrap';
import '../style.css';
import axios from 'axios';
// import './home';
// import { data } from 'jquery';

class ViewDetail extends Component {

    constructor() {
        super()
        this.state = {
            
        };
        
    }
 componentDidMount() {
  console.log(this.props.location.data.item._id);
  
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

render() {
    // const { students } = this.state
    // console.log(students);
    // console.log(this.props.location);
    // console.log(this.props.location.data.item);
    return (
    <div className="container">
        <br/>
        <div>
                <button type="button" className="btn btn-primary" onClick={() => { this.props.history.replace('/') }} >
                back
                </button>
        </div>
        <br/>
        <table border="2" className="table table-striped">
            <tr>
                <td>Photograph</td> 
                <td>{this.props.location.data.item.photograph}</td>
            </tr>
            <tr>
                <td>First Name</td> 
                <td>{this.props.location.data.item.firstname}</td>
            </tr>
            <tr>
                <td>Middle Name</td> 
                <td>{this.props.location.data.item.middlename}</td>
            </tr>
            <tr>
                <td>Last Name</td> 
                <td>{this.props.location.data.item.lastname}</td>
            </tr>
            <tr>
                <td>Gender</td> 
                <td>{this.props.location.data.item.gender}</td>
            </tr>
            <tr>
                <td>DOB</td> 
                <td>{this.props.location.data.item.bday}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Home Address</h3></td> 
                {/* <td>{this.props.location.data.item.lastname}</td> */}
            </tr>
            <tr>
                <td>Apartment / House</td> 
                <td>{this.props.location.data.item.apt}</td>
            </tr>
            <tr>
                <td>Floor</td>
                <td>{this.props.location.data.item.floor}</td>
            </tr>
            <tr>
                <td>Street Address</td> 
                <td>{this.props.location.data.item.street}</td>
            </tr>
            <tr>
                <td>City</td> 
                <td>{this.props.location.data.item.city}</td>
            </tr>
            <tr>
                <td>State</td>
                <td>{this.props.location.data.item.state}</td>
            </tr>
            <tr>
                <td>Country</td> 
                <td>{this.props.location.data.item.country}</td>
            </tr>
            <tr>
                <td>Pin / Zip Code</td> 
                <td>{this.props.location.data.item.zip}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Temporary Address</h3></td> 
                {/* <td>{this.props.location.data.item.lastname}</td> */}
            </tr>
            <tr>
                <td>Apartment / House</td> 
                <td>{this.props.location.data.item.tapt}</td>
            </tr>
            <tr>
                <td>Floor</td>
                <td>{this.props.location.data.item.tfloor}</td>
            </tr>
            <tr>
                <td>Street Address</td> 
                <td>{this.props.location.data.item.tstreet}</td>
            </tr>
            <tr>
                <td>City</td> 
                <td>{this.props.location.data.item.tcity}</td>
            </tr>
            <tr>
                <td>State</td>
                <td>{this.props.location.data.item.tstate}</td>
            </tr>
            <tr>
                <td>Country</td> 
                <td>{this.props.location.data.item.tcountry}</td>
            </tr>
            <tr>
                <td>Pin / Zip Code</td> 
                <td>{this.props.location.data.item.tzip}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Phone Number (Home)</h3></td>
            </tr>
            <tr>
                <td>Country</td> 
                <td>{this.props.location.data.item.countrycode}</td>
            </tr>
            <tr>
                <td>Area Code</td> 
                <td>{this.props.location.data.item.areacode}</td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td>{this.props.location.data.item.phonenum}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Phone Number (Mobile)</h3></td>
            </tr>
            <tr>
                <td>Country</td> 
                <td>{this.props.location.data.item.mcountrycode}</td>
            </tr>
            <tr>
                <td>Area Code</td> 
                <td>{this.props.location.data.item.mareacode}</td>
            </tr>
            <tr>
                <td>Mobile Phone Number</td>
                <td>{this.props.location.data.item.mmobilenum}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Emergency Contact Number</h3></td>
            </tr>
            <tr>
                <td>Country</td> 
                <td>{this.props.location.data.item.ecountrycode}</td>
            </tr>
            <tr>
                <td>Area Code</td> 
                <td>{this.props.location.data.item.eareacode}</td>
            </tr>
            <tr>
                <td>Mobile Phone Number</td>
                <td>{this.props.location.data.item.emobilenum}</td>
            </tr>
            <tr>
                <td>Marital Status</td> 
                <td>{this.props.location.data.item.marriage}</td>
            </tr>
            <tr>
                <td>Personal Email Address </td>
                <td>{this.props.location.data.item.email1}</td>
            </tr>
            <tr>
                <td>Alternative Email Address</td> 
                <td>{this.props.location.data.item.emailAlt}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>ID</h3></td>
            </tr>
            <tr>
                <td>Passport Copy / ID - Attachment</td> 
                <td>{this.props.location.data.item.passport}</td>
            </tr>
            <tr>
                <td>Visa - Attachment</td> 
                <td>{this.props.location.data.item.visa}</td>
            </tr>
            <tr>
                <td>Visa Expiration Date</td> 
                <td>{this.props.location.data.item.visaexpdate}</td>
            </tr>
            <tr>
                <td>Insurance Expiration Date</td> 
                <td>{this.props.location.data.item.insexpdate}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Joining Details</h3></td>
            </tr>
            <tr>
                <td>CV - Attachment</td> 
                <td>{this.props.location.data.item.cv}</td>
            </tr>
            <tr>
                <td>Date of Joining</td>
                <td>{this.props.location.data.item.dfj}</td>
            </tr>
            <tr>
                <td>Basic Salary</td>
                <td>{this.props.location.data.item.basicSal}</td>
            </tr>
            <tr>
                <td>Other Allowances</td> 
                <td>{this.props.location.data.item.otherAll}</td>
            </tr>
            <tr>
                <td>Incentives</td> 
                <td>{this.props.location.data.item.incentives}</td>
            </tr>
            <tr>
                <td>Work Location</td> 
                <td>{this.props.location.data.item.worklocation}</td>
            </tr>
            <tr>
                <td>Department</td> 
                <td>{this.props.location.data.item.department}</td>
            </tr>
            <tr>
                <td>Joining Grade</td>
                <td>{this.props.location.data.item.joininggrade}</td>
            </tr>
            <tr>
                <td>Role</td> 
                <td>{this.props.location.data.item.role}</td>
            </tr>
            <tr>
                <td>Contract</td>
                <td>{this.props.location.data.item.contract}</td>
            </tr>
            <tr>
                <td colSpan="2"><h3>Banking Details</h3></td>
            </tr>
            <tr>
                <td>Account Name</td> 
                <td>{this.props.location.data.item.acname}</td>
            </tr>
            <tr>
                <td>Bank</td> 
                <td>{this.props.location.data.item.bank}</td>
            </tr>
            <tr>
                <td>Branch Code</td>
                <td>{this.props.location.data.item.branchcode}</td>
            </tr>
            <tr>
                <td>IFSC Code</td>
                <td>{this.props.location.data.item.ifsc}</td>
            </tr>
            <tr>
                <td>Swift Code</td>
                <td>{this.props.location.data.item.swiftcode}</td>
            </tr>
            <tr>
                <td>Account Number</td>
                <td>{this.props.location.data.item.acnum}</td>
            </tr>
            <tr>
                <td>IBAN Number</td> 
                <td>{this.props.location.data.item.ibannum}</td>
            </tr>            
        </table>
        <br/>
        <div>
                <button type="button" className="btn btn-primary" onClick={() => { this.props.history.replace('/') }} >
                back
                </button>
        </div>
        <br/><br/>
    </div>  
        
    );
    }

}
export default ViewDetail;