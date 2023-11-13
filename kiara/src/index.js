import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types'

class ComponentExample extends Component{
render(){
  return(
      <div>
        {/* {print a;; props}*/}
        <h1>{this.props.arrayProp}<br/>
            {this.props.stringProp}<br/>
            {this.props.numberProp}<br/>
            {this.props.boolProp}<br/>
        </h1>
      </div>

    );
  }
}
//componentClassName.propsTypes: import kieu(du lieu ) cua cac property
ComponentExample.propTypes ={
  arrayProp: PropTypes.array,
  stringProp: PropTypes.string,
  numberProp:PropTypes.number,
  boolProp:PropTypes.bool
}
ComponentExample.defaultProps ={
  arrayProp: ['Ngoc', 'Nam', 'Huy'],
  stringProp: "fpt-aptech",
  numberProp:20,
  boolProp:true,
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*<App />*/}
   <ComponentExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

