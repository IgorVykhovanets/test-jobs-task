import {axiosService} from "../axios.service/axios.service";
import {token} from "../../configs/urls";
import {IJobs} from "../../interfaces/jobs.interface/jobs.interface";

export const jobsService = {
    getAll: () => axiosService.get<IJobs[]>(token),
}