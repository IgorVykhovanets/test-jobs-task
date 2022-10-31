import React, {FC} from 'react';
import JobDetails from "../../components/JobDetails/JobDetails";
import {useLocation} from "react-router-dom";

const JobDetailsPage:FC = () => {

    const {state} = useLocation();

    return (
        <div>
            <JobDetails jobDetails={state}/>
        </div>
    );
};

export default JobDetailsPage;