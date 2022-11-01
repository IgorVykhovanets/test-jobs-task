import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/redux.hooks";
import Job from "../../components/Job/Job";

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
            {likeJobsData && likeJobsData.map(job => <Job job={job}/>)}
        </div>
    );
};

export default LikeJobsPage;