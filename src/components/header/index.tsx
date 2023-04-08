import { Moon, Sun } from "phosphor-react";
import { ContainerHeader,HeaderStyle,ButtonDarkLight,BallButton,ButtonContainer} from "./styles";



export default function Header(){
    return(

        <ContainerHeader>
            <HeaderStyle>
                <h2>Bem vindos <br/>ao nosso site :)</h2>
                <h1>Portfólio</h1>
                <ButtonContainer>
                    <input type="checkbox" name="checkbox" id="checkbox" value="checkbox" />
                    <ButtonDarkLight htmlFor="checkbox">
                    
                        <Sun size={25}/>
                        <Moon size={25}/>
                        <BallButton/>
                    </ButtonDarkLight>
                </ButtonContainer>
            </HeaderStyle>
        </ContainerHeader>
    )
}