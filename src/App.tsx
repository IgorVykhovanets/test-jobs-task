import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './app.modules.scss';
import HomePage from "./pages/home.page/home.page";
import JobsPage from "./pages/jobs.page/jobs.page";
import NotFoundPage from "./pages/not.found.page/not.found.page";
import JobDetailsPage from "./pages/job.details.page/job.details.page";

const App:FC = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/jobs'} element={<JobsPage/>}/>
                    <Route path={'/jobs/details/:id'} element={<JobDetailsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;