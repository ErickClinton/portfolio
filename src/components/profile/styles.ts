import styled from "styled-components";
import { keyframes } from "styled-components";
export const ContainerMain = styled.main`
   display: flex;
   justify-content: center;
   height: 400px;
   align-items: center;
   img {

    border-radius: 45%;
    border: 1px solid #00875F;
   }
   h1 {
    word-wrap:initial;
    font-size: 35px;
    font-weight: bold;
   }
   div:hover img{ 
    height: 120px;
    transform: scale(1);
    filter: blur(0px);
}
img:hover {
    transform: rotateX(360deg);

}
& .Erick h1 {
    direction: rtl;
}


`

export const ContainerContent = styled.div`
    display: grid;
    position: relative;
    justify-content: center;
    justify-content: space-around;
    transform-style: preserve-3d;
    height: 310px; 
    width: 300px;
    padding: 25px 8px;
    margin-bottom: 0px;
    margin: 100px;
    transform-style: preserve-3d;
    transition: all 0.5s;
    img {
        display: block;
        height: 100px;
        width: auto;
        background: red; 
        border-radius: 50%;
        filter: blur(1.55px);
    }
    & .textLink {
        color: inherit;
        text-decoration: inherit;
    }
    h2 {
        color: white;
        padding-top: 15px;
    }
    & .card {
        width: 10px
        heigt: 10px;
        perspective: 1000px;
        position: relative;
    }
    & .front {
        width: 100%
        heigt: 100%;
        transition: 700ms;
    
    }
    .card:hover .front {
        transform: rotateX(360deg);
        z-index: -1;
    }
`

