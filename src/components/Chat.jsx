import AiPlanetSmallLogo from "/Ai-planet-small-logo.svg";
import userDp from "/userDp.svg";
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      isTyping: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default function Chat({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  return (
    <div className="mt-20 md:m-16">
      {messages.map((message) => (
        <div key={message.id} className="rounded-lg md:p-3 md:m-3 mb-10">
          {/* User's Question */}
          <div className="p-3 md:m-3 mb-5 flex items-start space-x-4">
            <img src={userDp} className="h-6 w-6" alt="User Avatar" />
            <div className="flex-1">{message.question}</div>
          </div>

          {/* Answer */}
          <div className="p-3 md:m-3 flex items-start space-x-4">
            <img src={AiPlanetSmallLogo} className="h-6 w-6" alt="AI Avatar" />
            <div className="flex-1">
              {message.isTyping ? (
                <div className="typing-indicator">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              ) : (
                message.answer
              )}
            </div>
          </div>
        </div>
      ))}
      {/* Chat end reference for auto-scroll */}
      <div ref={chatEndRef} />
    </div>
  );
}
