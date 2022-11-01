import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import JobDetails from "../../components/JobDetails/JobDetails";


const JobDetailsPage:FC = () => {

    const {state} = useLocation();

    return (
        <div>
            {state && <JobDetails jobDetails={state}/>}
        </div>
    );
};

export default JobDetailsPage;