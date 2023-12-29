import clsx from "clsx";
import Title from "../../components/Title";
import { pricesList } from "../../constants";

const Prices = () => {
  return (
    <section id="services" className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-12">
        {pricesList.map((elem, i) => {
          return (
            <div
              key={i}
              className={clsx("p-4 sm:p-6 border-whiteGray border flex flex-col justify-between", {
                ["rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"]: i === 0,
                ["rounded-none sm:rounded-tr-lg"]: i === 1,
                ["rounded-none md:rounded-bl-lg"]: i === 2,
                ["rounded-br-lg rounded-bl-lg md:rounded-bl-none"]: i === 3,
              })}
            >
              <Title className="!text-[35px]" text={elem.city} />
              <ul>
                {elem.list.map((city, e) => {
                  return <li key={e} className="text-whiteGray text-[18px] sm:text-[21px] flex items-center justify-between">
                    <h4>{city.region}</h4>
                    <h4>{city.price} TMT</h4>
                  </li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Prices;
