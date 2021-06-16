import React, { Component } from "react";
import styled from "styled-components"
// import { Section, Container } from "../../global"


class MediaAndPress extends Component {
    constructor(props){
        super(props)
        this.state={
            Data:[]
        }
    }
componentDidMount(){
  fetch("https://60ca0f10772a760017205339.mockapi.io/api/v1/blog")
    .then(response => response.json())
    .then(data =>
        this.setState({
            Data:data
        })
         )
    .catch(error => {
        console.log("error",error)
    });;

}
commonComponent = (img,title,desc,author,created_on, index) => {
    return <BoxStyle id={`${author}${index}`}>
            <ImgStyle
                className="avtar"
                src={img}
                alt="person1"
            />
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
}

  render() {
      let {Data} = this.state
      console.log("data",Data)
    return (
      <>
          <HeadingContent>
          Our Blog Page
          </HeadingContent>
          <ParentComponent>
          {(Data.map((item, index) => {
                return (
                     this.commonComponent(item.imgSrc,item.title,item.description,item.author,item.created_on, index)
                )
              }))}
          </ParentComponent>
      </>
    );
  }
}

export default MediaAndPress;


const ParentComponent = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
`

const BoxStyle = styled.div`
    background-color: #f9fafa;
    border:none;
    border-radius: 10px;
    -webkit-box-shadow: 0 1px 7px 0 rgb(0 0 0 / 10%);
    margin:2%;
    width: 31%;
    min-height: 300px;
    &:hover {
        z-index: 1;
        box-shadow: 0 8px 50px rgba(0,0,0,0.2);
        transform: scale(1.05);
      }
    @media (max-width: 760px) {
        width: 100%;
  }
`
const ImgStyle = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-bottom: 15px;
    margin-bottom: 0px;
    width:100%;
    height:110px;
`
const BoxContent = styled.div`
    font-size: 18px !Important;
    font-weight: bold !important;
    line-height: 1.3;
    padding:2%;
    display: flex;
    margin-left: 10px;
`
const Description = styled.div`
    font-size: 16px !Important;
    line-height: 1.3;
    padding:2%;
    margin-left: 10px;
    // padding: 0px 10px;
`
const AuthorBox = styled.div`
    margin-top:10px;
    margin-left: 10px;
    font-size: 14px;
    color:#000;
    padding: 2%;
    font-weight: 600;
`
const DateBox = styled.div`
    // margin-top:10px;
    margin-left: 10px;
    font-size: 13px;
    color:#000;
    padding: 2%;
    font-weight: 600;
`
const HeadingContent = styled.h2`
    color: rgb(83, 187, 83);
    margin: 50px auto;
    text-align: center; 
    font-size:28px;
`