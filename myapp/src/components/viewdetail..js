import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Tabs, Tab} from 'react-bootstrap';
import '../style.css';
import axios from 'axios';
import './home';
class Home extends Component {

    constructor() {
        super()
        this.state = {
           
        };
    }
 componentDidMountGet(e) {
  console.log(e.target.id);
  console.log(e.currentTarget.id);
  axios.get('http://localhost:4000/')
      .then(res => {
          const response =
           res.data;
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

    return (
    <div>
        <table>
            <tr>
                <td>Photograph </td> <td></td>
            </tr>
            <tr>
                <td> First Name </td> <td></td>
            </tr>
            <tr>
                <td> Middle Name </td> <td></td>
            </tr>
            <tr>
                <td>Last Name </td> <td></td>
            </tr>
            <tr>
                <td>Gender </td> <td></td>
            </tr>
            <tr>
                <td>Home Address</td> <td></td>
            </tr>
            <tr>
                <td>Apartment / House </td> <td></td>
            </tr>
            <tr>
                <td>Floor</td> <td></td>
            </tr>
            <tr>
                <td>Street Address</td> <td></td>
            </tr>
            <tr>
                <td>City</td> <td></td>
            </tr>
            <tr>
                <td>State </td> <td></td>
            </tr>
            <tr>
                <td>Country </td> <td></td>
            </tr>
            <tr>
                <td>Pin / Zip Code </td> <td></td>
            </tr>
            <tr>
                <td>  Phone Number (Home) </td> <td></td>
            </tr>
            <tr>
                <td>Country  </td> <td></td>
            </tr>
            <tr>
                <td> Area Code</td> <td></td>
            </tr>
            <tr>
                <td>Phone Number </td> <td></td>
            </tr>
            <tr>
                <td>  Phone Number(Mobile) </td> <td></td>
            </tr>
            <tr>
                <td>Country  </td> <td></td>
            </tr>
            <tr>
                <td> Area Code</td> <td></td>
            </tr>
            <tr>
                <td>Phone Number  </td> <td></td>
            </tr>
            <tr>
                <td>  Emergency Contact Number </td> <td></td>
            </tr>
            <tr>
                <td>Country  </td> <td></td>
            </tr>
            <tr>
                <td> Area Code</td> <td></td>
            </tr>
            <tr>
                <td>Phone Number  </td> <td></td>
            </tr>
            <tr>
                <td>Marital Status </td> <td></td>
            </tr>
            <tr>
                <td>Personal Email Address </td> <td></td>
            </tr>
            <tr>
                <td>Alternative Email Address </td> <td></td>
            </tr>
            <tr>
                <td>Passport Copy / ID - Attachment </td> <td></td>
            </tr>
            <tr>
                <td>Visa - Attachment  </td> <td></td>
            </tr>
            <tr>
                <td>CV - Attachment </td> <td></td>
            </tr>
            <tr>
                <td>Date of Joining </td> <td></td>
            </tr>
            <tr>
                <td>Basic Salary  </td> <td></td>
            </tr>
            <tr>
                <td>Other Allowances </td> <td></td>
            </tr>
            <tr>
                <td>Incentives </td> <td></td>
            </tr>
            <tr>
                <td>Work Location  </td> <td></td>
            </tr>
            <tr>
                <td>Department  </td> <td></td>
            </tr>
            <tr>
                <td>Joining Grade </td> <td></td>
            </tr>
            <tr>
                <td>Role  </td> <td></td>
            </tr>
            <tr>
                <td>Contract  </td> <td></td>
            </tr>
            <tr>
                <td>Account Name </td> <td></td>
            </tr>
            <tr>
                <td>Bank </td> <td></td>
            </tr>
            <tr>
                <td>Branch Code </td> <td></td>
            </tr>
            <tr>
                <td> IFSC Code </td> <td></td>
            </tr>
            <tr>
                <td> Swift Code </td> <td></td>
            </tr>
            <tr>
                <td>Account Number </td> <td></td>
            </tr>
            <tr>
                <td>IBAN Number </td> <td></td>
            </tr>
            
        </table>
    </div>  
        
    );
    }

}