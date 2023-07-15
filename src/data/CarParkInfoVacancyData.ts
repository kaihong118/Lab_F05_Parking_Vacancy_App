export type CarParkInfoVacancyData = {
    park_Id:           string;
    name:              string;
    displayAddress:    string;
    district?:         string;
    latitude:          number;
    longitude:         number;
    imageUrl?:         string;
    privateCarVacancy: number;
    LGVVacancy:        number;
    HGVVacancy:        number;
    motorCycleVacancy: number;
    coachVacancy:      number;
}