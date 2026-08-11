import React from "react";
import { Link } from "react-router";
import type { NavigationCardsProps } from "~/types/navigation.types";

const NavigationCards = ({ items }: NavigationCardsProps) => {
  return (
    <main className="w-full col-span-full space-y-10">
      {items.map((card) => (
        <Link
          key={card.id}
          to={card.link}
          className="flex flex-col md:flex-row justify-between items-center gap-20 border-y border-neutral-300/30 py-10"
        >
          <section className="grid place-content-center gap-10 w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extralight">
              {card.title}
            </h2>
            <p className="text-base text-black font-extralight text-justify max-w-xl">
              {card.text}
            </p>
          </section>
          <section className="w-full md:w-1/2">
            {/** 
          * export interface NavigationCard {
          id: number;
          title: string;
          link: string;
          text?: string;
          images?: string[];
         image_source: string;
          }
          * 
         */}
            <img
              srcSet={card.images?.join(", ")} // ✅ Превращаем массив в строку для srcSet
              src={card.images?.[0] || ""} // ✅ Берем первый элемент как src
              alt={card.title}
              className="w-full hidden md:block object-cover shadow-md"
              loading="lazy"
            />
          </section>
        </Link>
      ))}
    </main>
  );
};

export default NavigationCards;
