import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { useFetch } from "../../Hooks/fetchHook";

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
  },
  title: {
    textAlign: "center",
    color: "#FF8E53 "
  }
});

export default function BeerTable() {
  const url = "https://api.punkapi.com/v2/beers/";
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { Data } = useFetch(url, []);

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
    <Grid container>
      <Grid item xs>
        <Card className={classes.shadow}>
          <CardHeader
            className={classes.title}
            title="Discover the finest beers !"
          ></CardHeader>
          <CardContent>
            <TableContainer className={classes.shadow} component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>name</StyledTableCell>
                    <StyledTableCell align="right">
                      first brewed
                    </StyledTableCell>
                    <StyledTableCell align="right">abv %</StyledTableCell>
                    <StyledTableCell align="right">
                      attenuation level
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pageData.map(row => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
