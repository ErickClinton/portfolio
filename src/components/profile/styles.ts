import styled from "styled-components";

export const ContainerMain = styled.main`
   display: flex;
   justify-content: center;
   /* border: 1px solid red; */
   height: 400px; 
   /* justify-content: space-around; */
   align-items: center;
   img {
    background-color: #00875F;
    border-radius: 45%;
   }
   h2 {
    font-size: 19px;
   }
   h2:hover {
    font-size: 27px;
   }
`
export const ContainerContent = styled.div`
    display: grid;
    justify-content: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    height: 310px; 
    width: 180px;
    padding: 25px 8px;
    margin-bottom: 0px;
    margin: 100px;
    img {
        display: block;
        height: 100px;
        width: auto;
        background: red; 
        border-radius: 50%;
        filter: blur(6px)
    }
    img:hover{ 
        height: 120px;
        filter: blur(0px)
    }
    & .textLink {
        color: inherit;
        text-decoration: inherit;
    }
    h2 {
        color: white;
        padding-top: 15px;
    }
`


