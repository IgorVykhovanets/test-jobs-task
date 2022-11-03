import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";

import './job.modules.scss';
import {useAppDispatch} from "../../hooks/redux.hooks";
import {addLikeJobs} from "../../store/slices/jobs.slice";

const Job: FC<{ job: IJobs; }> = ({job}) => {

    const {name, title, pictures, address, id} = job;

    const dispatch = useAppDispatch();

    return (
        <div className={'job-container'}>
            <div>
                <img src={pictures[0]} alt="job"/>
            </div>
            <div className={'description-job-container'}>
                <h1><Link to={`/jobs/details/${id}`} state={job}>{title}</Link></h1>
                <h2>Department Name • {name}</h2>
                <h3>
                    <span className="material-symbols-outlined">
                    location_on
                    </span>
                    {address}
                </h3>
            </div>
            <div className={'additional-info-container'}>
                <div className={'btn-add-jobs'}>
                    <button onClick={() => {
                        //@ts-ignore
                        dispatch(addLikeJobs(job))
                    }}>Like Jobs</button>
                </div>
                <div className={'star-block'}>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                    <span className="material-symbols-outlined">
                        star
                    </span>
                </div>
                <div>
                    <h3>Posted 2 days ago</h3>
                </div>
            </div>
        </div>
    );
};

export default Job;