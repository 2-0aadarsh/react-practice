import React, { useState } from 'react' 
import { IoEyeOffSharp, IoEye } from "react-icons/io5"; 

const RegistrationForm = () => { 
  const [formData, setFormData] = useState({ fullname : '', email : '', phone : '', password : '', confirmPassword : '' })

  const [isPasswordVisible, setIsPasswordVisible] = useState({ 
    password: false, 
    confirmPassword: false 
  }); 

  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => { 
    setIsPasswordVisible((prev) => ({ ...prev, password: !prev.password })); 
  } 

  const toggleConfirmPasswordVisibility = () => { 
    setIsPasswordVisible((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword })); 
  } 

  const handleChange = (event) => {
    setError(null);
    let targetValue = event.target.value;
    let fieldName = event.target.name;

    console.log(fieldName, targetValue);

    setFormData((prev) => ({...prev, [fieldName] : targetValue}));
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- This prevents the page refresh!;
    
    // 1. Create a cleanly trimmed copy of the form data
    const cleanedData = {
      fullname: formData.fullname.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password,        // Don't trim passwords (spaces can be part of passwords!)
      confirmPassword: formData.confirmPassword
    };

    // Check if any fields are empty or not
    // 1. Get an array of all field values
    const values = Object.values(formData);

    // 2. Check if ANY field fails our strict criteria
    const hasEmptyFields = values.some(value => {
      // If it's a string, trim it and check if it's empty
      if (typeof value === 'string') {
        return value.trim() === '';
      }
      // For numbers or booleans, check if they are missing entirely
      return value === undefined || value === null;
    });

    // 3. Handle the error state cleanly
    if (hasEmptyFields) {
      setError("Error: All fields are required. Please fill out the form completely.")
      throw new Error("Error: All fields are required. Please fill out the form completely.");
      return; // Stop the function here so it doesn't save to localStorage
    }

    // 4. Validate matching passwords (Using trimmed values to check)
    if (formData.password.trim() !== formData.confirmPassword.trim()) { 
      setError("Error: Password and Confirm Password do not match."); 
      return; // Stops function execution cleanly
    }

    // now handling form submission

    // console.log(formData.formData.toString())   -> returned [object Object]
    console.log(JSON.stringify(formData))
    console.log(formData);
    // localStorage.setItem("formData", formData.toString())
     
    localStorage.setItem("formData", JSON.stringify(formData))

    // now clear the formData, will eventually clear the values in the input
    setFormData({ fullname : '', email : '', phone : '', password : '', confirmPassword : '' })
  }

  return ( 
    <form onSubmit={handleSubmit} className='w-full h-full bg-slate-900 text-white p-8 flex flex-col items-center justify-center gap-4 border'> 
      {/* Error state */}
      {error && <p className='text-red-700'> {error} </p>}
      
      <div className="w-1/2 min-h-1/2 border rounded p-6 flex flex-col gap-4"> 

        {/* Fullname Row */} 
        <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
          <label htmlFor="fullname" className="text-sm font-medium whitespace-nowrap"> 
            Fullname : 
          </label> 
          <input onChange={handleChange} value={formData.fullname} type="text" name="fullname" id="fullname" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
        </div> 

        {/* Second Row */} 
        <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
          <label htmlFor="email" className="text-sm font-medium whitespace-nowrap"> 
            Email : 
          </label> 
          <input onChange={handleChange} value={formData.email} type="email" name="email" id="email" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
        </div> 

        {/* Third Row */} 
        <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
          <label htmlFor="phone" className="text-sm font-medium whitespace-nowrap"> 
            Phone : 
          </label> 
          <input onChange={handleChange} value={formData.phone} type="tel" name="phone" id="phone" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
        </div> 

        {/* Fourth Row */} 
        <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
          
          <label htmlFor="password" className="text-sm font-medium whitespace-nowrap"> 
            Password : 
          </label> 

          <div className="relative w-full flex items-center"> 
            <input onChange={handleChange} value={formData.password}  type={isPasswordVisible.password ? "text" : "password"} name="password" id="password" className='w-full pl-2 pr-8 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
            
            <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer" > 
              {isPasswordVisible.password ? <IoEye size={16} /> : <IoEyeOffSharp size={16} />} 
            </button> 
          
          </div> 
        </div> 

        {/* Fifth Row */} 
        <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
          
          <label htmlFor="confirmPassword" className="text-sm font-medium whitespace-nowrap"> 
            Confirm Password : 
          </label> 
          
          <div className="relative w-full flex items-center"> 
            <input onChange={handleChange} value={formData.confirmPassword} type={isPasswordVisible.confirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className='w-full pl-2 pr-8 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
            
            <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer" > 
              {isPasswordVisible.confirmPassword ? <IoEye size={16} /> : <IoEyeOffSharp size={16} />} 
            </button>           
          </div> 

        </div> 

        
          {/* Sixth Row */}
          <button type='submit' className='w-full py-1 rounded cursor-pointer bg-green-700' >
            Submit
          </button> 

      </div> 
    </form> 
  ) 
} 

export default RegistrationForm