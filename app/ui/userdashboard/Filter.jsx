'use client';

import { useState } from 'react';
import { districtlist } from '../varibles';
import { maritalStatuslist } from '../varibles';
import { educationlist } from '../varibles';
import { dhosamlist } from '../varibles';
import { useRouter } from 'next/navigation';


const Filter = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const [selectedDhosam, setSelectedDhosam] = useState('');
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [users, setUsers] = useState([]);
  const router = useRouter()

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
  const handleGender = (event) => {
    setSelectedGender(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const Data = {
      district: selectedDistrict,
      gender: selectedGender,
      education: selectedEducation,
      dhosam: selectedDhosam,
      maritalstatus: selectedMaritalStatus,
    };

    try {
      const response = await fetch('/api/dashboard/userfilter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      });

      const data = await response.json();
      setUsers(data.users);
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
            Gender:
            <select onChange={handleGender} value={selectedGender} className='my-auto'>
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
      
      {users && users.length > 0 && (
        <div className="p-5 flex flex-wrap justify-center gap-8">
          {users.map((user, index) => {
            const userPhotoBase64 = user.userphoto;

            return (
              <div key={index} className="my-3 w-full sm:w-[300px] flex-none">
                {userPhotoBase64 ? (
                  <img src={`data:image/png;base64,${userPhotoBase64}`} alt={`${user.name}'s photo`} className="h-[450px] w-full rounded-t" />
                ) : (
                  <p>No valid photo available</p>
                )}
                <div className="h-[220px] bg-yellow-100 rounded-b p-5 flex flex-col">
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Name:</p>
                    <h2 className="font-medium my-auto">{user.name}</h2>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">UserID:</p>
                    <h2 className="font-medium my-auto">{user.userID}</h2>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Education:</p>
                    <p className="font-medium my-auto">{user.education}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Occupation:</p>
                    <p className="font-medium my-auto">{user.occupation}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">District:</p>
                    <p className="font-medium my-auto">{user.district}</p>
                  </div>
                  <button className="w-full my-2 py-2 bg-lime-500 font-bold rounded-xl" onClick={() => router.push(`/profile/${user.userID}`)}>View profile</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Filter;
