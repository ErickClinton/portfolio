import { Moon, Sun } from "phosphor-react";
import { ContainerHeader,HeaderStyle,ButtonDark,BallButton,ButtonContainer,DarkMode,LightMode ,ButtonLight} from "./styles";
import { useState } from "react";
import { GlobalStyleLight } from "@/src/styles/global";



export default function Header(){

    const [theme,setTheme] = useState<boolean>(true)

    function chooseTheme(){
        theme?(
            setTheme(false)
           
        ):(setTheme(true))
        console.log(theme)
    }
    return(

        <ContainerHeader>
            <HeaderStyle>
                <h2>Bem vindos <br/>ao nosso site :)</h2>
                <h1>Portfólio</h1>
                <ButtonContainer>
                    
                    
                        {theme?(
                            
                            <ButtonDark htmlFor="checkbox">
                                <input type="checkbox" name="checkbox" id="checkbox" value="checkbox" onClick={chooseTheme}/>
                                
                                <Moon size={25}/>
                                <Sun size={25}/>
                                <DarkMode />
                            </ButtonDark>
                            
                        ):(
                            <ButtonLight>
                                <input type="checkbox" name="checkbox" id="checkbox" value="checkbox" onClick={chooseTheme}/>
                                
                                <Moon size={25}/>
                                <Sun size={25}/>
                                <LightMode/>
                                <GlobalStyleLight/>
                            </ButtonLight>
                        )}
                        
                        
                    
                </ButtonContainer>
            </HeaderStyle>
        </ContainerHeader>
    )
}