import React, { useState, useEffect } from 'react';
import { Page } from './types.ts';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import LandingPage from './components/LandingPage.tsx';
import RegistrationPage from './components/RegistrationPage.tsx';
import NavBar from './components/NavBar.tsx';
import AboutPage from './components/AboutPage.tsx';
import EventDetailsPage from './components/EventDetailsPage.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const navigateTo = (page: Page) => {
    if (page === currentPage) return;
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsFadingOut(false);
    }, 300); // Match transition duration
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case Page.Landing:
        return <LandingPage navigateToRegistration={() => navigateTo(Page.Registration)} navigateToEventDetails={() => navigateTo(Page.EventDetails)} />;
      case Page.Registration:
        // Pass navigateTo function to allow programmatic navigation back to landing after success
        // This is not strictly needed if we remove the button, but good practice
        return <RegistrationPage navigateToLanding={() => navigateTo(Page.Landing)} />;
      case Page.EventDetails:
        return <EventDetailsPage />;
      case Page.About:
        return <AboutPage />;
      default:
        return <LandingPage navigateToRegistration={() => navigateTo(Page.Registration)} navigateToEventDetails={() => navigateTo(Page.EventDetails)} />;
    }
  };

  return (
    <main className="relative isolate text-white min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <NavBar currentPage={currentPage} navigateTo={navigateTo} />
      <div className="relative z-10 pt-20"> {/* Add padding for fixed navbar */}
        <div className={`transition-opacity duration-300 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
          {renderCurrentPage()}
        </div>
      </div>
    </main>
  );
};

export default App;