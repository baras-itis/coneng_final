import { Link } from "react-router";
import { useState } from "react";
import type { Menu, SubMenu, BurgerMenuProps } from "~/types/navigation.types";
import BurgerMenu from "./BurgerMenu";
export default function NavBar() {
  const menu: Menu[] = [
    {
      id: 1,
      title: "Services",
      link: "/services",
      submenu: [
        { id: 101, title: "Design", link: "services/design" },
        {
          id: 102,
          title: "Preconstruction",
          link: "services/preconstruction",
        },
        { id: 103, title: "Construction", link: "services/construction" },
        { id: 104, title: "Commissioning", link: "services/commissioning" },
        { id: 105, title: "Data & modeling", link: "services/modeling" },
        {
          id: 106,
          title: "Operations & Maintenance",
          link: "services/operations",
        },
      ],
    },
    {
      id: 2,
      title: "Markets",
      link: "/markets",
      submenu: [
        { id: 201, title: "Automotive", link: "/markets" },
        {
          id: 202,
          title: "Industrial / Manufacturing",
          link: "markets/industrial-manufacturing",
        },
        {
          id: 203,
          title: "General Building",
          link: "markets/general-building",
        },
      ],
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
      submenu: [
        { id: 301, title: "Ongoing", link: "projects/ongoing" },
        { id: 302, title: "Completed", link: "projects/completed" },
      ],
    },
    {
      id: 4,
      title: "Self Perform",
      link: "/self-perform",
      submenu: [
        { id: 401, title: "Earthworks", link: "self-perform/earthworks" },
        { id: 402, title: "Concrete", link: "self-perform/concrete" },
        {
          id: 403,
          title: "Structural & Miscellaneous steel",
          link: "sel-perform/structural",
        },
        { id: 404, title: "MEP I Engineering", link: "sel-perform/mep" },
        { id: 405, title: "Interiors", link: "sel-perform/interiors" },
        { id: 406, title: "Facade cladding", link: "sel-perform/cladding" },
      ],
    },
    {
      id: 5,
      title: "About us",
      link: "/about",
      submenu: [
        { id: 501, title: "Why Us", link: "/about" },
        { id: 502, title: "Mission & Values", link: "about/mission" },
        { id: 503, title: "Our commitment", link: "about/commitment" },
        { id: 504, title: "Our history", link: "about/history" },
      ],
    },
    { id: 6, title: "Locations", link: "/locations" },
    { id: 7, title: "Contact", link: "/contact" },
  ];
  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(null);

  return (
    <nav className="col-span-full navbar relative top-0 flex py-5   place-content-between place-items-center font-light bg-white">
      <Link to="/">
        <img
          src="/logo/logo-1200.webp"
          alt="Coneng"
          className="max-h-10 md:max-h-12 lg:max-h-14 w-auto object-cover"
        />
      </Link>
      <div className="hidden lg:grid w-auto lg:grid-cols-auto grid-flow-col 2xl:w-lw">
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              onMouseEnter={() => {
                setActiveItemIdx(item.id);
              }}
              onMouseLeave={() => {
                setActiveItemIdx(null);
              }}
              className="relative"
            >
              <Link
                to={item.link}
                className=" hover:bg-coneng  grid tracking-wide  duration-300     transition box-content hover:text-white py-5 px-3"
              >
                {item.title}
              </Link>

              {activeItemIdx === item.id && item.submenu && (
                <div className="absolute top-full left-0 z-10 bg-white flex flex-col shadow-lg border border-gray-200 min-w-65">
                  {item.submenu.map((item) => {
                    return (
                      <Link
                        to={item.link}
                        key={item.id}
                        className="    hover:bg-coneng  hover:text-white duration-300   transition px-5 py-3 text-gray-800"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="lg:hidden flex items-center">
        <BurgerMenu items={menu} />
      </div>
    </nav>
  );
}
