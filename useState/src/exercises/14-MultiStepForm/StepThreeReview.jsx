import React, { useState } from 'react'

const StepThreeReview = ({ formData, setFormData, setCurrentStep }) => {
  // Track edit state for each individual field key
  const [editingFields, setEditingFields] = useState({
    name: false,
    age: false,
    phone: false,
    city: false,
    state: false,
    country: false
  });

  const handleChange = (event) => {
    let targetValue = event.target.value;
    let targetFieldName = event.target.name;
    const section = event.target.dataset.section;

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [targetFieldName]: targetValue
      }
    }))
  }

  // Toggle edit mode on and off for a specific field
  const toggleEdit = (fieldName) => {
    setEditingFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Finalized Data:", formData);
    setCurrentStep((prev) => prev + 1);  // here could be success page on submission or re-directed to any other/Home page according to the business requirement
  }

  return (
    <form onSubmit={handleSubmit} className='w-full h-full bg-slate-900 text-white p-8 flex flex-col items-center justify-center gap-4 border'>
      <div className="w-1/2 min-h-1/2 border rounded p-6 flex flex-col gap-4">
        
        {/* Name Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> Name : </label>
          {editingFields.name ? (
            <input onChange={handleChange} value={formData.personalInformation.name || ''} type="text" name="name" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.personalInformation.name || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('name')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.name ? 'Save' : '✎'}
          </button>
        </div>

        {/* Age Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> Age : </label>
          {editingFields.age ? (
            <input onChange={handleChange} value={formData.personalInformation.age || ''} type="number" name="age" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.personalInformation.age || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('age')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.age ? 'Save' : '✎'}
          </button>
        </div>

        {/* Phone Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> Phone : </label>
          {editingFields.phone ? (
            <input onChange={handleChange} value={formData.personalInformation.phone || ''} type="tel" name="phone" data-section="personalInformation" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.personalInformation.phone || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('phone')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.phone ? 'Save' : '✎'}
          </button>
        </div>

        {/* City Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> City : </label>
          {editingFields.city ? (
            <input onChange={handleChange} value={formData.address.city || ''} type="text" name="city" data-section="address" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.address.city || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('city')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.city ? 'Save' : '✎'}
          </button>
        </div>

        {/* State Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> State : </label>
          {editingFields.state ? (
            <input onChange={handleChange} value={formData.address.state || ''} type="text" name="state" data-section="address" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.address.state || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('state')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.state ? 'Save' : '✎'}
          </button>
        </div>

        {/* Country Row */}
        <div className="grid grid-cols-[140px_1fr_50px] items-center gap-4 min-h-[40px]">
          <label className="text-sm font-medium whitespace-nowrap"> Country : </label>
          {editingFields.country ? (
            <input onChange={handleChange} value={formData.address.country || ''} type="text" name="country" data-section="address" className='w-full px-2 py-1.5 bg-transparent outline-none text-sm border rounded focus:border-sky-500' />
          ) : (
            <span className="text-sm text-slate-300">{formData.address.country || '—'}</span>
          )}
          <button type="button" onClick={() => toggleEdit('country')} className="text-xs text-sky-400 hover:text-sky-300 underline cursor-pointer">
            {editingFields.country ? 'Save' : '✎'}
          </button>
        </div>

        {/* Submit Actions */}
        <button type='submit' className='w-full py-1.5 mt-4 rounded cursor-pointer bg-green-700 font-medium hover:bg-green-600 transition-colors text-sm'>
          Submit Application
        </button>
      </div>
    </form>
  )
}

export default StepThreeReview