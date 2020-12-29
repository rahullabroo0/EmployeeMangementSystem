import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../style.css';
import validateEmail from '../custom.js';
import { val1 } from '../custom.js';
import { copyaddress } from '../custom.js';
import axios from 'axios';
// import '../App.css'; 
  
class Employee extends Component {
  
  constructor(props) {
    super(props)

    // Setting up functions
    // this.onChangefirstname = this.onChangefirstname.bind(this);
    // this.onChangemiddlename = this.onChangemiddlename.bind(this);
    // this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangephotograph = this.onChangephotograph.bind(this);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangemiddlename = this.onChangemiddlename.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
this.onChangebday = this.onChangebday.bind(this);
this.onChangeapt = this.onChangeapt.bind(this);
this.onChangefloor = this.onChangefloor.bind(this);
this.onChangestreet = this.onChangestreet.bind(this);
this.onChangecity = this.onChangecity.bind(this);
this.onChangestate = this.onChangestate.bind(this);
this.onChangecountry = this.onChangecountry.bind(this);

this.onChangezip = this.onChangezip.bind(this);
this.onChangetapt = this.onChangetapt.bind(this);
this.onChangetfloor = this.onChangetfloor.bind(this);
this.onChangetstreet = this.onChangetstreet.bind(this);
this.onChangetcity = this.onChangetcity.bind(this);
this.onChangetstate = this.onChangetstate.bind(this);
this.onChangetcountry = this.onChangetcountry.bind(this);
this.onChangetzip = this.onChangetzip.bind(this);


this.onChangecountrycode = this.onChangecountrycode.bind(this);
this.onChangeareacode = this.onChangeareacode.bind(this);
this.onChangephonenum = this.onChangephonenum.bind(this);
this.onChangemcountrycode = this.onChangemcountrycode.bind(this);
this.onChangemareacode = this.onChangemareacode.bind(this);
this.onChangemmobilenum = this.onChangemmobilenum.bind(this);
this.onChangeecountrycode = this.onChangeecountrycode.bind(this);
this.onChangeeareacode = this.onChangeeareacode.bind(this);
this.onChangeemobilenum = this.onChangeemobilenum.bind(this);
this.onChangemarriage = this.onChangemarriage.bind(this);

this.onChangeemail1 = this.onChangeemail1.bind(this);
this.onChangeemailAlt = this.onChangeemailAlt.bind(this);
this.onChangepassport = this.onChangepassport.bind(this);
this.onChangevisa = this.onChangevisa.bind(this);
this.onChangevisaexpdate = this.onChangevisaexpdate.bind(this);
this.onChangeinsexpdate = this.onChangeinsexpdate.bind(this);
this.onChangecv = this.onChangecv.bind(this);
this.onChangedfj = this.onChangedfj.bind(this);
this.onChangebasicSal = this.onChangebasicSal.bind(this);
this.onChangeotherAll = this.onChangeotherAll.bind(this);
this.onChangeincentives = this.onChangeincentives.bind(this);
this.onChangeworklocation = this.onChangeworklocation.bind(this);
this.onChangedepartment = this.onChangedepartment.bind(this);
this.onChangejoininggrade = this.onChangejoininggrade.bind(this);
this.onChangerole = this.onChangerole.bind(this);
this.onChangecontract = this.onChangecontract.bind(this);
this.onChangeacname = this.onChangeacname.bind(this);
this.onChangebank = this.onChangebank.bind(this);
this.onChangebranchcode = this.onChangebranchcode.bind(this);
this.onChangeifsc = this.onChangeifsc.bind(this);
this.onChangeswiftcode = this.onChangeswiftcode.bind(this);
this.onChangeacnum = this.onChangeacnum.bind(this);
this.onChangeibannum = this.onChangeibannum.bind(this);




    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      // firstname: '',
      // middlename: '',
      // lastname: ''
      photograph:"",

      firstname:"",
middlename:"",
lastname:"",
gender:"",
bday:"",
apt:"",
floor:"",
street:"",
city:"",
state:"",
country:"",

zip:"",
tapt:"",
tfloor:"",
tstreet:"",
tcity:"",
tstate:"",
tcountry:"",
tzip:"",


countrycode:"",
areacode:"",
phonenum:"",
mcountrycode:"",
mareacode:"",
mmobilenum:"",
ecountrycode:"",
eareacode:"",
emobilenum:"",
marriage:"",

email1:"",
emailAlt:"",
passport:"",
visa:"",
visaexpdate:"",
insexpdate:"",
cv:"",
dfj:"",
basicSal:"",
otherAll:"",
incentives:"",
worklocation:"",
department:"",
joininggrade:"",
role:"",
contract:"",
acname:"",
bank:"",
branchcode:"",
ifsc:"",
swiftcode:"",
acnum:"",
ibannum:"",


    }
  }

  // onChangefirstname(e) {
  //   this.setState({ firstname: e.target.value })
  // }

  // onChangemiddlename(e) {
  //   this.setState({ middlename: e.target.value })
  // }

  // onChangelastname(e) {
  //   this.setState({ lastname: e.target.value })
  // }
  onChangephotograph(e){this.setState({photograph : e.target.value})}

  onChangefirstname(e){this.setState({firstname : e.target.value})}
  onChangemiddlename(e){this.setState({middlename : e.target.value})}
  onChangelastname(e){this.setState({lastname : e.target.value})}
  onChangegender(e){this.setState({gender : e.target.value})}
onChangebday(e){this.setState({bday : e.target.value})}
onChangeapt(e){this.setState({apt : e.target.value})}
onChangefloor(e){this.setState({floor : e.target.value})}
onChangestreet(e){this.setState({street : e.target.value})}
onChangecity(e){this.setState({city : e.target.value})}
onChangestate(e){this.setState({state : e.target.value})}
onChangecountry(e){this.setState({country : e.target.value})}

onChangezip(e){this.setState({zip : e.target.value})}
onChangetapt(e){this.setState({tapt : e.target.value})}
onChangetfloor(e){this.setState({tfloor : e.target.value})}
onChangetstreet(e){this.setState({tstreet : e.target.value})}
onChangetcity(e){this.setState({tcity : e.target.value})}
onChangetstate(e){this.setState({tstate : e.target.value})}
onChangetcountry(e){this.setState({tcountry : e.target.value})}
onChangetzip(e){this.setState({tzip : e.target.value})}


onChangecountrycode(e){this.setState({countrycode : e.target.value})}
onChangeareacode(e){this.setState({areacode : e.target.value})}
onChangephonenum(e){this.setState({phonenum : e.target.value})}
onChangemcountrycode(e){this.setState({mcountrycode : e.target.value})}
onChangemareacode(e){this.setState({mareacode : e.target.value})}
onChangemmobilenum(e){this.setState({mmobilenum : e.target.value})}
onChangeecountrycode(e){this.setState({ecountrycode : e.target.value})}
onChangeeareacode(e){this.setState({eareacode : e.target.value})}
onChangeemobilenum(e){this.setState({emobilenum : e.target.value})}
onChangemarriage(e){this.setState({marriage : e.target.value})}


onChangeemail1(e){this.setState({email1 : e.target.value})}
onChangeemailAlt(e){this.setState({emailAlt : e.target.value})}
onChangepassport(e){this.setState({passport : e.target.value})}
onChangevisa(e){this.setState({visa : e.target.value})}
onChangevisaexpdate(e){this.setState({visaexpdate : e.target.value})}
onChangeinsexpdate(e){this.setState({insexpdate : e.target.value})}
onChangecv(e){this.setState({cv : e.target.value})}
onChangedfj(e){this.setState({dfj : e.target.value})}
onChangebasicSal(e){this.setState({basicSal : e.target.value})}
onChangeotherAll(e){this.setState({otherAll : e.target.value})}
onChangeincentives(e){this.setState({incentives : e.target.value})}
onChangeworklocation(e){this.setState({worklocation : e.target.value})}
onChangedepartment(e){this.setState({department : e.target.value})}
onChangejoininggrade(e){this.setState({joininggrade : e.target.value})}
onChangerole(e){this.setState({role : e.target.value})}
onChangecontract(e){this.setState({contract : e.target.value})}
onChangeacname(e){this.setState({acname : e.target.value})}
onChangebank(e){this.setState({bank : e.target.value})}
onChangebranchcode(e){this.setState({branchcode : e.target.value})}
onChangeifsc(e){this.setState({ifsc : e.target.value})}
onChangeswiftcode(e){this.setState({swiftcode : e.target.value})}
onChangeacnum(e){this.setState({acnum : e.target.value})}
onChangeibannum(e){this.setState({ibannum : e.target.value})}




  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      // firstname: this.state.firstname,
      // middlename: this.state.middlename,
      // lastname: this.state.lastname
      photograph : this.state.photograph,

      firstname : this.state.firstname,
middlename : this.state.middlename,
lastname : this.state.lastname,
gender : this.state.gender,
bday : this.state.bday,
apt : this.state.apt,
floor : this.state.floor,
street : this.state.street,
city : this.state.city,
state : this.state.state,
country : this.state.country,

zip : this.state.zip,
tapt : this.state.tapt,
tfloor : this.state.tfloor,
tstreet : this.state.tstreet,
tcity : this.state.tcity,
tstate : this.state.tstate,
tcountry : this.state.tcountry,
tzip : this.state.tzip,

countrycode : this.state.countrycode,
areacode : this.state.areacode,
phonenum : this.state.phonenum,
mcountrycode : this.state.mcountrycode,
mareacode : this.state.mareacode,
mmobilenum : this.state.mmobilenum,
ecountrycode : this.state.ecountrycode,
eareacode : this.state.eareacode,
emobilenum : this.state.emobilenum,
marriage : this.state.marriage,

email1 : this.state.email1,
emailAlt : this.state.emailAlt,
passport : this.state.passport,
visa : this.state.visa,
visaexpdate : this.state.visaexpdate,
insexpdate : this.state.insexpdate,
cv : this.state.cv,
dfj : this.state.dfj,
basicSal : this.state.basicSal,
otherAll : this.state.otherAll,
incentives : this.state.incentives,
worklocation : this.state.worklocation,
department : this.state.department,
joininggrade : this.state.joininggrade,
role : this.state.role,
contract : this.state.contract,
acname : this.state.acname,
bank : this.state.bank,
branchcode : this.state.branchcode,
ifsc : this.state.ifsc,
swiftcode : this.state.swiftcode,
acnum : this.state.acnum,
ibannum : this.state.ibannum,


    };

    axios.post('http://localhost:4000/', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      // firstname: '',
      // middlename: '',
      // lastname: ''
      photograph:"",

      firstname:"",
middlename:"",
lastname:"",
gender:"",
bday:"",
apt:"",
floor:"",
street:"",
city:"",
state:"",
country:"",

zip:"",
tapt:"",
tfloor:"",
tstreet:"",
tcity:"",
tstate:"",
tcountry:"",
tzip:"",

countrycode:"",
areacode:"",
phonenum:"",
mcountrycode:"",
mareacode:"",
mmobilenum:"",
ecountrycode:"",
eareacode:"",
emobilenum:"",
marriage:"",

email1:"",
emailAlt:"",
passport:"",
visa:"",
visaexpdate:"",
insexpdate:"",
cv:"",
dfj:"",
basicSal:"",
otherAll:"",
incentives:"",
worklocation:"",
department:"",
joininggrade:"",
role:"",
contract:"",
acname:"",
bank:"",
branchcode:"",
ifsc:"",
swiftcode:"",
acnum:"",
ibannum:"",

    });
    this.props.history.replace('/');
  }





    render() {
        return (
<form name="myForm" onSubmit={this.onSubmit}>
<div className="container">
    <fieldset className="scheduler-border">
    <legend className="scheduler-border">Employee Management System </legend>
    <br/><br/>

    <button type="button" className="btn btn-primary btn-block" data-toggle="collapse" data-target="#d1"> Basic Information</button>
    <div id="d1" className="collapse show">
    
  <div className="row mb-4">
        <div className="col">
            <label htmlFor="photograph">Photo</label>
            <input type="file" className="form-control-file" id="photograph" onChange={this.onChangephotograph}
 />
        </div>
        <div className="col">
          <label htmlFor="firstname">First Name</label>
          <input className="form-control" type="text" placeholder="First Name" id="firstname" 
          onChange={this.onChangefirstname} />
          <span id="firstnameerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="middlename">Middle Name</label>
          <input className="form-control" type="text" placeholder="Middle Name"
          onChange={this.onChangemiddlename} />
          
        </div>
        <div className="col">
          <label htmlFor="lastname">Last Name</label>
          <input className="form-control" type="text" placeholder="Last Name" id="lastname" 
          onChange={this.onChangelastname} />
          <span id="lastnameerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
<fieldset> 
  <legend >Gender</legend>         

<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="gender" value="male" onChange={this.onChangegender}
 />
  <label className="form-check-label" htmlFor="male">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="gender" value="female" onChange={this.onChangegender}
 />
  <label className="form-check-label" htmlFor="female">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="gender" id="gender" value="othergender" onChange={this.onChangegender}
 />
  <label className="form-check-label" htmlFor="othergender">Other Gender</label>
</div>
</fieldset>
<span id="gendererr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="bday">DOB</label>
            <input type="date" className="form-control" name="bday" id="bday" onChange={this.onChangebday}
 /> 
            <span id="bdayerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="homeaddress">Home Address (Permanent)</label>
            <input className="form-control" type="text" placeholder="Apartment/House" id="apt" onChange={this.onChangeapt}
 />
            <span id="apterr" className="err"></span>
            <input className="form-control" type="text" placeholder="Floor" id="floor" onChange={this.onChangefloor}
 />
            <span id="floorerr" className="err"></span>
            <input className="form-control" type="text" placeholder="Street Address" id="street" onChange={this.onChangestreet}
 />
            <span id="streeterr" className="err"></span>
            <input className="form-control" type="text" placeholder="City" id="city" onChange={this.onChangecity}
 />
            <span id="cityerr" className="err"></span>
            <input className="form-control" type="text" placeholder="State" id="state" onChange={this.onChangestate}
 />
            <span id="stateerr" className="err"></span>
            <input className="form-control" type="text" placeholder="Country" id="country" onChange={this.onChangecountry}
 />
            <span id="countryerr" className="err"></span>
            <input className="form-control" type="number" placeholder="Pin/Zip Code" id="zip" onChange={this.onChangezip}
 />
            <span id="ziperr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="homeaddress">Temporary Address</label>
            <input className="form-control" type="text" placeholder="Apartment/House" id="tapt" onChange={this.onChangetapt}
 />
            <span id="tapterr" className="err"></span>
            <input className="form-control" type="text" placeholder="Floor" id="tfloor" onChange={this.onChangetfloor}
 />
            <span id="tfloorerr" className="err"></span>
            <input className="form-control" type="text" placeholder="Street Address" id="tstreet" onChange={this.onChangetstreet}
 />
            <span id="tstreeterr" className="err"></span>
            <input className="form-control" type="text" placeholder="City" id="tcity" onChange={this.onChangetcity}
 />
            <span id="tcityerr" className="err"></span>
            <input className="form-control" type="text" placeholder="State" id="tstate" onChange={this.onChangetstate}
 />
            <span id="tstateerr" className="err"></span>
            <input className="form-control" type="text" placeholder="Country" id="tcountry" onChange={this.onChangetcountry}
 />
            <span id="tcountryerr" className="err"></span>
            <input className="form-control" type="number" placeholder="Pin/Zip Code" id="tzip" onChange={this.onChangetzip}
 />
            <span id="tziperr" className="err"></span>
            <div className="form-check">
                <input className="form-check-input" onClick={() => copyaddress()} type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1" >
                  Same as home address
                </label>
            </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label className="form-check-label" htmlFor="phonenumber">Phone Number</label>
            <div className="form-check-inline">
                <input className="form-control" type="text" placeholder="Country" id="countrycode" 
                onChange={this.onChangecountrycode}
 />
                <input className="form-control" type="text" placeholder="Area Code" id="areacode" 
                onChange={this.onChangeareacode}
 />
                <input className="form-control" type="number" placeholder="Phone Number" id="phonenum" 
                onChange={this.onChangephonenum}
 />
            </div>
            <div className="form-check-inline">
                <span id="countrycodeerr" className="err errwidth"></span>
                <span id="areacodeerr" className="err errwidth"></span>
                <span id="phonenumerr" className="err errwidth"></span>
            </div>
        </div>
        <div className="col">
            <label className="form-check-label" htmlFor="phonenumber">Mobile Number</label>
            <div className="form-check-inline">
                <input className="form-control" type="text" placeholder="Country" id="mcountrycode"
                onChange={this.onChangemcountrycode}
 />
                <input className="form-control" type="text" placeholder="Area Code" id="mareacode" 
                onChange={this.onChangemareacode}
 />
                <input className="form-control" type="number" placeholder="Mobile Number" id="mmobilenum"
                 onChange={this.onChangemmobilenum}
 />
            </div>
            <div className="form-check form-check-inline">
                <span id="mcountrycodeerr" className="err errwidth"></span>
                <span id="mareacodeerr" className="err errwidth"></span>
                <span id="mmobilenumerr" className="err errwidth"></span>
            </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label className="form-check-label" htmlFor="phonenumber">Emergency Number</label>
            <div className="form-check-inline">
                <input className="form-control" type="text" placeholder="Country" id="ecountrycode"
                 onChange={this.onChangeecountrycode}
 />
                <input className="form-control" type="text" placeholder="Area Code" id="eareacode" 
                // onChange={this.onChangeeareacode}
 />
                <input className="form-control" type="number" placeholder="Mobile Number" id="emobilenum" 
                onChange={this.onChangeemobilenum}
 />
            </div>
            <div className="form-check-inline">
                <span id="ecountrycodeerr" className="err errwidth"></span>
                <span id="eareacodeerr" className="err errwidth"></span>
                <span id="emobilenumerr" className="err errwidth"></span>
            </div>
        </div>
        <div className="col">
          <fieldset> 
            <legend >Marital Status</legend>  
            <div className="form-check-inline">
                <input className="form-check-input" type="radio" name="marriage" id="marriage" value="married" 
                onChange={this.onChangemarriage}
 />
                <label className="form-check-label" htmlFor="married">Married</label>
            </div>
            <div className="form-check-inline">
                <input className="form-check-input" type="radio" name="marriage" id="marriage" value="single" 
                onChange={this.onChangemarriage}
 />
                <label className="form-check-label" htmlFor="single">Single</label>
            </div>
            </fieldset>
            <span id="marriageerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" onBlur={(e) => validateEmail(e.target.value)}  name="email1" className="form-control" id="email1" placeholder="Email" onChange={this.onChangeemail1}
 />
            <span id="email1err" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="inputEmail4">Alternative Email</label>
            <input type="email" onBlur={(e) => validateEmail(e.target.value)} name="emailAlt" className="form-control" id="emailAlt" placeholder="Email" onChange={this.onChangeemailAlt}
 />
            <span id="emailAlterr" className="err"></span>
        </div>
      </div>
</div>


<br/>

<button type="button" className="btn btn-primary btn-block" data-toggle="collapse" data-target="#d2">ID</button>
  <div id="d2" className="collapse show">      
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="passport">Passport/ID</label>
            <input type="file" className="form-control-file" id="passport" onChange={this.onChangepassport}
 />
        </div>
        <div className="col">
            <label htmlFor="visa">Visa</label>
            <input type="file" className="form-control-file" id="visa" onChange={this.onChangevisa}
  />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="visaexpdate">Visa Expiration Date</label>
            <input type="date" className="form-control" name="visaexpdate" id="visaexpdate" onChange={this.onChangevisaexpdate}
 />
            <span id="visaexpdateerr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="insexpdate">Insuration Expiration Date</label>
            <input type="date" className="form-control" name="insexpdate" id="insexpdate" onChange={this.onChangeinsexpdate}
 />
            <span id="insexpdateerr" className="err"></span>
        </div>
      </div>
</div>

<br/>
<button type="button" className="btn btn-primary btn-block" data-toggle="collapse" data-target="#d3"> Joining Details</button>
  <div id="d3" className="collapse show">      
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="cv">CV</label>
            <input type="file" className="form-control-file" id="cv" onChange={this.onChangecv}
 />
        </div>
        <div className="col">
            <label htmlFor="dfj">Date of Joining</label>
            <input type="date" className="form-control" name="dfj" id="dfj" onChange={this.onChangedfj}
 />
            <span id="dfjerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <label htmlFor="basicsalary">Basic Salary(USD) </label>
          <input className="form-control" type="number" placeholder="Basic Salary(USD)" id="basicSal" onChange={this.onChangebasicSal}
 />
          <span id="basicSalerr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="otherAll">Other Allowances (USD) </label>
            <input className="form-control" type="number" placeholder="Other Allowances (USD)" id="otherAll" onChange={this.onChangeotherAll}
 />
            <span id="otherAllerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="incentives">Incentives</label>
            <input className="form-control" type="number" placeholder="Incentives" id="incentives" onChange={this.onChangeincentives}
 />
            <span id="incentiveserr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="worklocation">Work Location</label>
            <input className="form-control" type="text" placeholder="Work Location" id="worklocation" onChange={this.onChangeworklocation}
 />
            <span id="worklocationerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="department">Department</label>
            <input className="form-control" type="text" placeholder="Department" id="department" onChange={this.onChangedepartment}
 />
            <span id="departmenterr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="joininggrade">Joining Grade</label>
            <input className="form-control" type="text" placeholder="Joining Grade" id="joininggrade" onChange={this.onChangejoininggrade}
 />
            <span id="joininggradeerr" className="err"></span>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
            <label htmlFor="role">Role</label>
            <input className="form-control" type="text" placeholder="Role" id="role" onChange={this.onChangerole}
 />
            <span id="roleerr" className="err"></span>
        </div>
        <div className="col">
            <label htmlFor="contract">Contract</label>
            <input type="file" className="form-control-file" id="contract" onChange={this.onChangecontract}
 />
        </div>
      </div>
</div>

<br/>
<button type="button" className="btn btn-primary btn-block" data-toggle="collapse" data-target="#d4"> Banking Details (Mandatory)</button>
  <div id="d4" className="collapse show">
      <div className="row mb-4">
          <div className="col">
              <label htmlFor="acname">Account Name</label>
              <input className="form-control" type="text" placeholder="Account Name" id="acname" onChange={this.onChangeacname}
 />
              <span id="acnameerr" className="err"></span>
          </div>
          <div className="col">
              <label htmlFor="bank">Bank</label>
              <input className="form-control" type="text" placeholder="Bank" id="bank" onChange={this.onChangebank}
 />
              <span id="bankerr" className="err"></span>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
              <label htmlFor="branchcode">Branch Code</label>
              <input className="form-control" type="text" placeholder="Branch Codes" id="branchcode" onChange={this.onChangebranchcode}
 />
              <span id="branchcodeerr" className="err"></span>
          </div>
          <div className="col">
              <label htmlFor="ifsc">IFSC Code</label>
              <input type="text" className="form-control-file" placeholder="IFSC Code" id="ifsc" onChange={this.onChangeifsc}
 />
              <span id="ifscerr" className="err"></span>
          </div>
        </div>
        <div className="row mb-4">
            <div className="col">
                <label htmlFor="swiftcode">Swift Code</label>
                <input className="form-control" type="text" placeholder="Swift Code" id="swiftcode" onChange={this.onChangeswiftcode}
 />
                <span id="swiftcodeerr" className="err"></span>
            </div>
            <div className="col">
                <label htmlFor="acnum">Account Number</label>
                <input className="form-control" type="number" placeholder="Account Numbers" id="acnum" onChange={this.onChangeacnum}
 />
                <span id="acnumerr" className="err"></span>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
                <label htmlFor="ibannum">IBAN Number</label>
                <input className="form-control" type="number" placeholder="IBAN Number" id="ibannum" onChange={this.onChangeibannum}
 />
                <span id="ibannumerr" className="err"></span>                
            </div>
            <div className="col">
                {/* <!-- <label htmlFor="contract">Contract</label>
                <input type="file" className="form-control-file" id="Contract"> --> */}
            </div>
          </div>          
        </div>
        <br />
        <div className="row mb-4">
            <div className="col cnt" >                
                <button type="submit" className="btn btn-primary"> Draft</button>
            </div>
            <div className="col">
                <button type="button" onClick={() => val1()} className="btn btn-primary"> Submit</button>
            </div>
          </div>
    </fieldset>
  </div>
  </form>
   );
}
}
export default Employee;