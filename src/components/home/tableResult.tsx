import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableFooter} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1ec0c2',
        fontWeight: 700
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    [`&.${tableCellClasses.footer}`]: {
        fontSize: 16,
        color: theme.palette.common.black,
        //backgroundColor: theme.palette.primary.main,

        fontWeight: 700
    },

}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const  createData = (
    descrizione: string,
    annuale: number | string,
    mensile: number | string,
) => {
    return { descrizione, annuale, mensile};
}

interface tableResult {
    irpef: number
    inps:number
    net:number
}

const TableResult: React.FC<tableResult> = ({irpef,inps,net}) => {
    const rows = [
        createData('Irpef', irpef.toFixed(2), (irpef / 12).toFixed(2)),
        createData('Contributi previdenziali', inps.toFixed(2), (inps / 12).toFixed(2)),
    ];
    const rowsFooter = [
        createData('Netto', net.toFixed(2), (net / 12).toFixed(2)),
    ] ;

    return (
            <Table sx={{ minWidth: 700, width:600 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Descrizione</StyledTableCell>
                        <StyledTableCell align="right">Annuale</StyledTableCell>
                        <StyledTableCell align="right">Mensile</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.descrizione}>
                            <StyledTableCell component="th" scope="row">
                                {row.descrizione}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.annuale}</StyledTableCell>
                            <StyledTableCell align="right">{row.mensile}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    {rowsFooter.map((row) => (
                        <StyledTableRow key={row.descrizione}>
                            <StyledTableCell component="th" scope="row">
                                {row.descrizione}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.annuale}</StyledTableCell>
                            <StyledTableCell align="right">{row.mensile}</StyledTableCell>
                        </StyledTableRow>
                    ))}

                </TableFooter>

            </Table>
    );
}
export default TableResult;
