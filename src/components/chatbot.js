import React from 'react';
import Chatbot from 'react-chatbot-kit'
import { createChatBotMessage } from "react-chatbot-kit";
// import './App.css';


// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
  }
}

// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
}

// Config starter code

const config = {
  initialMessages: [createChatBotMessage(`Hey there, try asking me something! I'm still learning but I'll try my best to answer.`)]
}


export const Bot = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}