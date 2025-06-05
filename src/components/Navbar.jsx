import { Menu } from "lucide-react";
// import img from "../assets/orange2.avif"

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="flex justify-between items-center" data-aos="fade-down">
      <div>
        <h1 className="text-5xl font-bold uppercase inline">Orange</h1>
        <i className="uppercase text-[var(--darkOrange)]">fruit</i>
        <img src="" alt="" />
      </div>
      <div className="lg:flex space-x-20 font-medium text-xl hidden">
        <a href="#">Home</a>
        <a href="#">Description</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <Menu
          className={`h-8 w-8 ${sidebar ? "mr-20" : ""}`}
          onClick={() => setSidebar(!sidebar)}
        />
      </div>
    </div>
  );
};

export default Navbar;
