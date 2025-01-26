import MainPhoto from "./MainPhoto";
import Category from "./Category";
import Menu from "./Menu";
import Lesson from "./Lesson";
import Instagram from "./Instagram";
import Menu2 from "./Menu2";
import Inbox from "./Inbox";

export default function Home() {
    return (
        <main className={'flex flex-col w-full justify-center'}>
            <MainPhoto/>
            <Category/>
            <Menu/>
            <Lesson/>
            <Instagram/>
            <Menu2 isCheck={true} />
            <Inbox/>
        </main>
    )
}