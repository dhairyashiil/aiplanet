import Navbar from './components/Navbar';
import Chat from './components/Chat';
import InputArea from './components/InputArea';
import { useState } from 'react';

function App() {
  // State to store messages 
  const [messages, setMessages] = useState([
    {
      id: 1,
      question: 'Welcome to AI Planet!',
      answer: 'Upload, ask, answer. That simple.',
      isTyping: false,  
    }
  ]);

  // handle new messages
  const addMessage = (question, answer, isTyping) => {
    const newMessage = {
      id: messages.length + 1,
      question,
      answer,
      isTyping,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow overflow-y-auto p-4">
        {/* Pass the messages to the Chat component */}
        <Chat messages={messages} />
      </div>
      <div className="p-4">
        {/* Pass the addMessage function to the InputArea component */}
        <InputArea addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
