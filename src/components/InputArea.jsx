import { useState } from "react";
import sendMessageIcon from "/sendMessageIcon.svg";
import axios from "axios";
import PropTypes from "prop-types";
import { RotatingLines } from "react-loader-spinner";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

InputArea.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

export default function InputArea({ addMessage }) {
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const filename = localStorage.getItem("uploadedFilename") || null;

  const handleSend = async () => {
    if (!filename) {
      toast.warn("Please upload a file first.");
      return;
    }

    if (message.trim()) {
      // Display the question immediately
      addMessage(message, "Just a sec, decoding the answer...", true); // Add the question with an empty answer placeholder
      setIsLoading(true);

      // Clear the textarea immediately after sending the message
      setMessage("");

      try {
        // Make the API request for the answer
        const response = await axios.post("https://aiplanet-backend-hymp.onrender.com/ask", {
          filename: filename,
          question: message,
        });

        const answer = response.data.answer || "No answer found.";

        // Update the chat with the answer once it's received
        addMessage(message, answer, false);
        setRows(1); // Reset rows after sending

      } catch (error) {

        console.error("Error sending question:", error);
        toast.error("Got an error from the server. Please ask the question again.");
        
        // Add an error message to the chat
        addMessage(message, "Error fetching answer. Please try again later.", false); 
        
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setMessage(text);

    if (text.length > 150) {
      setRows(3);
    } else {
      setRows(1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // If Enter is pressed without Shift (for new line)
      e.preventDefault(); // Prevent default behavior (new line)
      handleSend(); // Send the message
    }
  };

  return (
    <>
      <div className="md:mx-24 p-2 mb-5 flex items-center border-t border-gray-300 border rounded-lg shadow-2xl">
        <textarea
          className="w-full px-8 focus:outline-none resize-none"
          rows={rows}
          placeholder="Send a message...."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Add the keydown event handler
        />
        <button onClick={handleSend} className="ml-2 px-5" disabled={isLoading}>
          {isLoading ? (
            <div className="">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="25"
                height="25"
                visible={true}
              />
            </div>
          ) : (
            <img src={sendMessageIcon} className="h-5 w-5 md:inline" alt="Send Icon" />
          )}
        </button>
      </div>
      
    </>
  );
}
