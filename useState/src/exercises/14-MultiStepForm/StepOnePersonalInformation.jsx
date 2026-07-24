import React from 'react'

const StepOnePersonalInformation = ({formData, setFormData, setCurrentStep}) => {
  console.log("StepOnePersonalInformation rendering..");
  console.log("formData",formData);
  console.log("setFormData", setFormData);

  const handleChange = (event) => {
    let targetValue = event.target.value;
    let targetFieldName = event.target.name;
    const section = event.target.dataset.section;

    setFormData((prev) => (
      {...prev, // 1. Copy top-level properties (like address)
        [section]: {
          ...prev[section], // 2. Copy existing personal fields (so we don't erase name while typing age)
          [targetFieldName] : targetValue // 3. Update the specific field changing
        }
      }
    ))
  }

  const handleSubmit = (event) => {
    // no validation for now;
    event.preventDefault();
    console.log(formData)
    setCurrentStep((prev) => prev+1);
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-full bg-slate-900 text-white p-8 flex flex-col items-center justify-center gap-4 border'> 
          
      <div className="w-1/2 min-h-1/2 border rounded p-6 flex flex-col gap-4"> 
    
            {/* Name Row */} 
            <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
              <label htmlFor="fullname" className="text-sm font-medium whitespace-nowrap"> 
                Name : 
              </label> 
              
              <input onChange={handleChange} value={formData.personalInformation.name} type="text" name="name" id="name" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />

            </div> 
    
            {/* Age Row */} 
            <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
              <label htmlFor="age" className="text-sm font-medium whitespace-nowrap"> 
                Age : 
              </label> 
              <input onChange={handleChange} value={formData.personalInformation.age} type="number" name="age" id="age" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
            </div> 
    
            {/* Phone Row */} 
            <div className="grid grid-cols-[140px_1fr] items-center gap-4"> 
              <label htmlFor="phone" className="text-sm font-medium whitespace-nowrap"> 
                Phone : 
              </label> 
              <input onChange={handleChange} value={formData.personalInformation.phone} type="tel" name="phone" id="phone" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' /> 
            </div> 
    
            {/* Next button Row */}
            <button type='submit' className='w-full py-1 rounded cursor-pointer bg-green-700' >
              Next
            </button> 
      </div> 
    </form> 
  )
}

export default StepOnePersonalInformation