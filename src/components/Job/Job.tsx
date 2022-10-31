import React, {FC} from 'react';
import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";

import './job.modules.scss';
import {Link} from "react-router-dom";

const Job: FC<{ job: IJobs; }> = ({job}) => {

    const {name, title, pictures, address, id} = job;

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
                <div>
                    <span className="material-symbols-outlined">
                        bookmark
                    </span></div>
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