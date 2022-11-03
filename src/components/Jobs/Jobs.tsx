import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {getAllJobsThunk} from "../../store/slices/jobs.slice";
import Job from "../Job/Job";

const Jobs:FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllJobsThunk());
    },[])

    const {jobs} = useAppSelector(state => state.jobsReducer);

    return (
        <div>
            {jobs && jobs.map(job => <Job key={job.id} job={job}/>)}
        </div>
    );
};

export default Jobs;
