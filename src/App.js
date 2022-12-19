import { useState } from "react";
import MessageAndReaction from "./components/MessageAndReaction";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";

function App() {
  const [messages, setMessages] = useState([]);

  function handlesubmit(text){
    const trimmedText = text.trim();

    if(trimmedText.length > 0){
      const newMessages = [...messages];
      newMessages.push(text);
      setMessages(newMessages);
    } else{
        alert('enter a text first')
    }
  }

  return (
    <div className="App relative bg-slate-900 h-full pb-4">
      <Navbar />
      <div className="w-11/12 md:p-10 mt-20">
        {messages.map((message, i) => <MessageAndReaction key={i} message={message} />)}
      </div>
     <UserInput handlesubmit={handlesubmit} />
    </div>
  );
}

export default App;
