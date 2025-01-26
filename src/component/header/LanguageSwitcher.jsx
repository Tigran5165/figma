import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const lngs = {
        en: { nativeName: 'English', flag: '/images/USA-flag.webp' },
        am: { nativeName: 'English', flag: '/images/Armenia-flag.webp' }
    }
    const { i18n } = useTranslation();
    return (
        <div>
            {Object.keys(lngs).map((lng) => (
                <button
                    key={lng}
                    onClick={() => i18n.changeLanguage(lng)}
                    className={`w-[35px] m-[3px] p-1 ${i18n.resolvedLanguage === lng ? 'bg-red rounded' : ''
                        }`}
                >
                    <img src={lngs[lng].flag} alt="" />
                </button>
            )
        )
            }
        </div >
    )
}
