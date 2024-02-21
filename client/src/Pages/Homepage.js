import React from 'react'
import Navbar from '../Components/Navbar';
import jobData from '../Components/jobdata';
import JobCards from '../Components/JobCards';

const Homepage = () => {
  return (
    <>
      <Navbar />
      {jobData.map((val) => {
        return (
          <JobCards
            key={val.id}
            job_position={val.roleName}
            logo_url={val.companyLogo}
            monthly_salary={val.ctcOrStipend}
            companyName={val.companyName}
            experienceRequired={val.experienceRequired}
            id={val.id}
          />
        );
      })}
    </>
  )
}

export default Homepage