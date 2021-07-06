import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BackupIcon from "@material-ui/icons/Backup";
import TextField from "@material-ui/core/TextField";

function FormComponent() {
  const [clicked, setClicked] = useState("PAN Card");
  const [fileUploadState, setfileUploadState] = useState("");

  const fileUploadButton = () => {
    document.getElementById("upload-input").click();
    document.getElementById("upload-input").onchange = () => {
      setfileUploadState(document.getElementById("upload-input").value);
    };
  };

  //   function usePrevious(value) {
  //     const ref = useRef();
  //     useEffect(() => {
  //       ref.current = value;
  //     });
  //     return ref.current;
  //   }
  const ListCard = [
    { item: "PAN Card", key: "panCard" },
    { item: "Bank Account Details", key: "bankAccountDetails" },
    { item: "Demat Account Details", key: "dematAccountDetail" },
  ];

  const toggle = (index) => {
    setClicked(index);
    // setFlag(!flag)
  };
  //   const CommonFunction = (index) => {
  //       switch (index) {
  //         case 0:
  //           return <h1>first component</h1>;
  //           break;
  //         case 1:
  //           return <h1>second component</h1>;
  //           break;
  //         case 2:
  //           return <h1>second component</h1>;
  //           break;
  //       }
  //   };
  return (
    <ParentComponent>
      <KycParent>
        <Kycheading>Complete your KYC</Kycheading>
        <div style={{ width: "100%", display: "flex" }}>
          <LeftHalf>
              {ListCard.map((item)=>{
                  return <div
                  key="left-nav"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                <KycLeft onClick={() => toggle(item.item, "highLightEvent1")}>
                  <PanCard
                    style={
                      clicked===item.item
                        ? { "border-color": "#008000" }
                        : {}
                    }
                  >
                    {item.item}
                  </PanCard>
                </KycLeft>
                </div>
              })}
          </LeftHalf>

          {clicked === "PAN Card" && (
            <div style={{ width: "40%" }}>
              <Panheading>Pan Card</Panheading>
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
              <UploadFormat>
                Upload a copy of pan card in pdf/jpeg/png format
              </UploadFormat>
              <Divider>
                <DividerSpan>AND</DividerSpan>
              </Divider>
              <Formsec>
                <EnterDetails>Please enter the below details</EnterDetails>
                <Formpan>
                  <TextField
                    style={{ marginRight: "100px" }}
                    id="standard-basic"
                    label="PAN Number"
                  />

                  <PandisplayName>
                    <EnterDetails pan>PAN Name</EnterDetails>
                    <div>Reetika</div>
                  </PandisplayName>
                </Formpan>
                <Button>Submit</Button>
              </Formsec>
            </div>
          )}
          {clicked === "Bank Account Details" && (
            <div style={{ width: "50%" }}>{clicked}</div>
          )}
          {clicked === "Demat Account Details" && (
            <div style={{ width: "50%" }}>{clicked}</div>
          )}
        </div>
        <KycFoot>
          <VerifyansSubmit>Verify & Submit</VerifyansSubmit>
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
  //   height: 500px;
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
const Divide = styled.div`
  display: flex;
  align-items: center;
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
//   background: ${(props) => (props.flag ? "pink" : "black")}

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
  left: 210px;
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
  float: right;
  padding: 5px 0px;
  font: 600 14px / normal "Inter", sans-serif;
  margin-top: 10px;
  margin-bottom: 55px;
  background: rgb(83, 187, 83);
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
  font: 400 14px / normal "Inter", sans-serif;
  font-weight: 600;
  background: rgb(83, 187, 83);
  box-shadow: 0 18px 11px -5px rgb(18 34 50 / 20%);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0%;
`;
const PandisplayName = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
// const Forminput = styled.input`
//   width: 66%;
//   height: 25px;
//   margin-top: 5px;
//   padding: 0 0 9px 0;
//   display: flex;
//   align-items: center;
//   font: 400 12px / normal "Inter", sans-serif;
//   font-weight: 500;
//   border-width: 0 0 1px 0;
//   border-radius: 0;
//   border-color: rgba(18, 34, 50, 0.1);
//   position: relative;
//   z-index: 4;
//   outline: none;
//   background: transparent;
// `;
// const Forminput = styled.input`
//    border: none;
//   background-color: none;
//   outline: 0;
//   font-size: 25px;
//   width: 300px;
//   height: 30px;
// `
// const Pantext = styled.span`
//   font: 400 12px / normal "Inter", sans-serif;
//   color: #98a6b3;
//   letter-spacing: 0;
//   position: absolute;
//   left: 0;
// //   transition: all 0.3s ease;
//   &:hover {
//     color: green;
//   }
// `;
// const ActiveBlog=styled.div`
//     border-color: rgba(2, 127, 255, 0.8);
//     box-shadow: 0 15px 9px -7px rgb(2 127 255 / 30%);
//     font-weight: 600;
//     background: #ffffff url(SelectedCardPattern.d0d876e….svg) no-repeat top right;
// `
