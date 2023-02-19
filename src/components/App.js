import React from "react";
import { messages, contacts } from "../data";
import ContactList from "./ContactList";
import MesaggeContainer from "./MesaggesContainer";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList />
      <main>
        <h2>Messages</h2>
        <MesaggeContainer />
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
