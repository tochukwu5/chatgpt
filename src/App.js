import { useState } from "react";
import ContainerMsg from "./components/ContainerMsg";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";

function App() {

const [message, SetMessage] = useState([])
  function handlesubmit(text){
    
  if(text.trim()){
      
 const query = document.getElementById('query').value
 SetMessage(query)
 console.log(message)
    }else{
        alert('enter a text first')
    }





  }

  return (
    <div className="App relative bg-slate-900 h-full pb-4">
      <Navbar />
      <div className="w-11/12 md:p-10 mt-20">
      <ContainerMsg />

      </div>
     <UserInput handlesubmit={handlesubmit} />
    </div>
  );
}

export default App;
