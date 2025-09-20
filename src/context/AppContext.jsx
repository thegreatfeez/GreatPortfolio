import React, { createContext, useContext, useState } from 'react';
import { projectsData } from '../data/projectsData.js';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [projects] = useState(projectsData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AppContext.Provider value={{
      projects,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }}>
      {children}
    </AppContext.Provider>
  );
};