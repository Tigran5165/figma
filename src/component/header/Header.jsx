import { routesArray } from "../../entities/routesArray";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Header() {
    const { t } = useTranslation()
    return (
        <header className={'flex flex-row justify-between items-center p-[20px]'}>
            <img src="/images/image1.svg" alt="" />
            <ul className={'flex justify-center items-center gap-[20px] font-inter'}>
                {
                    routesArray.map(route => (
                        <Link key={(route).id} to={route.path}>
                            <span> {t(route.name)}</span>
                        </Link>
                    ))
                }
            </ul>

            <LanguageSwitcher/>
        </header>
    )
}