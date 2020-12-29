import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {Tabs, Tab} from 'react-bootstrap';
import '../style.css';

function About (){ 
return (
<div className="container"> 
<Tabs defaultActiveKey="project" id="uncontrolled-tab-example">
  <Tab eventKey="project" title="Project">
    <br/>
    
    <div className="row mb-4">
    <div className="col">
        <div className="form-group form-check-inline">
          <label className="form-inline-width" htmlFor="client">Client</label>
          <select className="form-control form-inline-width" id="client">
            <option>Search Functionality</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      </div>
<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="enduser" className="form-inline-width">End User</label>
    <select className="form-control form-inline-width" id="enduser">
      <option>Search Functionality</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </div>
 </div>


<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="projnum" className="form-inline-width">Project Number</label>
    <select className="form-control form-inline-width" id="projnum">
      <option>Automatically Generated</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </div>
</div>

<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="projtitle" className="form-inline-width">Project Title</label>
    <select className="form-control width-full" id="projtitle">
      <option>Project Title</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  </div>
      </div>
<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="totalbudget" className="form-inline-width">Total Budget</label>
    <input type="text" className="form-control form-inline-width" id="totalbudget" aria-describedby="emailHelp" placeholder="US$" />
  </div>
  </div>
      </div>
<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="optionalbudget" className="form-inline-width">Optional Budget</label>
    <input type="text" className="form-control form-inline-width" id="optionalbudget" aria-describedby="emailHelp" placeholder="US$" />
  </div>
  </div>
      </div>
<div className="row mb-4">
<div className="col">
  <div className="form-group form-check-inline">
    <label htmlFor="projtitle" className="form-inline-width">Project Manager</label>
    <select className="form-control form-inline-width" id="projtitle">
      <option>Multui Select</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <span>Amay Kulkarni</span>
  </div>
  </div>
      </div>

  
  </Tab>
  <Tab eventKey="deliverables" title="Deliverables">
  <br/>

  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        <label htmlFor="projtitle" className="form-inline-width">Deliverables</label>
        <select className="form-control width-full" id="projtitle">
          <option>Search functionlity (from deliverables) ith add new deliverables</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        <label htmlFor="projtitle" className="form-inline-width">Deliverables</label>
        <select className="form-control width-full" id="projtitle">
          <option>Search functionlity (from employee list)</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        <label htmlFor="projtitle" className="form-inline-width">Deliverables</label>
        <button type="button" className="btn btn-primary form-inline-width" > Hours</button>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        {/* <label htmlFor="projtitle" className="form-inline-width">Deliverables</label> */}
        <button type="button" className="btn btn-primary form-inline-width" > Add Another Resource</button>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        <div className="form-inline-width">
          <div> amey  20hrs</div>
          <div> amey  20hrs</div>
        </div>
        <div className="form-inline-width err">
          Note use
        </div>
        {/* <label htmlFor="projtitle" className="form-inline-width">Deliverables</label>
        <button type="button" className="btn btn-primary form-inline-width" > Hours</button> */}
      </div>
    </div>
  </div>


  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        {/* <label htmlFor="projtitle" className="form-inline-width">Deliverables</label> */}
        <button type="button" className="btn btn-primary form-inline-width" > Add Another deliverable</button>
      </div>
    </div>
  </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form-group form-check-inline">
        <div className="form-inline-width">
          <div> QRA Study 300hrs</div>
          <div> QRA Study 300hrs</div>
        </div>
       
         {/* <label htmlFor="projtitle" className="form-inline-width">Deliverables</label>
        <button type="button" className="btn btn-primary form-inline-width" > Hours</button> */}
      </div>
    </div>
  </div>

  </Tab>
  
</Tabs>
</div> 
);
} 

export default About; 
