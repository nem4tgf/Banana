// import logo from './logo.svg';
import './App.css';
// import Product from './product';
// import React, {useState} from 'react';
import './style.css'
import { useState } from 'react';
import Input from './input'
import Button from './Button'
import ValidateEmail from './utils';





// import './style.css'
// import App from './App'

// function App() {
//   return (
//   <div>
//    <h1>Product</h1>
//        <div className="App">
//         <Product
//           img="https://scontent.xx.fbcdn.net/v/t39.30808-6/396719544_902016151657610_2035066709036702823_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEeFTlfz2aBRJRjve4s9nmhD8cSknIyVgkPxxKScjJWCXfULIhyMIRnRMIaCLLeziWn5NM7kwqXlX471z_MwOm8&_nc_ohc=TTzFa7hxtZMAX_QA80T&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDSNMHrMH2pMjioPKGyFRl73tkb_mM4jPlgm4PylOsNRw&oe=6553E607&_nc_fr=fhan3c03"
//           name="New Figure"
//           desc="The new product of bi ya"
//           price="$200"/>
          
        
        
//         <Product 
//         img="https://product.hstatic.net/1000231532/product/shop_gunpla_ban_gundam_aerial_rebuild_hg_gia_re_182470e75dbc468dbb3e7652233ec83d_master.jpg"
//           name="New Gunpla"
//           desc="The new product of Bandai"
//           price="$200"/>
          
          

//           <Product
//           img="https://www.torontogundam.ca/cdn/shop/products/Metalbuild-DragonScaleGurenType-08ElementsSeitenCodeGeassLelouchoftheRebellionR2-09_1210x1800_0d4a2f17-1416-454a-b052-491ef88fc5c8_1024x1024.webp?v=1681959531"
//           name="New GunplaCG"
//           desc="The new product of Bandai"
//           price="$200"/>
          
          
//       </div>
//   </div>
//   );
// }

// export default App;



// export default function App(){
// const[values, setValues]= useState({
//   firstName: "",
//   lastName:"",
//   email:"",
// });
// // function handleSubmit(){
// // console.log("In submitted form")
// const[submitted, setSubmitted] = useState(false);
// const[valid, setValid] = useState(false);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if(values.firstName && values.lastName && values.email){
//     setValid(true);
//   }
//   setSubmitted(true);
// }
//   const handleInputChange = (event) =>{
//     event.preventDefault();
//     const {name, value}=event.target;
//     setValues((values)=>({...values,[name]:value}))
//   }


// return(
//   <div>
//     <form className='register-form' onSubmit={handleSubmit}>
// {submitted && valid &&(
//   <div className="success-message">
//     <h2>{""}
//     Welcome, {values.firstName} {values.lastName} {" "}
//     </h2>
//     <div>Your registration was successfull!</div>
//   </div>
// )}

//       {!valid && (<input 
//       type="text"
//       placeholder="First Name"
//       name="firstName"
//       value={values.firstName}
//       onChange={handleInputChange}/>)}
//       {submitted && !values.firstName&&(<span>Please enter first name</span>)}

//       {!valid && (<input 
//       type="text"
//       placeholder="Last Name"
//       name="lastName"
//       value={values.lastName}
//       onChange={handleInputChange}/>)}
//       {submitted && !values.lastName&&(<span>Please enter last name</span>)}
      


//       {!valid && (<input 
//       type="email"
//       placeholder="Email"
//       name="email"
//       value={values.email}
//       onChange={handleInputChange}/>)}
//       {submitted && !values.email&&(<span>Please enter email</span>)}
//       <button type="submit">Regsiter</button>
//     </form>
//   </div>
// );

// }




export default function App(){
  const [email,setEmail] = useState(
    {
    value:"",
    isTouched:false,
    isValid:false
  });
  const[pwd,setPwd] = useState({
    value:"",
    isTouched:false,
    isValid:false
  });
  const[confirmpwd,setConfirmPwd] = useState ({
    value:"",
    isTouched:false,
    isValid:false
  });
  function handleEmailInput(e){
    setEmail({
      isTouched:true,
      value:e.target.value,
      isValid:ValidateEmail(e.target.value)
    });
  }
    function handlePwdInput(e){
      setPwd({
        isTouched:true,
        value:e.target.value,
        isValid:e.target.value.length >= 6 ? true : false
      });
    }
      function handleConfirmPwdInput(e){
        setConfirmPwd({
          isTouched:true,
          value:e.target.value,
          isValid:e.target.value === pwd.value ? true : false 
        });
  }
  function handleSubmit(e){
    e.preventDefault();
    window.alert(
      `Submitted: \n Email: ${email.value} \n Password: ${pwd.value}`
    );
  }

const formIsValid = email.isValid && pwd.isValid && confirmpwd.isValid;

  return(
    <div className="App">
      <div className="form-container">
      <Input 
      name="email"
      type ="text"
      lang="Email"
      onChange={handleEmailInput}
      isValid={email.isValid}
      isTouched={email.isTouched}
      placeholder="Email..."
      value={email.value}
      errorMsg = "Enter a valid email"
      />
    
    <Input 
      name="password"
      type ="password"
      lang="password"
      onChange={handlePwdInput}
      isValid={pwd.isValid}
      isTouched={pwd.isTouched}
      placeholder="Password..."
      value={pwd.value}
      errorMsg = "Minimun 6 characters"
      />
      
      <Input 
      name="confirmpwd"
      type ="password"
      lang="Confirm password"
      onChange={handleConfirmPwdInput}
      isValid={confirmpwd.isValid}
      isTouched={confirmpwd.isTouched}
      placeholder="Confirm Password..."
      value={confirmpwd.value}
      errorMsg = "Password do not match!"
      />
      <Button 
      text="REGISTER"
      onClick={handleSubmit}
      disabled={!formIsValid}/>
    </div>
  </div>

  );
}