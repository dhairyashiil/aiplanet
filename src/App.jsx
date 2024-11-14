// App.js
import Navbar from './Components/Navbar';
import Chat from './Components/Chat';
import InputArea from './Components/InputArea';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Chat display area */}
      <div className="flex-grow overflow-y-auto p-4">
        <Chat />
      </div>

      {/* Input area at the bottom */}
      <div className="p-4">
        <InputArea />
      </div>
    </div>
  );
}

export default App;
