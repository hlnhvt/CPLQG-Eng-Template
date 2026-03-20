import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Introduction Pages
import About from './pages/Introduction/About';
import OpenLetter from './pages/Introduction/OpenLetter';
import Functions from './pages/Introduction/Functions';
import Vision from './pages/Introduction/Vision';
import UserGuide from './pages/Introduction/UserGuide';
import Contact from './pages/Introduction/Contact';
import LinkedWebsites from './pages/Introduction/LinkedWebsites';
import SearchContent from './pages/Introduction/SearchContent';
import LegalSystem from './pages/Introduction/LegalSystem';
import LegalFAQ from './pages/Introduction/LegalFAQ';

// Notification Routes
import SubscribePage from './pages/Notifications/SubscribePage';
import UnsubscribePage from './pages/Notifications/UnsubscribePage';

import LegalDocumentSystemPage from './pages/LegalDocumentSystem';
import DocumentDetail from './pages/LegalDocumentSystem/DocumentDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Introduction Routes */}
        <Route path="/introduction/about" element={<About />} />
        <Route path="/introduction/open-letter" element={<OpenLetter />} />
        <Route path="/introduction/functions-and-tasks" element={<Functions />} />
        <Route path="/introduction/vision-and-development" element={<Vision />} />
        <Route path="/introduction/user-guide" element={<UserGuide />} />
        <Route path="/introduction/contact-information" element={<Contact />} />
        <Route path="/introduction/linked-websites" element={<LinkedWebsites />} />
        <Route path="/introduction/search-content" element={<SearchContent />} />
        <Route path="/introduction/vietnamese-legal-system" element={<LegalSystem />} />
        <Route path="/introduction/legal-faq" element={<LegalFAQ />} />

        {/* Notification Routes */}
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />

        {/* Legal Document System Routes */}
        <Route path="/legal-document-system" element={<LegalDocumentSystemPage />} />
        <Route path="/legal-document/:id" element={<DocumentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
