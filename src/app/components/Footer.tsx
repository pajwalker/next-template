import Image from "next/image";

type Link = {
  id: number;
  title: string;
  link: string;
};

export default function Footer() {
  const address = `Pädagogische Hochschule Luzern\nZentralstrasse 18\n6003 Luzern`;

  const links: Link[] = [
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

  return (
    <footer className="bg-primary flex flex-col h-[300px] justify-center items-start px-5 sm:px-10 md:px-20">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-2/3 md:w-1/4 lg:w-1/5 mr-10">
          <Image
            src="/icons/phlu-logo-white.svg"
            className="w-full max-h-[8rem]"
            alt="phlu-logo"
            width={200}
            height={200}
          />
          <div className="flex flex-row mt-4">
            <a
              className="h-6 w-6 rounded-full bg-white flex justify-center items-center mr-4 cursor-pointer"
              href="http://www.facebook.com/phluzern"
            >
              <Image
                src="/icons/facebook.svg"
                className="h-4"
                alt="facebook-logo"
                width={24}
                height={24}
              />
            </a>
            <a
              className="h-6 w-6 rounded-full bg-white flex justify-center items-center mr-4 cursor-pointer"
              href="https://www.instagram.com/phluzern/"
            >
              <Image
                src="/icons/instagram.svg"
                className="h-4"
                alt="instagram-logo"
                width={24}
                height={24}
              />
            </a>
            <a
              className="h-6 w-6 rounded-full bg-white flex justify-center items-center mr-4 cursor-pointer"
              href="https://www.linkedin.com/company/phluzern/"
            >
              <Image
                src="/icons/linkedin.svg"
                className="h-4"
                alt="linkedin-logo"
                width={24}
                height={24}
              />
            </a>
            <a
              className="h-6 w-6 rounded-full bg-white flex justify-center items-center mr-4 cursor-pointer"
              href="https://www.tiktok.com/@phluzern/"
            >
              <Image
                src="/icons/tiktok.svg"
                className="h-4"
                alt="tiktok-logo"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:w-1/8 lg:flex flex-col justify-start">
          <h4 className="text-white font-medium">Kontakt</h4>
          <a
            href="tel:+41412030111"
            className="underline text-white underline-offset-2"
          >
            +41 41 203 01 11
          </a>
          <a
            href="mailto:info@phlu.ch"
            className="underline text-white underline-offset-2"
          >
            info@phlu.ch
          </a>
        </div>
        <div className="hidden lg:w-1/8 lg:flex flex-col justify-start">
          <h4 className="text-white font-medium">Adresse</h4>
          <p className="whitespace-pre-wrap text-white">{address}</p>
        </div>
        <div className="hidden lg:w-1/5 lg:flex flex-col justify-start">
          <h4 className="text-white font-medium">Seiten</h4>
          <div className="grid grid-cols-2 gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-white font-phlu hover:text-black duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-1/3 lg:w-1/5 flex flex-col justify-end items-end">
          <Image
            src="/icons/swissuniversities.svg"
            className="h-auto"
            alt="swissuniversitites-logo"
            width={200}
            height={200}
          />
        </div>
      </div>
      <hr className="w-full text-white h-[2px] my-4" />
      <p className="font-phlu text-white text-[14px]">
        © 2025 Pädagogische Hochschule Luzern
      </p>
    </footer>
  );
}
