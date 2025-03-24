import { About } from "../components/About";
import { Header } from "../components/Header";
import { Swipper } from "../components/Swipper";
import { Works } from "../components/Works";

export function Home(){

    return(

        <div>
            <Header />
            <Works />
            <Swipper/>
            <About />

        </div>
    );
}