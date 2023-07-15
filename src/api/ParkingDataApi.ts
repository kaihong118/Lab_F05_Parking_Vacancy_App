import axios from "axios";
import {ParkingLotData} from "../data/ParkingLotData.ts";
import {VacancyData} from "../data/VacancyData.ts";

export const getParkingData = async () => {
    const urlApi = "https://api.data.gov.hk/v1/carpark-info-vacancy";

    try {
        const response = await axios.get<ParkingLotData>(urlApi)
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}

export const getVacancyData = async () => {
    const urlApi = "https://api.data.gov.hk/v1/carpark-info-vacancy?data=vacancy";

    try {
        const response = await axios.get<VacancyData>(urlApi)
        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}