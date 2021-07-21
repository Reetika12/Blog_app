import React, { useState, useEffect } from "react";
import Table from "../Component/DefaultTable";
import styled from "styled-components";
import { Select, MenuItem } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Kycdashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [age, setAge] = useState("");
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
 const [dataperPage,setDataperPage] = useState(5)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let RequisiteCohortData = [
    { label: "Ten", value: 10 },
    { label: "Twenty", value: 20 },
    { label: "Thirty", value: 30 },
  ];
  let cohortData = RequisiteCohortData.map((item) => ({
    label: `${item.label}`,
    value: `${item.value}`,
  }));

  const [json, setJson] = useState([
    {
      key: "name",
      columnWidth: "100px",
      label: "User Name",
      align:"center"
    },
    { key: "mobile", columnWidth: "120px", label: "Mobile Number",align:"center" },
    { key: "last_updated", columnWidth: "120px", label: "Last Updated",align:"center" },
    {
      label: "Status",
    //   columnWidth: "10px",
      renderRow: (row) => (
        <StatusField>
          <PanStatus>Pan</PanStatus>
          <BankStatus>Bank</BankStatus>
          <DematStatus>Demat</DematStatus>
        </StatusField>
      ),
      align:"center",
      width: '70%'
    },
    {
      label: "Verify",
      columnWidth: "80px",
      renderRow: (row) => <VerifyParent><VerifyButton>Verify</VerifyButton></VerifyParent>,
      align:"center",
    },
    {
      label: "Assign",
      renderRow: (row) => <AssignBlock>{returnListItem()}</AssignBlock>,
      align:"center"
    },
  ]);
  const [data, setData] = useState([
    { name: "reetika", created_at: "13/78/90", status: "verified" },
    { name: "ayush", created_at: "14/78/90", status: "not verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
    { name: "kiran", created_at: "15/78/90", status: "verified" },
  ]);


  function handlePagination(event, value) {
//   const [currentPage, setCurrentPage] = useState(1);
   setCurrentPage(value)
    // setPage(value);
    console.log("page value", value);
  }
    //get Current Data
 const indexOflastdata = currentPage*dataperPage
 const indexOfFirstdata = indexOflastdata-dataperPage;
 const currentDatas = data.slice(indexOfFirstdata,indexOflastdata)

  function returnListItem() {
    return (
      <FormControl className={classes.formControl}>
        {" "}
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {cohortData.map((el, index) => {
            return (
              <MenuItem key={index} value={el.value}>
                {el.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
  return (
    <div>
      {data.length ? (
        <Table json={json} data={[...currentDatas]} />
      ) : (
        <NorecordsToDisplay>No Records to Display!</NorecordsToDisplay>
      )}
     <PaginationWrapper>
      <Pagination count={5} color="primary" onChange={handlePagination} />
      </PaginationWrapper>
    </div>
  );
}

export default Kycdashboard;

const NorecordsToDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  font-size: 22px;
  font-family: Gotham-Bold;
  background-color: #fff;
`;
const StatusField = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
`;
const PanStatus = styled.p`
  width: 75px;
  background: rgba(83, 187, 83, 0.7);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  height: 30px;
`;
const BankStatus = styled.p`
  width: 80px;
  background: rgba(255, 165, 60, 0.7);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  height: 30px;
`;
const DematStatus = styled.p`
  width: 85px;
  background: rgba(255, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  height: 30px;
`;
const VerifyParent = styled.div`
display:flex;
align-self:center;
justify-content:center;
`
const VerifyButton = styled.button`
  width: 124px;
  height: 30px;
  background: #33b6ff;
  border-radius: 10px;
  border: aliceblue;
  cursor: pointer;
`;
const PaginationWrapper = styled.div`
float: right;
margin-right:1%;
`
const AssignBlock = styled.div`
display:flex;
align-items:center;
justify-content:center;
`