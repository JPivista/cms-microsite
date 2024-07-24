"use client"
import React, { useState } from 'react';

const ShipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    location: '',
    mobile: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.organisation) newErrors.organisation = 'Organisation Name is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile must be a 10-digit number';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email format is invalid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      try {
        const response = await fetch('https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10381/feedback', { // Replace with your endpoint
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setSuccessMessage('Thank you for your submission!');
        setFormData({
          name: '',
          organisation: '',
          location: '',
          mobile: '',
          email: '',
        });
        setErrors({});
      } catch (error) {
        console.error('Error submitting form', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <style>
        {`
          .bg-purple {
            background-color: #7F3F98;
          }
          .text-purple {
            color: #7F3F98;
          }
        `}
      </style>
      <div className="flex flex-col items-center h-auto container mx-auto">
        <h2 className="text-3xl font-bold text-purple mt-6 lg:px-0 px-5">
          Fill the form below to get started!
        </h2>
        <form className="lg:w-[750px] p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className={`w-full px-4 py-2 border rounded-sm ${errors.name ? 'border-red-500' : 'border-gray-300'} bg-gray-100`}
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              id="organisation"
              placeholder="Organisation Name"
              className={`w-full px-4 py-2 border rounded-sm ${errors.organisation ? 'border-red-500' : 'border-gray-300'} bg-gray-100`}
              value={formData.organisation}
              onChange={handleChange}
              required
              minLength={2}
            />
            {errors.organisation && <p className="text-red-500 text-sm">{errors.organisation}</p>}
            <input
              type="text"
              id="location"
              placeholder="Location"
              className={`w-full px-4 py-2 border rounded-sm ${errors.location ? 'border-red-500' : 'border-gray-300'} bg-gray-100`}
              value={formData.location}
              onChange={handleChange}
              required
              minLength={2}
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              id="mobile"
              placeholder="Mobile"
              className={`w-full px-4 py-2 border rounded-sm ${errors.mobile ? 'border-red-500' : 'border-gray-300'} bg-gray-100`}
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-sm ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-gray-100`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <button
            type="submit"
            className={`w-full sm:w-52 p-2 ${loading ? 'bg-gray-600' : 'bg-purple'} text-white font-semibold rounded-sm`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {successMessage && (
          <div className="my-4 text-center">
            <p className="text-purple text-xl" role="alert">{successMessage}</p>
          </div>
        )}
        <div className="my-6 text-center">
          <p className='text-2xl'>
            Contact us at{' '}
            <a href="mailto:saartihealth@catalysts.org" className="text-purple underline">
              saartihealth@catalysts.org
            </a>{' '}
            or call us on{' '}
            <a href="tel:+919902567926" className="text-purple underline">
              +91 9902 567 926
            </a>{' '}
            to know more.
          </p>
        </div>
       
      </div>
    </>
  );
};

export default ShipForm;
