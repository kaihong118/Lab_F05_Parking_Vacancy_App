import TopNavBar from "../component/TopNavBar/TopNavBar.tsx";
import {Container} from "@mui/material";
import FilterForm from "../component/FilterForm/FilterForm.tsx";
import React, {useEffect, useState} from "react";
// import mockData from "./response.json"
// import mockData1 from "./vacancyResponse.json"
import {CarParkInfoVacancyData} from "../../data/CarParkInfoVacancyData.ts";
import {mergeToInfoVacancy} from "../../util/DataUtil.ts";
import * as ParkingDataApi from "../../api/ParkingDataApi.ts"
import {ParkingLotData} from "../../data/ParkingLotData.ts";
import {VacancyData} from "../../data/VacancyData.ts";

export default function LandingPage () {
    const [infoVacancyData, setInfoVacancyData] = useState<CarParkInfoVacancyData[]>([])

    const fetchSearchTableData = async () => {
        setInfoVacancyData([]);

        const infoResponseData: ParkingLotData =  await ParkingDataApi.getParkingData()
        const vacancyResponseData: VacancyData = await ParkingDataApi.getVacancyData()

        setInfoVacancyData(mergeToInfoVacancy(infoResponseData, vacancyResponseData))
    }

    useEffect(() => {
        fetchSearchTableData()
    }, [])

    return (
        <>
            <React.Fragment>
                <TopNavBar/>
                <Container>
                    <FilterForm
                        infoVacancyData={infoVacancyData}
                        fetchSearchTableData={fetchSearchTableData}/>
                </Container>
            </React.Fragment>
        </>
    )
}