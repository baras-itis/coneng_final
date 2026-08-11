import React, { useState } from "react";
import type { Menu, SubMenu, BurgerMenuProps } from "~/types/navigation.types";
import { Link } from "react-router";
import { IoMdMenu } from "react-icons/io";

export default function BurgerMenu({ items }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubmenuIdx, setOpenSubmenuIdx] = useState<number | null>(null);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    setOpenSubmenuIdx(null);
  };

  const toggleSubmenu = (id: number): void => {
    setOpenSubmenuIdx(openSubmenuIdx === id ? null : id);
  };
  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed right-4 top-6 z-50 flex flex-col justify-between items-center w-6 h-4 bg-transparent border-none cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        <IoMdMenu size={32} />
      </button>

      <div
        className={`fixed inset-0 w-full h-screen  bg-white z-40 pt-28 px-6 md:px-11 transition-transform duration-300 ease-in-out  select-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          {items &&
            items.map((item: Menu) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isSubmenuOpen = openSubmenuIdx === item.id;

              return (
                <div key={item.id} className="border-b border-neutral-200 pb-2">
                  <div className="flex justify-between items-center w-full">
                    <Link
                      to={item.link}
                      onClick={toggleMenu}
                      className="text-xl md:text-2xl font-light py-2 block w-full tracking-wider text-neutral-950 transition-colors duration-200"
                    >
                      {item.title}
                    </Link>

                    {hasSubmenu && (
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className="p-3 focus:outline-none text-neutral-500 transition-transform duration-300"
                        aria-expanded={isSubmenuOpen}
                        style={{
                          transform: isSubmenuOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      >
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            d="M1 1l6 6 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {hasSubmenu && (
                    <div
                      className={`grid transition-all duration-300 ease-in-out pl-4 gap-y-1 ${
                        isSubmenuOpen
                          ? "grid-rows-[1fr] opacity-100 mt-2 pb-2"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col gap-y-1">
                        {item.submenu!.map((sub: SubMenu) => (
                          <Link
                            key={sub.id}
                            to={sub.link}
                            onClick={toggleMenu}
                            className="text-sm md:text-base text-neutral-600 hover:text-neutral-950 py-1.5 tracking-wide transition-colors duration-200 normal-case"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </nav>
      </div>
    </>
  );
}
