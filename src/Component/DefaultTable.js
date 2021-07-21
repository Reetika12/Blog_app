import React,{useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
// import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import _get from 'lodash/get';
import styled from "styled-components"

export default function DefaultTable(props) {
  let headerName = props.json || [];
  let tableData = _get(props, 'data') || [];
  return (
      <TableParent>
    <TableContainer component={Paper}>
      <Table  aria-label="a dense table">
        <TableHead>
          <TableHeaderRowStyle >
            {headerName.map((item, index) => (
              <TableCell
                component="th"
                scope="row"
                align={item.align}
                key={`${item.label}-header${index}`}
              >
                <div >{item.label}</div>
              </TableCell>
            ))}
          </TableHeaderRowStyle>
        </TableHead>
        <TableBody>
          {tableData
          .map((row, i) => (
         <TableRow
              key={`${row.id}keytable${i}`}
            >
              {headerName.map((item, index) => {
                if (item.key) {
                  return (
                    <TableCell
                      key={`${item.key}${row.id}${index}`}
                      align={item.align}
                    >
                      <div>
                        {_get(row, `${item.key}`) || '--'}
                      </div>
                    </TableCell>
                  );
                }
                if (item.renderRow) {
                  return (
                    <TableCell
                      key={`${i}${row.id}${index}`}
                    >
                      <div>
                        {item.renderRow(row)}
                      </div>
                    </TableCell>
                  );
                }
                return null;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableParent>
  );
}
const TableHeaderRowStyle=styled(TableRow)`
    background-image: linear-gradient(to bottom, #ffffff 2%, #C4C4C4 98%);
  `
const TableParent=styled.div`
// width:90%;
margin:2%;
`