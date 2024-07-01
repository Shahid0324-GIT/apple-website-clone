import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span>
            <span className="underline text-blue">other retailer </span>
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 0800-184-269
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => {
              return (
                <a
                  href="#"
                  key={link}
                  className="font-semibold text-gray text-xs"
                >
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
