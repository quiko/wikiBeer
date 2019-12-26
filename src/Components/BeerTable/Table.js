import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import DescriptionPanel from "./ExpansionPanel";

const StyledTableCell = withStyles(theme => ({
  root: {
    backgroundColor: "rgba(250, 190, 88, 0.3)"
  },
  head: {
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
  shadow: {
    boxShadow: "2px 2px 6px  rgba(0, 0, 0, 0.4)"
  }
});

const BeerTable = ({ Data }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pageData = Data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer className={classes.shadow} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="right">first brewed</StyledTableCell>
            <StyledTableCell align="right">abv %</StyledTableCell>
            <StyledTableCell align="right">attenuation level</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pageData.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <DescriptionPanel
                  name={row.name}
                  description={row.description}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.first_brewed}
              </StyledTableCell>
              <StyledTableCell align="right">{row.abv}</StyledTableCell>
              <StyledTableCell align="right">
                {row.attenuation_level}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={Data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default BeerTable;
