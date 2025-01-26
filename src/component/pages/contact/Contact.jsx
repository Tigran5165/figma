import Inbox from "../home/Inbox";
import Contact1 from "./Contact1";
import Menu2 from "../home/Menu2";
import Contact2 from "./Contact2";


export default function Contact() {
    return (
        <main>
            <Contact1 />
            <Contact2 />
            <Inbox />
            <Menu2 isAbout={true} />
        </main>
    )
}