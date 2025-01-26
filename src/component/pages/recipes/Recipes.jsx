import Recipes0 from "./Recipes0";
import Ingridients from "./Ingridients";
import Direction from "./Direction";
import Direction2 from "./Direction2";
import Menu2 from "../home/Menu2";



export default function Recipes() {
    return (
        <main className={'flex flex-col w-full'}>
            <Recipes0 />
            <Ingridients />
            <Direction />
            <Direction2 />
            <Menu2 isCheck={false} />
        </main>
    )
}