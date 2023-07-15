import {TextField} from "@mui/material";
import SearchTable from "../SearchTable/SearchTable.tsx";
import React, {useEffect, useState} from "react";
import {CarParkInfoVacancyData} from "../../../data/CarParkInfoVacancyData.ts";


const vehicleTypeList = [
    {
        value: "privateCar",
        label: "Private Car"
    },
    {
        value: "LGV",
        label: "LGV"
    },
    {
        value: "HGV",
        label: "HGV"
    },
    {
        value: "coach",
        label: "Coach"
    },
    {
        value: "motorcycle",
        label: "Motorcycle"
    }
]

type Props = {
    infoVacancyData: CarParkInfoVacancyData[]
    fetchSearchTableData: () => void
}

export default function FilterForm (props: Props) {
    const [searchText, setSearchText] = useState<string>("")
    const [vehicleType, setVehicleType] = useState<string>("privateCar")

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText("")
        setSearchText(event.currentTarget.value)
        props.fetchSearchTableData()
    }

    const handleVehicleType = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setVehicleType("privateCar")
        setVehicleType(event.currentTarget.value)
        props.fetchSearchTableData()
    }

    useEffect(() => {
        setSearchText("")
        setVehicleType("privateCar")
    }, [])

    return (
        <>
            <form
                style={{
                width: '100%' ,
                border: "1px solid black",
                borderRadius: "4px",
                marginTop: "16px",
                padding: "16px"
            }}
            >
                <TextField
                    id="outlined-helperText"
                    label="District"
                    fullWidth={true}
                    value={searchText}
                    onChange={handleSearchText}
                />
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Vehicle Type"
                    SelectProps={{
                        native: true,
                    }}
                    fullWidth={true}
                    style={{marginTop: "16px"}}
                    onChange={handleVehicleType}
                >
                    {vehicleTypeList.map((value) => (
                        <option
                            key={value.value}
                            value={value.value}
                        >
                            {value.label}
                        </option>
                    ))}
                </TextField>
            </form>
            <SearchTable
                infoVacancyData={props.infoVacancyData}
                searchText={searchText}
                vehicleType={vehicleType}
            />
        </>
    )
}