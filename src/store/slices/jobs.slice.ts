import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";
import {jobsService} from "../../services/jobs.service/jobs.service";

export const getAllJobsThunk = createAsyncThunk(
    'jobsSlice/getAllJobsThunk',
    async (_, {dispatch}) => {
        const {data} = await jobsService.getAll();
        dispatch(getAllJobs(data));
    }
);


interface IState {
    jobs: IJobs[] | null;
}

const initialState: IState = {
    jobs: null,
};

const jobsSlice = createSlice({
    name: 'jobsSlice',
    initialState,
    reducers: {
        getAllJobs: (state, action: PayloadAction<IJobs[]>) => {
            state.jobs = action.payload;
        }
    }
});

const {getAllJobs} = jobsSlice.actions;

export const jobsReducer = jobsSlice.reducer;
