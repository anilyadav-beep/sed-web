import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(application, type, geography, status, opportunity) {
  return { application, type, geography, status, opportunity };
}

const rows = [
  createData('e-Bike', 'Global Tier-1', 'Europe' , 'Biz-Won: SoP August 2022 [Actual SoP October 2022]', '$30M/yr by 2026'),
  createData('e-2/3W', 'Global Tier-1', 'India/ASEAN/Japan/USA' ,'Biz-Won: SoP March 2023', '$20M/yr by 2027'),
  createData('e-2/3W', 'Major Indian e-2W OEM','India' ,'Biz-Win Expected Shortly [Biz-Won: October 2022]', 'To Be Identified'),
  createData('e-2/3W', 'Major Incumbent ICE 2W OEM', 'India','Biz-Win Expected Shortly', 'To Be Identified'),
  createData('e-2/3W', 'Global Tier-1', 'ASEAN' ,'Demo done to Global Leadership', 'To Be Identified'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Application</b></TableCell>
            <TableCell align="right"><b>Type of Customer</b></TableCell>
            <TableCell align="right"><b>Geography</b></TableCell>
            <TableCell align="right"><b>Status</b></TableCell>
            <TableCell align="right"><b>Opportunity</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.application}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.application}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.geography}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.opportunity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
