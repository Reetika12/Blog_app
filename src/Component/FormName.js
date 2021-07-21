import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BackupIcon from "@material-ui/icons/Backup";
import TextField from "@material-ui/core/TextField";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function FormComponent() {
  const [clicked, setClicked] = useState("PAN Card");
  const [fileUploadState, setfileUploadState] = useState("");
  const [flag,setFlag]=useState(true);
  const [finalButton,setFinalButton]=useState(false);
  const [panCardNumber,setpanCardNumber]=useState("")
  const [dematId,setdematId]=useState("")
  const [accountNumber,setaccountNumber]=useState("")
  const [confirmAccountNumber,setconfirmAccountNumber]=useState("")
  const [ifscCode,setifscCode]=useState("")
  const [open, setOpen] = React.useState(false);
// const [state, setState] = React.useState({
//     open: false,
//     vertical: 'top',
//     horizontal: 'center',
//   });
  const [userKYC, setUserKYC] = React.useState({
    "message": "Success",
    "panNumber": "AAAA1234A",
    "panName": "Grey Hound",
    "panAwsFilename": "aws_location_url",
    "accountName": "Hound Grey",
    "accountNumber": "789456123123",
    "ifsc": "something",
    "dpId": "123456",
    "clientId": "654321",
    "dematAwsFilename": "aws_location_url",
  })
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setState({open: false})
    setOpen(false);
  };
 const openPopup=()=>
 {
    // setState({open: true, ...newState})
    setOpen(true);
 }
//  const {register,handleSubmit,control,errors} = useForm();

  const fileUploadButton = () => {
    document.getElementById("upload-input").click();
    document.getElementById("upload-input").onchange = () => {
      setfileUploadState(document.getElementById("upload-input").value);
    };
  };

  const ListCard = [
    { item: "PAN Card", key: "panCard" },
    { item: "Bank Account Details", key: "bankAccountDetails" },
    { item: "Demat Account Details", key: "dematAccountDetail" },
  ];

  const toggle = (index) => {
    setClicked(index);
  };
//   CommonComponent(
//     "Pan Card",
//     "Please enter the below details",
//     "PAN Number",
//     "showpanName",
//     "uploadText",
//     "Bank Account Details"
//   );
  //
  const HandleChange = (value,id)=>{
    // setValue(document.getElementById(id))
    //   console.log("id",document.getElementById(id))
      if(id==="panCard")
      {
        setpanCardNumber(value)
          console.log("VALUE",panCardNumber)
      }
      else if(id==="dematAccount")
      {
        setdematId(value)
        console.log("dematid",dematId)
      }
      else if(id==="accountNumber")
      {
        setaccountNumber(value)
        console.log("accountnumber",accountNumber)
      }
      else if(id==="confirmAccountNumber")
      {
        setconfirmAccountNumber(value)
        console.log("confirmAccountNumber",confirmAccountNumber)
      }
      else if(id==="ifscCode")
      {
        setifscCode(value)
        console.log("ifsccode",ifscCode)
      }

  }
  function CommonComponent(
    id,
    panheading,
    enterText,
    labelName,
    showpanName,
    uploadText,
    nextComp
  ) {
    return (
      <div style={{ width: "40%" }}>
        <Panheading>{panheading}</Panheading>
        {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}
        <Formsec>
          <EnterDetails>{enterText}</EnterDetails>
          <Formpan>
            <TextField
              style={{ marginRight: "100px" }}
              id={id}
              onChange={e => {
                HandleChange(e.target.value,id);
            }}
            // value={id==="panCard" ? panCardNumber:""}
            // value={value}
            //   error={true}
            //   helperText="pan is required"
              label={labelName}
            />
            {showpanName && (
              <PandisplayName>
                <EnterDetails pan>PAN Name</EnterDetails>
                <div>Reetika</div>
              </PandisplayName>
            )}
          </Formpan>
          <Divider>
            <DividerSpan>AND</DividerSpan>
          </Divider>
          <UploadArea>
            <input
              style={{ position: "absolute", width: "0", opacity: "0" }}
              accept="image/*,application/pdf"
              id="upload-input"
              type="file"
            />
            <Label onClick={fileUploadButton}>
              <BackupIcon style={{ color: "green" }}></BackupIcon>
              <SpanText>
                {fileUploadState
                  ? fileUploadState
                  : "Click here to upload or Drag and drop"}
              </SpanText>
            </Label>
          </UploadArea>
          <UploadFormat>{uploadText}</UploadFormat>
          <Button flag={flag} onClick={() => toggle(nextComp)}>Submit</Button>
        </Formsec>
      </div>
    );
  }
  return (
    <ParentComponent>
        <Snackbar
         open={open} autoHideDuration={6000} onClose={handleClose}
          key={"top"+"center"}
        >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <div>
      KYC verification takes upto 48 hours after you submit your details. Kindly finish your KYC verification before to be investment ready.
      </div>
      <KycParent>
        <Kycheading>Complete your KYC</Kycheading>
        <div style={{ width: "100%", display: "flex" }}>
          <LeftHalf>
            {ListCard.map((item) => {
              return (
                <div
                  key="left-nav"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <KycLeft onClick={() => toggle(item.item)}>
                    <PanCard
                      style={
                        clicked === item.item
                          ? { "border-color": "#008000" }
                          : {}
                      }
                    >
                      {item.item}
                    </PanCard>
                  </KycLeft>
                </div>
              );
            })}
          </LeftHalf>

          {clicked === "PAN Card" &&
            CommonComponent(
              "panCard",
              "Pan Card",
              "Please enter the below details",
              "PAN Number",
              "showpanName",
              "Upload a copy of pan card in pdf/jpeg/png format",
              "Bank Account Details"
            )
          }
          {clicked === "Bank Account Details" && (
            <div style={{ width: "40%" }}>
              <Panheading>Bank Account Details</Panheading>
              <Formsec>
                <EnterDetails>Please enter the below details</EnterDetails>
                <Formpan>
                  <TextField
                    style={{ marginRight: "40px", width: "150px" }}
                    id="accountNumber"
                    label="Account Number"
                    onChange={e => {
                        HandleChange(e.target.value,"accountNumber");
                    }}
                  />
                  <TextField
                    style={{ width: "200px" }}
                    id="confirmAccountNumber"
                    onChange={e => {
                        HandleChange(e.target.value,"confirmAccountNumber");
                    }}
                    label="Confirm Account Number"
                  />
                </Formpan>
                <TextField
                  style={{ width: "150px" }}
                  id="ifscCode"
                  onChange={e => {
                    HandleChange(e.target.value,"ifscCode");
                }}
                  label="IFSC Code"
                />
                <Button
                  topmargin
                  flag={flag}
                  onClick={() => toggle("Demat Account Details")}
                >
                  Submit
                </Button>
              </Formsec>
            </div>
          )}
          {clicked === "Demat Account Details" &&
            CommonComponent(
              "dematAccount",
              "Demat Account Details",
              "Please enter the below details",
              "Demat Id",
              "",
              "Upload a latest Demat CMR copy or complete eCAS statement in pdf/jpeg/png format",
              ""
            )
          }
        </div>
        <KycFoot>
          <VerifyansSubmit onClick={openPopup}finalButton={finalButton}>Verify & Submit</VerifyansSubmit>
        </KycFoot>
      </KycParent>
    </ParentComponent>
  );
}
export default FormComponent;

const ParentComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f9fafa;
`;
const KycParent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 15px 73px -10px rgb(18 34 50 / 8%);
  width: 80%;
  margin: 5% 2% 2% 2%;
`;
const Kycheading = styled.div`
  padding: 19px 35px 21px;
  font: 400 16px / normal "Inter", sans-serif;
  font-weight: 600;
  border-bottom: 1px solid #e3e6eb;
`;
const KycLeft = styled.div`
  padding: 16px 60px 25px 65px;
`;
const LeftHalf = styled.div`
  width: 50%;
  margin-top: 3%;
  margin-left: 3%;
`;
const PanCard = styled.div`
  background: #edfafb;
  padding: 22px 20px 24px 30px;
  font: 400 14px / normal "Inter", sans-serif;
  width: 330px;
  border: 1px solid transparent;
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

//   &:active {
//     border-color: red;   
//   }
//   &:hover{
//     border-color: pink;   
//   }
}
`;
const Panheading = styled.div`
  font: 400 14px / normal "Inter", sans-serif;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  padding-top: 30px;
`;
const UploadArea = styled.div`
    height: 15%;
    text-align: center;
    border-box: 2px solid black;
    border-style: dotted;
    border-color:green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:12px;
    height:43px;
}
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
`;
const SpanText = styled.div`
  font: 400 12px / normal "Inter", sans-serif;
  font-weight: 500;
  margin-left: 10px;
`;
const UploadFormat = styled.div`
  margin-top: 3%;
  margin-bottom: 6%;
  text-align: center;
  font: 400 10px / normal "Inter", sans-serif;
  line-height: 20px;
  font-style: italic;
  color: rgba(18, 34, 50, 0.5);
`;
const Divider = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(227, 230, 235, 0.8);
  margin-top: 10%;
  margin-bottom: 10%;
`;
const DividerSpan = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #f5f7f9;
  border: 1px solid #e9ebef;
  font: 400 11px / normal "Inter", sans-serif;
  font-weight: 500;
  letter-spacing: -0.08px;
  position: absolute;
  left: 190px;
  top: -20px;
  z-index: 3;
`;
const Formsec = styled.div`
  padding: 20px;
`;
const EnterDetails = styled.div`
  font: 400 12px / normal "Inter", sans-serif;
  font-weight: 600;
  margin-bottom: ${(props) => (props.pan ? "5px" : "30px")};
`;
const Formpan = styled.div`
  margin-right: 40px;
  margin-bottom: 30px;
  height: 31px;
  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  jsustify-content: space-between;
`;
const Button = styled.div`
  width: 100px;
  height: 25px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events:${(props)=>props.flag? "none":""};
  box-shadow: 0 18px 11px -5px rgb(18 34 50 / 20%);
  float: right;
  padding: 5px 0px;
  font: 600 14px / normal "Inter", sans-serif;
  margin-top: ${(props) => (props.topmargin ? "79px" : "10px")};
  margin-bottom: ${(props) => (props.topmargin ? "0px" : "43px")};
  background:${(props)=> props.flag ? "#A9A9A9" :"rgb(83, 187, 83)"};
  color: #000000;
`;
const KycFoot = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e3e6eb;
`;
const VerifyansSubmit = styled.div`
  padding: 10px 5px;
  width: 150px;
  border-radius: 14px;
  height: 25px;
  pointer-events:${(props)=>props.finalButton? "none":""};
  background:${(props)=> props.finalButton ? "#A9A9A9" :"rgb(83, 187, 83)"};
  font: 400 14px / normal "Inter", sans-serif;
  font-weight: 600;
  box-shadow: 0 18px 11px -5px rgb(18 34 50 / 20%);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
  cursor: pointer;
`;
const PandisplayName = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
