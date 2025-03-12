'use client';

import { useState } from 'react';
import { districtlist } from '../varibles';
import { maritalStatuslist } from '../varibles';
import { educationlist } from '../varibles';
import { dhosamlist } from '../varibles';


const Navigation = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedDhosam, setSelectedDhosam] = useState('');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('')

  const handleDistrict = (event) => {
    setSelectedDistrict(event.target.value);
  }
  const handleEducation = (event) => {
    setSelectedEducation(event.target.value)
  };
  const handleDhosam = (event) => {
    setSelectedDhosam(event.target.value);
  }
  const handleMaritalStatus = (event) => {
    setSelectedMaritalStatus(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Data = {
      district: selectedDistrict,
      education: selectedEducation,
      dhosam: selectedDhosam,
    };

    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      });

      const users = await response.json();
      console.log('Matching profiles:', users);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  return (
    <section className='overflow-x-hidden'>
      <form onSubmit={handleSubmit} className='lg:flex m-5 justify-between 2xl:mx-20'>
        <div className='my-2'>
          <label>
            District:
            <select onChange={handleDistrict} value={selectedDistrict} className='my-auto'>
              <option>Select District</option>
              {districtlist.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='my-2'>
          <label>
            Education:
            <select onChange={handleEducation} value={selectedEducation} className='my-auto'>
              <option value="">Select Education</option>
              {educationlist.map((education, index) => (
                <option key={index} value={education}>{education}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='my-2'>  
          <label>
            Dhosam:
            <select onChange={handleDhosam} value={selectedDhosam} className='my-auto'>
              <option value="">Select Dhosam</option>
              {dhosamlist.map((dhosam, index) => (
                <option key={index} value={dhosam}>{dhosam}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='my-2'>  
          <label>
            Marital status:
            <select onChange={handleMaritalStatus} value={selectedMaritalStatus} className='my-auto'>
              <option value="">Select Marital status</option>
              {maritalStatuslist.map((maritalstatus, index) => (
                <option key={index} value={maritalstatus}>{maritalstatus}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" className='my-auto bg-lime-300 py-2 px-5 font-bold'>Search Profiles</button>
      </form>
    </section>
  );
};

export default Navigation;
