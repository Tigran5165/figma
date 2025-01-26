import Ab from "./Ab";
import Inbox from "../home/Inbox";
import Menu2 from "../home/Menu2";

export default function AboutUs() {
    return (
        <main>
            <Ab />
            <Inbox />
            <Menu2  isAbout={true}/>


        </main>
    )
}