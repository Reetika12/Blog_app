import React, { Component,Suspense,lazy } from "react";
import styled from "styled-components";

class MediaAndPress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm:''
    };
  }
  componentDidMount() {
    fetch("https://60ca0f10772a760017205339.mockapi.io/api/v1/blog")
      .then((response) => response.json())
      .then((AllData) =>
        this.setState({
          data: [...AllData],
        })
      )
      .catch((error) => {
        console.log("error", error);
      });
  }
  commonComponent = (img, title, desc, author, created_on, index) => {
    return (
      <BoxStyle id={`${author}${index}`}>
        <ImgStyle className="avtar" src={img} alt="person1" />
        <BoxContent>
          <span>{title}</span>
        </BoxContent>
        <Description>
          <span>{desc}</span>
        </Description>
        <AuthorBox>
          <span>{author}</span>
        </AuthorBox>
        <DateBox>
          <span>{created_on}</span>
        </DateBox>
      </BoxStyle>
    );
  };
  ChangePageEvent = () => {
    this.props.history.push(`/`);
  };
  
  EventBlogNameChange = (e) =>{
      var searchTerm=e.target.value
      this.setState({
        searchTerm: searchTerm
      })
  }
  render() {
    let { data,searchTerm} = this.state;
    return (
      <>
        <BlogBack>
          <BlogButton onClick={this.ChangePageEvent}>Back</BlogButton>
          <HeadingContent>Our Blog Page</HeadingContent>
          <InputBox type="text" placeholder="SearchByName..." onChange={this.EventBlogNameChange}/>
        </BlogBack>
        <ParentComponent>
        {searchTerm.length>1 ?
          (data.map((item, index) => {
            if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
            {
                return this.commonComponent(
                    item.imgSrc,
                    item.title,
                    item.description,
                    item.author,
                    item.created_on,
                    index
                  );
            }
           
          })):
          (data.map((item, index) => {
            return this.commonComponent(
              item.imgSrc,
              item.title,
              item.description,
              item.author,
              item.created_on,
              index
            );
          }))
        }
        
        </ParentComponent>
      </>
    );
  }
}

export default MediaAndPress;

const ParentComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const BoxStyle = styled.div`
  background-color: #f9fafa;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 0 1px 7px 0 rgb(0 0 0 / 10%);
  margin: 2%;
  width: 31%;
  min-height: 300px;
  &:hover {
    z-index: 1;
    box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`;
const ImgStyle = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-bottom: 15px;
  margin-bottom: 0px;
  width: 100%;
  height: 110px;
`;
const BoxContent = styled.div`
  font-size: 18px !important;
  font-weight: bold !important;
  line-height: 1.3;
  padding: 2%;
  display: flex;
  margin-left: 10px;
`;
const Description = styled.div`
  font-size: 16px !important;
  line-height: 1.3;
  padding: 2%;
  margin-left: 10px;
`;
const AuthorBox = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  color: #000;
  padding: 2%;
  font-weight: 600;
`;
const DateBox = styled.div`
  // margin-top:10px;
  margin-left: 10px;
  font-size: 13px;
  color: #000;
  padding: 2%;
  font-weight: 600;
`;
const HeadingContent = styled.div`
  color: rgb(83, 187, 83);
  font-size: 28px;
  font-weight: 900;
  margin-left: 8%;
`;
const BlogButton = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1% 2%;
  background: rgb(83, 187, 83);
  color: #ffff;
  cursor: pointer;
  //    margin-bottom:2%;
  border-radius: 10px;
`;
const BlogBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 3% 1%;
`;
const InputBox= styled.input`
//  margin-top:20px;
    width:300px;
    height:30px;
    padding-left:10px;
`