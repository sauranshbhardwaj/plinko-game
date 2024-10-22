import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-600 py-12 text-white">
      <div className="w-[96%] max-w-screen-lg mx-auto flex flex-row justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
            className="h-8"
            alt="plinkoo Logo"
          /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Plinko Game
            </span>
          </Link>
        </div>
        <div>
          <div className="space-y-2">
            <h1 className="text-center text-lg">by Sauransh Bhardwaj</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
