import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full text-inherit flex flex-row flex-nowrap justify-between items-center content-padding py-5">
      <div className="text-2xl font-bold text-[#E50914]">CoreFlix</div>
      <div>
        <Link to="/login" type="button" className="btn-primary">
          Sign In
        </Link>
      </div>
    </nav>
  );
};
