import Title from "./components/Title";
import Contact from "./sections/Contact";

import './i18n'
import Service from "./sections/Service";
import { useTranslation } from "react-i18next";
import { locales } from "./constants";
import clsx from "clsx";
import Prices from "./sections/Prices";

function App() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <section className="container mx-auto px-4">
        <nav className="py-8 flex items-center justify-between">
          <img src="/images/logo.png" className="w-[170px]" alt="" />
          <ul className="flex items-center font-[400] text-[18px] gap-x-3 sm:gap-x-6 text-whiteGray">
            {Object.keys(locales).map((locale) => {
              return (
                <li onClick={() => i18n.changeLanguage(locale)} className={clsx('cursor-pointer', {
                  ['pointer-events-none locale']: i18n.resolvedLanguage === locale
                  // @ts-ignore
                })} key={locale}>{locales[locale].title}</li>
              )
            })}

          </ul>
        </nav>
        <Title text={t('headertitle')} />
      </section>
      <Prices />
      <Service />
      <Contact />
    </>
  );
}

export default App;
