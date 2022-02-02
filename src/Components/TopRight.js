import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#3333cc",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#3333cc",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, val1, val2) {
  return { name, val1, val2 };
}

const rows = [
  createData("Live Issues", 2, 0),
  createData("PR", 1, 0),
  createData("Story", 15, -5),
  createData("Story2", 15, -5),
];

const tableStyles = makeStyles({
  tableHead: {
    height: 30,
  },
});

function TopRight() {
  const classes = tableStyles();
  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "#3333cc", borderRadius: "20px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow style={{ border: "none" }}>
            <StyledTableCell
              style={{ border: "none" }}
              className={classes.tableHead}
            >
              Numbers
            </StyledTableCell>

            <StyledTableCell
              align="right"
              style={{ border: "none" }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ color: "#efeff5" }}
              >
                {row.name}
              </StyledTableCell>

              <StyledTableCell align="right" style={{ color: "#efeff5" }}>
                {`${row.val1} Days`}
                <Typography
                  style={
                    row.val2 > -1 ? { color: "#22bb33" } : { color: "#bb2124" }
                  }
                  variant="p"
                  display="inline"
                  gutterBottom
                >
                  {` (${row.val2}) `}
                </Typography>
                <CircleIcon
                  fontSize="15px"
                  color={row.val2 > -1 ? "success" : "error"}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopRight;
