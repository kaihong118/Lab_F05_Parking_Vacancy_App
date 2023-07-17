import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchTableRow from "../SearchTableRow/SearchTableRow.tsx";
import {CarParkInfoVacancyData} from "../../../data/CarParkInfoVacancyData.ts";

type Props = {
    infoVacancyData: CarParkInfoVacancyData[]
    searchText: string
    vehicleType: string
}

export default function SearchTable (props:Props) {
    const setSearchTableRow = () => {
            const filteredSearchList: CarParkInfoVacancyData[] = props.infoVacancyData.filter((infoVacancy) => (
                infoVacancy.district?.toLowerCase().includes(props.searchText.toLowerCase())
            ))
            return filteredSearchList.map((value: CarParkInfoVacancyData) => (
                <SearchTableRow
                    key={value.park_Id}
                    infoVacancyData={value}
                    vehicleType={props.vehicleType}
                />
            ))
    }

    return (
        <>
            <TableContainer component={Paper} style={{marginTop: "16px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Total Vacancy</TableCell>
                            <TableCell align="center">Google Map</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {setSearchTableRow()}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}