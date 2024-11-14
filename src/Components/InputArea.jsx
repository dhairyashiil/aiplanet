import { useState } from 'react';
import sendMessageIcon from "/sendMessageIcon.svg";

export default function InputArea() {
    const [message, setMessage] = useState('');
    const [rows, setRows] = useState(1);

    const handleSend = () => {
        if (message.trim()) {
            console.log('Sent message:', message);
            setMessage('');
            setRows(1); // Reset rows after sending
        }
    };

    const handleChange = (e) => {
        const text = e.target.value;
        setMessage(text);

        // Adjust rows based on text length (e.g., 1.5x the base size if text length exceeds 50)
        if (text.length > 150) {
            setRows(3); // Expand to 3 rows
        } else {
            setRows(1); // Collapse to 1 row when text is short
        }
    };

    return (
        <div className="md:mx-24 p-2 mb-5 flex items-center border-t border-gray-300 border rounded-lg shadow-2xl ">
            <textarea
                className="w-full px-8 focus:outline-none resize-none"
                rows={rows}
                placeholder="Send a message..."
                value={message}
                onChange={handleChange}
            />
            <button onClick={handleSend} className="ml-2 px-5">
                <img src={sendMessageIcon} className="h-5 w-5 md:inline" alt="Add Icon" />
            </button>
        </div>
    );
}
