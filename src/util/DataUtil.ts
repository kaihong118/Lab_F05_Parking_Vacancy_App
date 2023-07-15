import {ParkingLotData} from "../data/ParkingLotData.ts";
import {VacancyData} from "../data/VacancyData.ts";
import {CarParkInfoVacancyData} from "../data/CarParkInfoVacancyData.ts";

export function mergeToInfoVacancy (infoDataList: ParkingLotData, vacancyDataList: VacancyData): CarParkInfoVacancyData[] {
    const infoVacancyList: CarParkInfoVacancyData[] = [];

    infoDataList.results.map((infoData) => {
        if(infoData) {
            const vacancyData = vacancyDataList.results.find((vacancyData) => (infoData.park_Id === vacancyData.park_Id))

            if(vacancyData) {
                infoVacancyList.push({
                    park_Id:           infoData.park_Id,
                    name:              infoData.name,
                    displayAddress:    infoData.displayAddress,
                    district:          infoData.district ?? "",
                    latitude:          infoData.latitude,
                    longitude:         infoData.longitude,
                    imageUrl:          infoData.renditionUrls?.square ?? "",
                    privateCarVacancy: vacancyData.privateCar ? vacancyData.privateCar[0].vacancy : 0,
                    LGVVacancy:        vacancyData.LGV ? vacancyData.LGV[0].vacancy : 0,
                    HGVVacancy:        vacancyData.HGV ? vacancyData.HGV[0].vacancy : 0,
                    motorCycleVacancy: vacancyData.motorCycle ? vacancyData.motorCycle[0].vacancy : 0,
                    coachVacancy:      vacancyData.coach ? vacancyData.coach[0].vacancy : 0
                })
            }
        }
    })
    return infoVacancyList;
}

