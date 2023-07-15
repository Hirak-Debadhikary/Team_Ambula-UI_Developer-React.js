import React, { useState, createContext } from "react";

// Create Context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Sidebar state
  const [isOpen, setIsOpen] = useState(false);

  // Close Sidebar function
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
