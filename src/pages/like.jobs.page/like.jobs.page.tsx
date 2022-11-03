import React, {useEffect, useState} from 'react';

import Job from "../../components/Job/Job";
import {useAppSelector} from "../../hooks/redux.hooks";

const LikeJobsPage = () => {

    const {likeJobs} = useAppSelector(state => state.jobsReducer);

    const [likeJobsData, setLikeJobsData] = useState<[]>([]);

    useEffect(() => {
        const item = localStorage.getItem('jobs');
        //@ts-ignore
        setLikeJobsData(JSON.parse(item));
    }, [likeJobs]);

    return (
        <div>
            {
                //@ts-ignore
                likeJobsData && likeJobsData.map(job => <Job key={Math.random() * 10000} job={job}/>)
            }
        </div>
    );
};

export default LikeJobsPage;