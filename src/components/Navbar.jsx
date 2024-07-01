import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            return (
              <div
                className="px-5 cursor-pointer text-gray text-sm hover:text-white transition-all"
                key={nav}
              >
                {nav}
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm: justify-end max-sm:flex-1">
          <img
            src={searchImg}
            className="cursor-pointer"
            alt="search"
            width={18}
            height={18}
          />
          <img
            src={bagImg}
            className="cursor-pointer"
            alt="bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
