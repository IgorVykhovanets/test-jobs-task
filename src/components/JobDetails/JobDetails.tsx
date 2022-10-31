import React, {FC} from 'react';

import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";

const JobDetails:FC<{jobDetails: IJobs}> = ({jobDetails:{name}}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default JobDetails;