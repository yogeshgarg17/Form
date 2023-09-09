import './App.css';
import React from 'react';

function form() {
      return (
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                {/* <h2 id="heading">Sign Up Your User Account</h2>
                <p>Fill all form field to go to next step</p> */}
                <form id="msform">
                  {/* progressbar */}
                  <ul id="progressbar">
                    <li className="active" id="account"><strong>Personal</strong></li>
                    <li id="personal"><strong>Guardian</strong></li>
                    <li id="payment"><strong>Address</strong></li>
                    <li id="confirm"><strong>Documents</strong></li>
                    <li id="payment1"><strong>Payment</strong></li>
                  </ul>
                  
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100} />
                  </div> <br /> {/* fieldsets */}
                  <div className='main'>
                  {/* <fieldset>
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="fs-title">Personal Information</h2>
                        </div>
                      </div>  
                      <input type="text" name="name" placeholder="First Name" /> 
                      <input type="text" name="midname" placeholder="Middle Name" /> 
                      <input type="text" name="lstname" placeholder="Last Name" />
                      <input type="email" name="email" placeholder="Email Id"/>
                      <input type="tel" name="mobile" placeholder="Mobile Number"/>
                      <div className='radio'>
                        <label>Gender</label>
                        <input type="radio" name="gender"/>Male
                        <input type="radio" name="gender"/>Female
                        <input type="radio" name="gender"/>Other
                      </div>
                    </div> 
                  
                    <input type="button" name="next" className="next action-button" defaultValue="Next" />
                     
                  </fieldset> */}
                  <fieldset>
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="fs-title">Guardian Information</h2>
                        </div>
                      </div>
                       <input type="text" name="ftname" placeholder="Father's Name" />
                        <input type="text" name="mtname" placeholder="Mother's Name" /> 
                       <input type="text" name="grd" placeholder="Guardian" />
                        <input type="text" name="grd1" placeholder="Second Guardian" />
                        <input type="text" name="fn" placeholder="Father's Phone Number" />
                        <input type="text" name="mn" placeholder="Mother's Phone Number" />
                        <input type="text" name="gn" placeholder="Gaurdian's Phone Number" />
                    </div>
                     <input type="button" name="next" className="next action-button" defaultValue="Next" /> 
                     <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                  </fieldset>
                  <fieldset>
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="fs-title">Image Upload:</h2>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 3 - 4</h2>
                        </div>
                      </div><input type="file" name="pic" accept="image/*" /><input type="file" name="pic" accept="image/*" />
                    </div> <input type="button" name="next" className="next action-button" defaultValue="Submit" /> <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                  </fieldset>
                  <fieldset>
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h2 className="fs-title">Finish:</h2>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 4 - 4</h2>
                        </div>
                      </div> <br /><br />
                      <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                      <div className="row justify-content-center">
                        <div className="col-3"></div>
                      </div> <br /><br />
                      <div className="row justify-content-center">
                        <div className="col-7 text-center">
                          <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };
  

export default form;
