
import icon from "/images/icon.png";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">

        <a href="#home" className="flex items-center gap-2">
          <img src={icon} alt="Nexcent" className="h-8 w-8" />
          <span className="text-2xl font-bold">Nexcent</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm hover:text-green-600">Home</a>
          <a href="#feature" className="text-sm hover:text-green-600">Features</a>
          <a href="#community" className="text-sm hover:text-green-600">Community</a>
          <a href="#blog" className="text-sm hover:text-green-600">Blog</a>
          <a href="#pricing" className="text-sm hover:text-green-600">Pricing</a>
        </div>

        <a href="#contact" className="rounded bg-green-500 px-5 py-3 text-sm text-white hover:bg-green-700">
          Register Now →
        </a>

      </nav>
    </div>
  );
}

export default Navbar;
