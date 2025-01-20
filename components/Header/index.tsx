"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AiOutlineDown } from 'react-icons/ai';
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavigationOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
    setActiveDropdown(null);
  }, [pathUrl]);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setNavigationOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (key: number) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/" onClick={handleLinkClick}>
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={103}
              height={30}
              className="hidden w-full dark:block"
              style={{maxWidth:"140px"}}
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
              style={{maxWidth:"140px"}}
            />
          </a>

          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          ref={navRef}
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "!visible mt-4 h-full rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-neutral-900 border dark:border-neutral-800 xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
              {menuData.map((menuItem, key) => (
                <li key={key} className="group relative">
                  {menuItem.megamenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(key)}
                        className="flex cursor-pointer items-center justify-between gap-3 menuitem relative border border-transparent px-4 py-1.5 text-sm dark:hover:text-white dark:text-white/80"
                      >
                        {menuItem.title}
                        <span>
                          <AiOutlineDown
                            className={`h-3 w-3 text-emerald-500 transition-transform duration-200 ${
                              activeDropdown === key ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>

                      <div className={`z-[1000] max-w-[800px] absolute transform -translate-x-1/2 top-full mt-1 w-full left-1/2 top-full mt-1 w-screen rounded bg-white border-zinc-200 shadow-sm border dark:bg-zinc-800 dark:border-zinc-600 transition-all duration-300 ${
                        activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="grid px-6 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {menuItem.submenu?.map((submenuItem, subIndex) => (
                            <div key={subIndex}>
                              <Link
                                href={submenuItem.path || "#"}
                                className="block p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                onClick={handleLinkClick}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-emerald-500">
                                    {submenuItem.icon}
                                  </div>
                                  <div className="font-semibold text-sm">
                                    {submenuItem.title}
                                  </div>
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {submenuItem.description}
                                </span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(key)}
                        className="flex cursor-pointer items-center justify-between gap-3 menuitem relative border border-transparent px-4 py-1.5 text-sm dark:hover:text-white dark:text-white/80"
                      >
                        {menuItem.title}
                        <AiOutlineDown
                          className={`h-3 w-3 text-emerald-500 transition-transform duration-200 ${
                            activeDropdown === key ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <ul className={`z-[1000] min-w-[200px] absolute transform -translate-x-1/2 top-full mt-1 w-full left-1/2 mt-1 rounded bg-white border-zinc-200 shadow-sm border dark:bg-zinc-800 dark:border-zinc-600 transition-all duration-300 ${
                        activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                      }`}>
                        <div className="p-3 mx-auto text-gray-900 dark:text-white gap-6">
                          {menuItem.submenu.map((item, subKey) => (
                            <li
                              key={subKey}
                              className="rounded-lg p-4 block p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                            >
                              <Link 
                                href={item.path || "#"}
                                onClick={handleLinkClick}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-emerald-500">
                                    {item.icon}
                                  </div>
                                  <div className="font-semibold text-sm">
                                    {item.title}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </div>
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      className={`menuitem relative border border-transparent px-4 py-1.5 text-sm dark:hover:text-white dark:text-white/80 ${
                        pathUrl === menuItem.path ? "active" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            <Link
              href="/support"
              className="button-border-gradient hover:button-gradient-hover relative flex items-center gap-1.5 rounded-lg px-4.5 py-2 text-sm dark:text-white shadow-button hover:shadow-none ring-1 ring-inset ring-emerald-500/20"
              onClick={handleLinkClick}
            >
              Request Audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;