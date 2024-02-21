import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './JobCards.module.css';
import LogContext from '../Utilities/LogContext';
import AppliedContext from '../Utilities/AppliedContext';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const JobCards = (props) => {
  const [logged] = useContext(LogContext);
  const [appliedJobIds, setAppliedJobIds] = useContext(AppliedContext);
  const navigate = useNavigate();

  const applyJob = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/apply/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Cookies.get('token')
        }
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message)
        setAppliedJobIds([...appliedJobIds, id])
      } else {
        // Insufficient coins
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { job_position, logo_url, monthly_salary, job_type, experienceRequired, location, companyName, id } = props;

  return (
    <div className={style.card_main}>
      <div className={style.card_left}>
        <div className={style.card_image}>
          <img className={style.company_logo} src={logo_url} alt='logo' />
        </div>
        <div className={style.job_grid}>
          <div className={style.card_detail}>
            <div className={style.job_position}>{`${companyName} (${job_position})`}</div>
            <div className={style.job_feed}>
              <div className={style.jobPay}>{`Job Offer  ${monthly_salary} LPA`}</div>
              <div className={style.jobPay}>{location}</div>
            </div>
            <div className={style.job_types}>
              <div className={style.job_type}>{`Required Experience ${experienceRequired}`}</div>
              <div className={style.job_type}>{job_type}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.card_right}>
        <div className={style.card_skill}>
          <div className={style.job_details}>
            {(logged && !appliedJobIds.includes(id)) && <button className={style.view_job} onClick={() => applyJob(id)}>Apply using 50 coins</button>}
            {(logged && appliedJobIds.includes(id)) && <button className={style.view_job_applied} onClick={() => applyJob(id)}>Already Applied</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
