 import React from 'react';
 import PropTypes from 'prop-types';
 
 const Navbar = (props) => {
   return (
     <>
      <nav className={`navbar navbar-expand-lg navbar-${props.commonProps.mode} bg-${props.commonProps.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.commonProps.title}</a>
          {/**<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul> 
          </div> */}
          <div className={`form-check form-switch text-${props.commonProps.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.commonProps.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.commonProps.btnText}</label>
          </div>
        </div>
      </nav>
     </>
   )
 }
/** propTypes is used to check as what datatype we need for a particular argument that we are sending
 * the child component from the parent component. In the above example, title is suppose to be a string 
 * datatype, so if we try to pass an object or a number as string we will get an error
*/
Navbar.propTypes = {title:PropTypes.string.isRequired, age:PropTypes.number};

/**defaultProps are nothing but the default value we set for all the arguments that are needed in the 
 * child and are not passed from the parent.
 */
Navbar.defaultProps = {title:'set title please'}

 export default Navbar