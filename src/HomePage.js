import React from "react";
import MyImg from "./img/MyImg.jpg";
import styled from "styled-components";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: MyImg,
      fullName: "Reetika",
      email: "reetika.singh05@gmail.com",
      Profession: "Software developer",
      Experience: "2.1 years",
    };
  }
  ChangePageEvent = () => {
      this.props.history.push(`/blogs`)
  }
  render() {
    let { avatarUrl, fullName, email, Profession, Experience } = this.state;

    return (
    <>
      <ParentComponent>
        <HeadingContent>Home Page</HeadingContent>
         <BlogButton onClick={this.ChangePageEvent}>
            Blogs
         </BlogButton>
        <CommonComponent>
          <ImgStyle
            src={avatarUrl}
            alt=""
          />
        <ProfileInfo>
          <SingleText>Full Name: {fullName}</SingleText>
          <SingleText>Email: {email}</SingleText>
          <SingleText>Profession: {Profession}</SingleText>
          <SingleText>Experience: {Experience}</SingleText>
        </ProfileInfo>
        </CommonComponent>
      </ParentComponent>
      </>
    );
  }
}

export default ProfileHeader;

const ParentComponent = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  background-color: #f9fafa;
`;
const HeadingContent = styled.h2`
  color: rgb(83, 187, 83);
  margin: 50px auto;
  text-align: center;
  font-size: 28px;
`;
const ImgStyle = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100%;
`;
const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 12px;
text-align-ast: left;
`
const SingleText = styled.div`
padding:2%;
width:100%;
`
const CommonComponent = styled.div`
    // background-color: #f9fafa;
   background: rgb(255, 255, 255);
    z-index:100;
    display:flex;
    align-items:center;
    justify-content:center;
    border: none;
    border-radius: 10px;
    // margin: 2%;
    min-height: 300px;
    padding: 0% 5%;
`
const BlogButton = styled.div`
   width:100px;
   display:flex;
   align-items:center;
   justify-content:center;
   padding: 1% 2%;
   background:rgb(83, 187, 83);
   color:#ffff;
   cursor: pointer;
   margin-bottom:2%;
   border-radius:10px;
`