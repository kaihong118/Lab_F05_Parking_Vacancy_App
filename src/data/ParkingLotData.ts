export type ParkingLotData = {
    results: Result[];
}

export type Result = {
    park_Id:         string;
    name:            string;
    displayAddress:  string;
    district?:       string;
    latitude:        number;
    longitude:       number;
    renditionUrls?:  RenditionUrls;
}

export type RenditionUrls = {
    square?:        string;
    thumbnail?:     string;
    banner?:        string;
    carpark_photo?: string;
}
