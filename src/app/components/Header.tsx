"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Studium",
    link: "/studium",
  },
  {
    id: 3,
    title: "Weiterbildung",
    link: "/Weiterbildung",
    sublinks: [
      {
        id: 1,
        title: "CAS",
        link: "/Weiterbildung/CAS",
      },
      {
        id: 2,
        title: "DAS",
        link: "/Weiterbildung/DAS",
      },
      {
        id: 3,
        title: "MAS",
        link: "/Weiterbildung/MAS",
      },
    ],
  },
  {
    id: 4,
    title: "Forschung",
    link: "/Forschung",
  },
  {
    id: 5,
    title: "Über uns",
    link: "/Über-uns",
  },
];

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [didScroll, setDidScroll] = useState(false);
  const [changedRoute, setChangedRoute] = useState(false);
  const navbarHeight = 72;
  const delta = 5;

  const changeState = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goTo = (route) => {
    if (isMenuOpen) changeState();
    router.push(route);
  };

  const hasScrolled = () => {
    const st = window.scrollY;
    const header = document.querySelector("header");

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (header) {
      if (st > lastScrollTop && st > navbarHeight && !changedRoute) {
        header.style.transition = "top 0.5s ease-out 0s";
        header.style.top = `-${navbarHeight}px`;
      } else {
        if (
          st + window.innerHeight < document.body.clientHeight ||
          changedRoute
        ) {
          header.style.transition = "top 1s cubic-bezier(0, 0.97, 0.58, 1) 0s";
          header.style.top = "0px";
        }
      }
    }

    setLastScrollTop(st);
  };

  useEffect(() => {
    const handleScroll = () => {
      setDidScroll(true);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      if (didScroll) {
        hasScrolled();
        setDidScroll(false);
        setChangedRoute(false);
      }
    }, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [didScroll, lastScrollTop, changedRoute]);

  useEffect(() => {
    setChangedRoute(true);
    hasScrolled();
  }, [router.asPath]);

  return (
    <header
      className={`bg-white w-full z-20 top-0 shadow-lg ${
        isMenuOpen ? "" : "fixed"
      }`}
    >
      <div className="flex flex-wrap justify-between h-[72px] normal-spacing py-4 items-center">
        <div onClick={() => goTo("/")} className="cursor-pointer">
          <Image
            src="/icons/phlu-logo.svg"
            className="h-10"
            alt="phlu-logo"
            height={100}
            width={100}
          />
        </div>
        <div className="sm:hidden flex" onClick={changeState}>
          <Image
            src="/icons/menu.svg"
            className="h-6"
            alt="menu-icon"
            height={24}
            width={24}
          />
        </div>
        <div className="sm:flex hidden flex-row items-center">
          {links.map((link) => (
            <div className="mx-4" key={link.id}>
                <Link
                    href={link.link}
                    className="inline-block text-[0] cursor-pointer"
                >
                    <p className="text-primary font-phlu font-semibold text-lg hover:text-black duration-300">
                    {link.title}
                    </p>
                </Link>
            </div>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex fixed top-0 left-0 w-screen h-full bg-white duration-400 z-40 p-5 overflow-x-hidden">
          <div
            className="absolute top-[16px] right-[20px]"
            onClick={changeState}
          >
            <Image
              src="/icons/close.svg"
              className="h-8"
              alt="close-icon"
              height={24}
              width={24}
            />
          </div>

          <div
            onClick={() => goTo("/")}
            className="absolute top-[16px] left-[20px] cursor-pointer"
          >
            <Image
              src="/icons/phlu-logo.svg"
              className="h-10"
              alt="phlu-logo"
              height={100}
              width={100}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-col">
              {links.map((link) => (
                <div className="my-4" key={link.id}>
                  <div
                    onClick={() => goTo(link.link)}
                    className="inline-block text-[0] cursor-pointer"
                  >
                    <p className="text-primary font-phlu font-semibold text-[27px] hover:text-black duration-300">
                      {link.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
