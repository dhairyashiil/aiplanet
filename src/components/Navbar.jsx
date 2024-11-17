import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pdfNameIcon from "/pdfNameIcon.svg";
import addIcon from "/gala_add.svg";
import aiPlanetLogo from "/AI Planet Logo.svg";

export default function Navbar() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("https://aiplanet-backend-hymp.onrender.com/upload", formData); 

      localStorage.removeItem("uploadedFilename");
      localStorage.setItem("uploadedFilename", file.name);
      setFile(file);

      toast.success(`${file.name} uploaded successfully!`);
    } catch (error) {
      toast.error("Error uploading file. Please try again.");
      console.error("Upload Error:", error);
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full drop-shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              src={aiPlanetLogo}
              className="ml-2 md:ml-10 h-6 md:h-auto"
              alt="AI Planet Logo"
            />
          </div>

          <div className="flex justify-between items-center px-4 py-2 ml-auto">
            <div className="flex items-center">
              <img src={pdfNameIcon} alt="PDF Name Icon" />
              <span className="ml-2 text-green-600 font-semibold">
                {file ? file.name : "No file selected"}
              </span>
            </div>
          </div>

          <div className="-mr-2 md:-mr-56">
            <button
              type="button"
              className="bg-white text-black border border-black rounded-lg md:px-12 px-3 py-2 text-sm font-medium text-center hover:bg-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-blue-300 dark:focus:ring-blue-800 flex items-center space-x-2 md:space-x-2 md:border md:rounded-lg"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <img src={addIcon} className="h-5 w-5 md:inline" alt="Add Icon" />
              <span className="hidden md:inline">Upload PDF</span>
            </button>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </nav>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
