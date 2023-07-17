import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Button} from "@mui/material";
import {CarParkInfoVacancyData} from "../../../data/CarParkInfoVacancyData.ts";

type Props = {
    infoVacancyData: CarParkInfoVacancyData
    vehicleType: string
}

export default function SearchTableRow (props:Props) {
    const getGoogleMapAddress = () => {
        const latitude = props.infoVacancyData.latitude;
        const longitude = props.infoVacancyData.longitude;
        const googleMapURL = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
        window.open(googleMapURL, "_blank");
    }

    const getVacancyByVehicleType = () => {
        if(props.vehicleType === "privateCar") {
            return props.infoVacancyData.privateCarVacancy < 0 ? 0 : props.infoVacancyData.privateCarVacancy;
        }
        else if(props.vehicleType === "LGV") {
            return props.infoVacancyData.LGVVacancy < 0 ? 0 : props.infoVacancyData.LGVVacancy;
        }
        else if(props.vehicleType === "HGV") {
            return props.infoVacancyData.HGVVacancy < 0 ? 0 : props.infoVacancyData.HGVVacancy;
        }
        else if(props.vehicleType === "coach") {
            return props.infoVacancyData.coachVacancy < 0 ? 0 : props.infoVacancyData.coachVacancy;
        }
        else {
            return props.infoVacancyData.motorCycleVacancy < 0 ? 0 : props.infoVacancyData.motorCycleVacancy;
        }
    }

    return (
        <>
            <TableRow
                key={props.infoVacancyData.park_Id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align="center">
                    {
                        props.infoVacancyData.imageUrl && <img src={props.infoVacancyData.imageUrl} width={"180px"}/>
                    }
                </TableCell>
                <TableCell align="left">{props.infoVacancyData.name}</TableCell>
                <TableCell align="left">{props.infoVacancyData.displayAddress}</TableCell>
                <TableCell align="left">{getVacancyByVehicleType()}</TableCell>
                <TableCell align="center">
                    <Button
                        variant="contained"
                        onClick={getGoogleMapAddress}
                    >
                        Map
                    </Button>
                </TableCell>
            </TableRow>
        </>
    )
}