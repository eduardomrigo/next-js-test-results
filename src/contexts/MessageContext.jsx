import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => setMessages((prevMessages) => [...prevMessages, message]);
  const clearMessages = () => setMessages([]);

  const contextValue = { messages, addMessage, clearMessages };

  return <MessageContext.Provider value={contextValue}>{children}</MessageContext.Provider>;
};

export const useMessage = () => {
  const context = useContext(MessageContext) || 
    { messages: [], addMessage: () => {}, clearMessages: () => {} };

  return context;
};
