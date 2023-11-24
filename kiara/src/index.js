// import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
// //import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import PropTypes from 'prop-types'
import { StrictMode } from "react";
import {createRoot }  from "react-dom/client"
import App from "./App";

// class ComponentExample extends Component{
// render(){
//   return(
//       <div>
//         {/* {print a;; props}*/}
//         <h1>{this.props.arrayProp}<br/>
//             {this.props.stringProp}<br/>
//             {this.props.numberProp}<br/>
//             {this.props.boolProp}<br/>
//         </h1>
//       </div>

//     );
//   }
// }
// //componentClassName.propsTypes: import kieu(du lieu ) cua cac property
// ComponentExample.propTypes ={
//   arrayProp: PropTypes.array,
//   stringProp: PropTypes.string,
//   numberProp:PropTypes.number,
//   boolProp:PropTypes.bool
// }
// ComponentExample.defaultProps ={
//   arrayProp: ['Ngoc', 'Nam', 'Huy'],
//   stringProp: "fpt-aptech",
//   numberProp:20,
//   boolProp:true,
// }


// class Test extends React.Component{
//   // Ham khoi tao object => step1 Initialization
//    constructor(props){
//      //super : goi cac phuong thuc khoi tao(contructor) cua  lop(class) cha. dung
//     // Ham khoi tao lop cha
//     super(props);
//      //this:goi doi tuong(object) hien tai cua class.
//      this.state ={hello : "world"};
//    }
//    // mouting step2//
//    componentDidMount(){
//      console.log("componentDidMount()");
//    }
//   //step3
//     changeState(){
//      this.setState({hello: "Fpt-Aptech"});
//     }
//     render(){
//       return(
//         <div>
//           <h1>Hello{this.state.hello}</h1>
//           <h2>
//            <a onClick={this.changeState.bind(this)}>Click here!</a>
//           </h2>
//         </div>
 
//       );
//    }
//     //step4
//     shouldComponentUpdate(nextProp, nextState){
//       console.log("shouldComponentUpdate");
//       return true;
//     //step5
//    }
//     componentDidUpdate(){
//      console.log("componentDidUpdate");
//       }
 
//   }
 
 
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//    <React.StrictMode>
//       <App />  
//      {/*  <Test/> */}
     
//    </React.StrictMode>
//   );
 
// //  // If you want to start measuring performance in your app, pass a function
// //  // to log results (for example: reportWebVitals(console.log))
// //  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);





