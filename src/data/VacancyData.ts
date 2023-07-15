export type VacancyData = {
    results: VacancyResult[];
}

export type VacancyResult = {
    park_Id:     string;
    privateCar?: PrivateCar[];
    LGV?:        Lgv[];
    HGV?:        Hgv[];
    motorCycle?: MotorCycle[];
    coach?:      Coach[];
}

export type PrivateCar = {
    vacancy:      number;
}

export type Lgv = {
    vacancy:      number;
}

export type Hgv = {
    vacancy:      number;
}

export type Coach = {
    vacancy:      number;
}


export type MotorCycle = {
    vacancy:      number;
}

