import styled from "styled-components";


export const ContainerHeader = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    border-bottom: 1px solid ${(props) => props.theme['green-300']};

`

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
    flex-wrap: wrap;
    
    
`
export const ButtonDarkLight = styled.label`
    display: flex;
    background: ${(props) => props.theme['white']};
    width: 4rem;
    border-radius: 2rem;
    padding: 0.3rem;
    cursor: pointer;
    transition: background-color 0.5s;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-900']};
`
export const BallButton = styled.div`
    background-color: ${(props) => props.theme['gray-900']};
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    transition: 0.5s;
    position: absolute;
`

export const ButtonContainer = styled.div`
    display: flex;
    input{
        opacity: 0;
        position: absolute;
    }
`