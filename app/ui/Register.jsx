'use client';
import { useState } from "react"
import { districtlist } from "./varibles";

const Register = () => {
  const [error, setError] = useState('')
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dob, setDob] = useState('')
  const [tob, setTob] = useState('')
  const [cast, setCast] = useState('')
  const [kulam, setKulam] = useState('')
  const [gothram, setGothram] = useState('')
  const [district, setDistrict] = useState('')
  const [education, setEducation] = useState('')
  const [occupation, setOccupation] = useState('')
  const [salary, setSalary] = useState('')
  const [maritalstatus, setMaritalStatus] = useState('')
  const [partnerPreference, setPartnerPreference] = useState('')
  const [mobileno, setMobileno] = useState('')
  const [userPhoto, setUserPhoto] = useState('')
  const [idproof, setIDProof] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [fatherOccupation, setFatherOccupation] = useState('')
  const [motherName, setMotherName] = useState('')
  const [motherOccupation, setMotherOccupation] = useState('')
  const [asset, setAsset] = useState('')
  const [address, setAddress] = useState('')
  const [nativePlace, setNativePlace] = useState('')
  const [parentNumber, setParentNumber] = useState('')
  const [broSis, setBroSis] =useState('')
  const [elderYounger, setElderYounger] = useState('');
  const [rasi, setRasi] =useState('')
  const [nakshartram, setNakshartram] =useState('')
  const [paadham, setPaadham] =useState('')
  const [dhosam, setDhosam] =useState('')

  function handlegender(e) {
    setGender(e.target.value);
  }
  function handleMaritalStatus(e) {
    setMaritalStatus(e.target.value);
  }
  function handleElderYounger(e) {
    setElderYounger(e.target.value)
  }
  function handleDhosam(e) {
    setDhosam(e.target.value)
  }
  function handleEducation(e) {
    setEducation(e.target.value)
  }
  function handleDistrict(e) {
    setDistrict(e.target.value)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError('')

    if (!name || !email || !password || !confirmPassword || !dob || !tob || !gender || !cast || !kulam || !gothram || !district || !education || !occupation || !salary || !maritalstatus || !partnerPreference || !mobileno || !userPhoto || !idproof || !fatherName || !fatherOccupation || !motherName || !motherOccupation || !asset || !address || !nativePlace || !parentNumber || !broSis || !elderYounger || !rasi || !nakshartram || !paadham || !dhosam) {
      setError("Please fill all the fields");
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gender', gender);
    formData.append('dob', dob);
    formData.append('tob', tob);
    formData.append('cast', cast);
    formData.append('kulam', kulam);
    formData.append('gothram', gothram);
    formData.append('district', district);
    formData.append('education', education);
    formData.append('occupation', occupation);
    formData.append('salary', salary);
    formData.append('maritalstatus', maritalstatus);
    formData.append('partnerPreference', partnerPreference);
    formData.append('mobileno', mobileno);
    formData.append('userPhoto', userPhoto);
    formData.append('idproof', idproof);
    formData.append('fatherName', fatherName);
    formData.append('fatherOccupation', fatherOccupation);
    formData.append('motherName', motherName);
    formData.append('motherOccupation', motherOccupation);
    formData.append('asset', asset);
    formData.append('address', address);
    formData.append('nativePlace', nativePlace);
    formData.append('parentNumber', parentNumber);
    formData.append('broSis', broSis);
    formData.append('elderYounger', elderYounger);
    formData.append('rasi', rasi);
    formData.append('nakshartram', nakshartram);
    formData.append('paadham', paadham);
    formData.append('dhosam', dhosam);

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      })
      const {user} = await resUserExists.json();
      if(user){
        setError("Email already Exists")
        return;
      }

      const response = await fetch('/api/register', {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  return (
    <section>
      <h1 className='flex justify-center my-5 font-bold text-xl sm:mt-10 md:text-2xl xl:text-3xl'>Registeration Form</h1>
      <form className="flex flex-col mx-10 sm:mx-28 md:mx-[30%] mb-10" method="post" encType="multipart/form-data">
        <label className="text-lg">Name:</label>
        <input type="text" placeholder="Enter Your Name" autoFocus onChange={(e) => {setName(e.target.value)}} />
        <label className="text-lg">Email:</label>
        <input type="email" placeholder="Your Email" onChange={(e) => {setEmail(e.target.value)}} />
        <label className="text-lg">Password:</label>
        <input type="password" placeholder="Enter Your Password" onChange={(e) => {setPassword(e.target.value)}} />
        <label className="text-lg">Confirm Password:</label>
        <input type="password" placeholder="Confirm Your Password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>
        <div className="flex">
          <label className="text-lg">
          Gender:
          <input type="radio" value="Male" required checked={gender === 'Male'} onChange={handlegender} /> Male
          </label>
          <label className="text-lg">
          <input type="radio" value="Female" required checked={gender === 'Female'} onChange={handlegender} /> Female
          </label>
        </div>
        <label className="text-lg">Date of Birth:</label>
        <input type="date" onChange={(e) => {setDob(e.target.value)}} />
        <label className="text-lg">Time of Birth:</label>
        <input type="time" onChange={(e) => {setTob(e.target.value)}} />
        <label className="text-lg">Cast:</label>
        <input type="text" placeholder="Enter your Cast" onChange={(e) => {setCast(e.target.value)}} />
        <label className="text-lg">Kulam:</label>
        <input type="text" placeholder="Enter your Kulam" onChange={(e) => {setKulam(e.target.value)}}/>
        <label className="text-lg">Gothram:</label>
        <input type="text" placeholder="Enter your Gothram" onChange={(e) => {setGothram(e.target.value)}}/>
        <label className="text-lg">District:</label>
        <select onChange={handleDistrict} value={district}>
          <option defaultChecked >Select District</option>
          {districtlist.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
        <label className="text-lg">Education:</label>
        <select onChange={handleEducation} value={education}>
          <option>Select Education Level</option>
          <option value='10th'>10th</option>
          <option value='Diploma'>Diploma</option>
          <option value='11th'>11th</option>
          <option value='12th'>12th</option>
          <option value='UG'>UG</option>
          <option value='PG'>PG</option>
          <option value='MBA'>MBA</option>
        </select>
        <label className="text-lg">Occupation:</label>
        <input type="text" placeholder="Enter your Occupation" onChange={(e) => {setOccupation(e.target.value)}}/>
        <label className="text-lg">Salary (per month):</label>
        <input type="number" placeholder="Enter your Salary" onChange={(e) => {setSalary(e.target.value)}} />
        <label className="text-lg">Marital Status:</label>
        <select onChange={handleMaritalStatus} value={maritalstatus}>
          <option>Select Status</option>
          <option value='Unmarried'>Unmarried</option>
          <option value='2ndMarrage'>2ndMarrage</option>
        </select>
        <label className="text-lg">Partner Preference:</label>
        <input type="text" placeholder="Enter your Partner Preference" onChange={(e) => {setPartnerPreference(e.target.value)}}/>
        <label className="text-lg">Mobile Number:</label>
        <input type="number" placeholder="Enter your Mobile number" onChange={(e) => {setMobileno(e.target.value)}}/>
        <label className="text-lg">Photo:</label>
        <input type="file" onChange={(e) => setUserPhoto(e.target.files[0])} />
        <label className="text-lg">Any ID Proof:</label>
        <input type="file" onChange={(e) => setIDProof(e.target.files[0])} />
        <p className='text-slate-500 mb-5 md:ml-5'>This Id proof is for security reasons only</p>



        <h1 className='flex justify-center my-5 font-medium text-lg sm:mt-10 md:text-xl xl:text-2xl'>Family Information</h1>
        <label className="text-lg">Father Name:</label>
        <input type="text" placeholder="Enter your Fathers name" onChange={(e) => {setFatherName(e.target.value)}}/>
        <label className="text-lg">Father Occupation:</label>
        <input type="text" placeholder="Enter your Father Occupation" onChange={(e) => {setFatherOccupation(e.target.value)}}/>
        <label className="text-lg">Mother Name:</label>
        <input type="text" placeholder="Enter your Mother name" onChange={(e) => {setMotherName(e.target.value)}}/>
        <label className="text-lg">Mother Occupation:</label>
        <input type="text" placeholder="Enter your Mother Occupation" onChange={(e) => {setMotherOccupation(e.target.value)}}/>
        <label className="text-lg">Asset:</label>
        <input type="text" placeholder="Enter your Asset" onChange={(e) => {setAsset(e.target.value)}}/>
        <label className="text-lg">Address:</label>
        <input type="text" placeholder="Enter you Address" onChange={(e) => {setAddress(e.target.value)}}/>
        <label className="text-lg">Native Place:</label>
        <input type="text" placeholder="Enter you Native Place" onChange={(e) => {setNativePlace(e.target.value)}}/>
        <label className="text-lg">Parents Number:</label>
        <input type="number" placeholder="Enter Mobile number" onChange={(e) => {setParentNumber(e.target.value)}}/>
        <label className="text-lg">Number of Brother or Sister:</label>
        <input type="number" placeholder="no.of Brother/Sister" onChange={(e) => {setBroSis(e.target.value)}}/>
        <label className="text-lg">Elder/Younger:</label>
        <select onChange={handleElderYounger} value={elderYounger}>
          <option>Select</option>
          <option value='Elder'>Elder</option>
          <option value='Younger'>Younger</option>
          <option value='Both'>Both</option>
        </select>
        
        



        <h1 className='flex justify-center my-5 font-medium text-lg sm:mt-10 md:text-xl xl:text-2xl'>Horoscope Information</h1>
        <label className="text-lg">Rasi:</label>
        <input type="text" placeholder="Rasi" onChange={(e) => {setRasi(e.target.value)}}/>
        <label className="text-lg">Nakshartram:</label>
        <input type="text" placeholder="Nakshartram" onChange={(e) => {setNakshartram(e.target.value)}}/>
        <label className="text-lg">Paadham:</label>
        <input type="number" placeholder="Padham" onChange={(e) => {setPaadham(e.target.value)}}/>
        <label className="text-lg">Dhosam:</label>
        <select onChange={handleDhosam} value={dhosam}>
          <option>Select Status</option>
          <option value='Rahu Ketu'>Rahu Ketu</option>
          <option value='Chevvai'>Chevvai</option>
          <option value='Nil'>Nil</option>
        </select>

        <button className="bg-zinc-400 md:ml-5 rounded-2xl py-2 font-bold text-black" onClick={handleSubmit} >Submit</button>
        {error && (
          <div className="text-red-500 font-bold md:ml-5 mt-5">{error}</div>
        )}
      </form>
    </section>
  )
}

export default Register