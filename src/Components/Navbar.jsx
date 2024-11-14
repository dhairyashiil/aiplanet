import pdfNameIcon from "/pdfNameIcon.svg"; 
import addIcon from "/gala_add.svg";
import aiPlanetLogo from "/AI Planet Logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full drop-shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={aiPlanetLogo} className="ml-2 md:ml-10 h-6 md:h-auto" alt="AI Planet Logo" />
        </div>

        {/* Spacer and PDF Name Section */}
        <div className="flex justify-between items-center px-4 py-2 ml-auto">
        <div className="flex items-center">
          <img src={pdfNameIcon} className="" alt="PDF Name Icon" />
          <span className="ml-2 text-green-600 font-semibold">demo.pdf</span>
        </div>
      </div>

        {/* Button Section */}
        <div className="-mr-2 md:-mr-56">
          <button
            type="button"
            className="bg-white text-black border border-black rounded-lg md:px-12 px-3 py-2 text-sm font-medium text-center hover:bg-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-blue-300 dark:focus:ring-blue-800 flex items-center space-x-2 md:space-x-2 md:border md:rounded-lg"
          >
            <img src={addIcon} className="h-5 w-5 md:inline" alt="Add Icon" />
            <span className="hidden md:inline">Upload PDF</span>
          </button>
        </div>
      </div>

    </nav>
  );
}
