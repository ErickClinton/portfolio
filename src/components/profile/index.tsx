import Link from "next/link";
import { ContainerMain, ContainerContent } from "./styles";

export default function profile() {
    return (
        <ContainerMain>

            <ContainerContent className="Erick">
                <div className="card">
                <div className="front"><Link href={'/'}><img src="https://img.quizur.com/f/img5d570a0a507dc0.74507285.png?lastEdited=1565985298" alt="FOTO ERICK" /></Link></div>
                </div>
            <Link className="textLink" href={'/'}><h1>Erick Dos Clinton</h1></Link>
            <h4>Front-end Developer</h4>
            <h6>Itaú Unibanco</h6>
            </ContainerContent>

            <div className="imgs">
        <img className="Linux" src="https://imagepng.org/wp-content/uploads/2017/06/pinguim-linux-tux-2-871x1024.png" alt="FOTO" width={100} height={100} />
            </div>

        <ContainerContent className="Renan">
        <div className="card">
                <div className="front"><Link href={'/'}><img src="https://img.quizur.com/f/img5d570a0a507dc0.74507285.png?lastEdited=1565985298" alt="FOTO ERICK" /></Link></div>
                
                </div>
            <Link className="textLink" href={'/'}><h1>Renan dos Santos</h1></Link>
            <h4>Front-end Developer</h4>
            <h6>Itaú Unibanco</h6>
        </ContainerContent>

        </ContainerMain>
    )
}

function useState<T>(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
