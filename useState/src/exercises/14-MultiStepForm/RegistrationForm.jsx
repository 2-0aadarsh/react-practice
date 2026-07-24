import React, { useState } from 'react'
import StepOnePersonalInformation from './StepOnePersonalInformation';
import StepTwoAddress from './StepTwoAddress';
import StepThreeReview from './StepThreeReview';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    personalInformation : { name : '', age : '', phone : '' },
    address : { city: '', state : '', country : '' } 
  })

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id : 1, component : StepOnePersonalInformation },
    { id : 2, component : StepTwoAddress },
    { id : 3, component : StepThreeReview },
  ]

  const ActiveStepComponent = steps[currentStep-1].component;
  console.log(ActiveStepComponent);

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
      
      <ActiveStepComponent  
        formData={formData}
        setFormData={setFormData}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}

export default RegistrationForm