import React, { useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CoinContext from '../Utilities/CoinContext';

function CreateProfile() {

  const [coinBalance, setCoinBalance] = useContext(CoinContext);
  const navigate = useNavigate();
 
  

  const [inputs, setInputs] = useState({
    name: "",
    mobile: "",
    profilePic: "", 
    linkedinLink: "",
    githubLink: "",
    resume: "",
    type: "",
    schoolName: "",
    startDate: "",
    endDate: "",
    projectName: "",
    projectDescription: "",
    soloProject: "",
    projectLink: "",
    pastExperiences: [{ companyName: "", companyWebsite: "", role: "", experienceStartDate: "", experienceEndDate: "", coverLetter: "" }]
  });

  const [coinValues, setCoinValues] = useState({
    name: 1,
    mobile: 15,
    profilePic: 5,
    linkedinLink: 3,
    githubLink: 5,
    resume: 20,
    type: 5,
    schoolName: 5,
    startDate: 2,
    endDate: 2,
    projectName: 5,
    projectDescription: 6,
    soloProject: 4,
    projectLink: 10,
    pastExperience: {
      companyName: 10,
      companyWebsite: 10,
      role: 8,
      experienceStartDate: 2,
      experienceEndDate: 2,
      coverLetter: 20
    }
  });

  const [totalCoins, setTotalCoins] = useState(0);

  // Function to update input values
  const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  let points = 0;

  if (inputs.hasOwnProperty(name)) {
    points = parseInt(e.target.getAttribute('data-coins'));
  } else if (name === "coverLetter") {
    points = coinValues.pastExperience[name];
  } else if (name === "profilePic") {
    
    points = coinValues[name];
  } else {
    points = coinValues.pastExperience[name]; 
  }

  if (value === "") {
    if (inputs[name] !== "" || (inputs.pastExperiences[index]?.[name] !== "")) {
      setTotalCoins(totalCoins - points);
      setCoinBalance(totalCoins - points);
    }
  } else {
    if (inputs[name] === "" || (inputs.pastExperiences[index]?.[name] === "")) {
      setTotalCoins(totalCoins + points);
      setCoinBalance(totalCoins + points);
    }
  }

  setInputs((prevState) => {
    if (index !== undefined) {
      const newPastExperiences = [...prevState.pastExperiences];
      newPastExperiences[index][name] = value;
      return { ...prevState, pastExperiences: newPastExperiences };
    }
    return { ...prevState, [name]: value };
  });
};



  // Function to handle profile picture upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputs((prevState) => ({ ...prevState, profilePic: file.name }));
    }
  };

  
  const addPastExperience = () => {
    setInputs((prevState) => {
      return {
        ...prevState,
        pastExperiences: [...prevState.pastExperiences, { companyName: "", companyWebsite: "", role: "", experienceStartDate: "", experienceEndDate: "", coverLetter: "" }]
      };
    });
  };

 
const deletePastExperience = (index) => {
    let deductedPoints = 0;
    for (const key in inputs.pastExperiences[index]) {
      if (inputs.pastExperiences[index][key] !== "") {
        deductedPoints += coinValues.pastExperience[key];
      }
    }
    setTotalCoins(totalCoins - deductedPoints);
    setCoinBalance(totalCoins - deductedPoints);
  
    
    setInputs((prevState) => {
      const newPastExperiences = [...prevState.pastExperiences];
      newPastExperiences.splice(index, 1);
      return { ...prevState, pastExperiences: newPastExperiences };
    });
  };
  

// Function to handle submission
const handleSubmit = async (e) => {
  e.preventDefault();
  
  let points = 0;

  for (const key in inputs) {
    if (inputs[key] !== "" && key !== "pastExperiences") {
      if (key in coinValues) {
        points += parseInt(coinValues[key]);
      }
    } else if (key === "pastExperiences") {
      // For pastExperiences array
      // eslint-disable-next-line no-loop-func
      inputs[key].forEach((experience) => {
        for (const subKey in experience) {
          if (experience[subKey] !== "" && subKey in coinValues.pastExperience) {
            points += parseInt(coinValues.pastExperience[subKey]);
          }
        }
      });
    }
  }

  setTotalCoins(points);
  setCoinBalance(points);


  const updatedInputs = { ...inputs, totalCoins: points };

  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/store_profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${Cookies.get('token')}`
      },
      body: JSON.stringify(updatedInputs),
    });

    if (response.ok) {
      const data = await response.json();
      navigate('/')
    } else {
      console.error('Failed to store profile data');
    }
  } catch (error) {
    console.error( error);
    
  }
};

const fetchProfileData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/get_profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${Cookies.get('token')}`
      }
    });

    if (response.ok) {
      const userData = await response.json();
      setInputs(userData.profile);
    } else {
      console.error('Failed to fetch profile data');
    }
  } catch (error) {
    console.error('Error fetching profile data:', error);
  }
};

useEffect(() => {
  fetchProfileData();
}, []);



  return (
    <div>
  <h2>User Profile</h2>
  <p>Coins Earned: <span>{totalCoins}</span></p>
  <div>
    <h3>Personal Details</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Name" data-coins={1} value={inputs.name} onChange={handleInputChange} />
    <label for="mobile">Mobile:</label>
    <input type="text" id="mobile" name="mobile" placeholder="Mobile" data-coins={15} value={inputs.mobile} onChange={handleInputChange} />
    <label for="profile-pic">Profile Picture:</label>
    <input type="file" id="profile-pic" name="profilePic" accept="image/*" data-coins={5} onChange={handleImageUpload} />
    <br/><br/>
    <label for="linkedin-link">LinkedIn Link:</label>
    <input type="text" id="linkedin-link" name="linkedinLink" placeholder="LinkedIn Link" data-coins={3} value={inputs.linkedinLink} onChange={handleInputChange} />
    <label for="github-link">GitHub Link:</label>
    <input type="text" id="github-link" name="githubLink" placeholder="GitHub Link" data-coins={5} value={inputs.githubLink} onChange={handleInputChange} />
    <label for="resume">Resume:</label>
    <input type="file" id="resume" name="resume" placeholder="Resume" accept="application/pdf" data-coins={20} onChange={handleInputChange} />
  </div>
  
  <div>
    <h3>Education Details</h3>
    <label for="type">Type (School/College):</label>
    <input type="text" id="type" name="type" placeholder="Type (School/College)" data-coins={5} value={inputs.type} onChange={handleInputChange} />
    <label for="schoolName">School / College Name:</label>
    <input type="text" id="schoolName" name="schoolName" placeholder="School / College Name" data-coins={5} value={inputs.schoolName} onChange={handleInputChange} />
    <label for="startDate">Start Date:</label>
    <input type="text" id="startDate" name="startDate" placeholder="Start Date" data-coins={2} value={inputs.startDate} onChange={handleInputChange} />
    <label for="endDate">End Date:</label>
    <input type="text" id="endDate" name="endDate" placeholder="End Date" data-coins={2} value={inputs.endDate} onChange={handleInputChange} />
  </div>
  <div>
    <h3>Project Details</h3>
    <label for="projectName">Project Name:</label>
    <input type="text" id="projectName" name="projectName" placeholder="Project Name" data-coins={5} value={inputs.projectName} onChange={handleInputChange} />
    <label for="projectDescription">Project Description:</label>
    <input type="text" id="projectDescription" name="projectDescription" placeholder="Project Description" data-coins={6} value={inputs.projectDescription} onChange={handleInputChange} />
    <label for="soloProject">Solo Project / Group Project:</label>
    <input type="text" id="soloProject" name="soloProject" placeholder="Solo Project / Group Project" data-coins={4} value={inputs.soloProject} onChange={handleInputChange} />
    <label for="projectLink">Project Link:</label>
    <input type="text" id="projectLink" name="projectLink" placeholder="Project Link" data-coins={10} value={inputs.projectLink} onChange={handleInputChange} />
  </div>
  <div>
    <h3>Past Experience Details</h3>
    {inputs.pastExperiences.map((experience, index) => (
      <div key={index}>
        <h4>Experience {index + 1}</h4>
        <label for="companyName">Company Name:</label>
        <input type="text" name="companyName" placeholder="Company Name" value={experience.companyName} onChange={(e) => handleInputChange(e, index)} />
        <label for="companyWebsite">Company Website:</label>
        <input type="text" name="companyWebsite" placeholder="Company Website" value={experience.companyWebsite} onChange={(e) => handleInputChange(e, index)} />
        <label for="role">Role:</label>
        <input type="text" name="role" placeholder="Role" value={experience.role} onChange={(e) => handleInputChange(e, index)} />
        <br/><br/>
        <label for="experienceStartDate">Start Date:</label>
        <input type="text" name="experienceStartDate" placeholder="Start Date" value={experience.experienceStartDate} onChange={(e) => handleInputChange(e, index)} />
        <label for="experienceEndDate">End Date:</label>
        <input type="text" name="experienceEndDate" placeholder="End Date" value={experience.experienceEndDate} onChange={(e) => handleInputChange(e, index)} />
        <label for="coverLetter">Cover Letter:</label>
        <input type="text" name="coverLetter" placeholder="Cover Letter" value={experience.coverLetter} onChange={(e) => handleInputChange(e, index)} />
        
        <button onClick={() => deletePastExperience(index)}>Delete</button>
      </div>
    ))}
    <br/>
    <button onClick={addPastExperience}>Add Past Experience</button>
  </div>
  <br/>
  <button onClick={handleSubmit}>Submit</button>
</div>

  );
}

export default CreateProfile;
