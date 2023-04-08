import { ContainerHeader,HeaderStyle,ButtonDarkLight,BallButton} from "./styles";

export default function Header(){
    return(

        <ContainerHeader>
            <HeaderStyle>
                <h2>Bem vindos <br/>ao nosso site :)</h2>
                <h1>Portfólio</h1>
                <ButtonDarkLight>
                    <BallButton/>
                </ButtonDarkLight>
            </HeaderStyle>
        </ContainerHeader>
    )
}