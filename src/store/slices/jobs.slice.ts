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
    likeJobs : IJobs[]
}

const initialState: IState = {
    jobs: null,
    likeJobs: []
};

const jobsSlice = createSlice({
    name: 'jobsSlice',
    initialState,
    reducers: {
        getAllJobs: (state, action: PayloadAction<IJobs[]>) => {
            state.jobs = action.payload;
        },
        addLikeJobs: (state, action:PayloadAction<IJobs[]>) => {
            // @ts-ignore
            state.likeJobs.push(action.payload);
            localStorage.setItem('jobs', JSON.stringify(state.likeJobs));
            alert('Successfully !')
        }
    }
});

export const {getAllJobs, addLikeJobs} = jobsSlice.actions;

export const jobsReducer = jobsSlice.reducer;
