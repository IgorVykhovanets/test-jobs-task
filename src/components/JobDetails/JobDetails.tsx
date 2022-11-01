import React, {FC} from 'react';

import './details.modules.scss'
import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";

//@ts-ignore
import imgMap from '../../images/Map.png'
//@ts-ignore
import imgJob1 from '../../images/Bitmap.png'
//@ts-ignore
import imgJob2 from '../../images/Bitmap (1).png'
//@ts-ignore
import imgJob3 from '../../images/Bitmap (2).png'
import {Link} from "react-router-dom";

const JobDetails: FC<{ jobDetails: IJobs; }> = ({jobDetails: {name, address, email, phone, title, description}}) => {
    return (
        <div className={'details-container'}>
            <div className={'left-details-job-container'}>
                <div className={'header-details-container'}>
                    <h1>Job Details</h1>
                    <div className={'btn-header-container'}>
                        <div>
                            <span className="material-symbols-outlined">
                            bookmark
                            </span>
                            Save to my list
                        </div>
                        <div>
                        <span className="material-symbols-outlined">
                            share
                        </span>
                            Share
                        </div>
                    </div>
                </div>
                <div className={'btn-container'}>
                    <button>APPLY NOW</button>
                </div>
                <div className={'title-job-container'}>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div className={'zp-container'}>
                        <h2>€ 54000-60000</h2>
                        <span>Brutto, per year</span>
                    </div>
                </div>
                <div className={'date-job-container'}>
                    <span>Posted 2 days ago</span>
                </div>
                <div className={'description-job-container'}>
                    <p>
                        {description}
                    </p>
                    <h2>
                        Responsopilities
                    </h2>
                    <p>
                        {description}
                    </p>
                    <p>
                        {description}
                    </p>
                    <h2>
                        Compensations & Benefits:
                    </h2>
                    <ul>
                        <li>Very competitive compensation package with bonuses</li>
                        <li>Medical, Dental, and Vision Insurance</li>
                        <li>Occurrence-based Malpractice Coverage</li>
                        <li>Short-term and Long-term Disability Insurance <br/> and life insurance</li>
                    </ul>
                </div>
                <div className={'btn-container'}>
                    <button>APPLY NOW</button>
                </div>
                <div className={'additional-info-container'}>
                    <div className={'add-info-title-container'}>
                        <h2>
                            Additional info
                        </h2>
                    </div>
                    <div className={'time-info-container'}>
                        <span>Employment time</span>
                        <div>
                            <button>Full Time</button>
                            <button>Part Time</button>
                            <button>Temporary</button>
                        </div>
                    </div>
                    <div className={'benefits-info-container'}>
                        <span>Benefits</span>
                        <div>
                            <button>Flexible shedule</button>
                            <button>Relocation assistance</button>
                        </div>
                    </div>
                </div>
                <div className={'img-info-container'}>
                    <div className={'img-title-container'}>
                        <h2>
                            Attached images
                        </h2>
                    </div>
                    <div>
                        <img src={imgJob1} alt="job"/>
                        <img src={imgJob2} alt="job"/>
                        <img src={imgJob3} alt="job"/>
                    </div>
                </div>
                <div className={'btn-footer-container'}>
                    <Link to={'/jobs'}>
                        <button>
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                            RETURN TO JOB BOARD
                        </button>
                    </Link>
                </div>
            </div>
            <div className={'right-details-job-container'}>
                <img src={imgMap} alt="map"/>
                <div className={'img-info-container'}>
                    <div>
                        <h2>Department Name <br/> {name}</h2>
                    </div>
                    <div className={'img-location-container'}>
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <h3>{address}</h3>
                    </div>
                    <div className={'contact-container'}>
                        <h3>{email}</h3>
                        <h3>{phone}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;