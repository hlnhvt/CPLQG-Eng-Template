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
import ImportantPolicySummaries from './pages/LegalDocumentSystem/ImportantPolicySummaries';
import PolicySummaryDetail from './pages/LegalDocumentSystem/PolicySummaryDetail';
import DraftLegislation from './pages/LegalDocumentSystem/DraftLegislation';
import DraftLegislationDetail from './pages/LegalDocumentSystem/DraftLegislationDetail';

import PolicyHighlights from './pages/FeaturedNews/PolicyHighlights';
import PolicyHighlightDetail from './pages/FeaturedNews/PolicyHighlightDetail';
import LegalReformNews from './pages/FeaturedNews/LegalReformNews';
import LegalReformNewsDetail from './pages/FeaturedNews/LegalReformNewsDetail';
import InternationalCooperation from './pages/FeaturedNews/InternationalCooperation';
import InternationalCooperationDetail from './pages/FeaturedNews/InternationalCooperationDetail';

import LegalSupportForForeignBusinesses from './pages/CorporateLegalSupport/LegalSupportForForeignBusinesses';
import LegalSupportDetail from './pages/CorporateLegalSupport/LegalSupportDetail';
import LegalComplianceGuide from './pages/CorporateLegalSupport/LegalComplianceGuide';
import ComplianceTopicDetail from './pages/CorporateLegalSupport/ComplianceTopicDetail';
import DocumentsAndContracts from './pages/CorporateLegalSupport/DocumentsAndContracts';
import DocumentContractDetail from './pages/CorporateLegalSupport/DocumentContractDetail';
import FAQForInternationalEnterprises from './pages/CorporateLegalSupport/FAQForInternationalEnterprises';

import PhotoLibrary from './pages/Multimedia/PhotoLibrary';
import PhotoDetail from './pages/Multimedia/PhotoDetail';
import VideoLibrary from './pages/Multimedia/VideoLibrary';
import VideoDetail from './pages/Multimedia/VideoDetail';

import AboutLegalAidSystem from './pages/LegalAssistance/AboutLegalAidSystem';
import LegalAidNews from './pages/LegalAssistance/LegalAidNews';
import LegalAidNewsDetail from './pages/LegalAssistance/LegalAidNewsDetail';
import LegalAidProviders from './pages/LegalAssistance/LegalAidProviders';
import LegalAidOrganizationDetail from './pages/LegalAssistance/LegalAidOrganizationDetail';
import LegalAidIndividualDetail from './pages/LegalAssistance/LegalAidIndividualDetail';
import LegalAidDocuments from './pages/LegalAssistance/LegalAidDocuments';
import LegalAidDocumentDetail from './pages/LegalAssistance/LegalAidDocumentDetail';

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
        <Route path="/policy-summaries" element={<ImportantPolicySummaries />} />
        <Route path="/policy-summary/:id" element={<PolicySummaryDetail />} />
        <Route path="/draft-legislation" element={<DraftLegislation />} />
        <Route path="/draft-legislation/:id" element={<DraftLegislationDetail />} />
        
        {/* Featured News Routes */}
        <Route path="/policy-highlights" element={<PolicyHighlights />} />
        <Route path="/policy-highlight/:id" element={<PolicyHighlightDetail />} />
        <Route path="/legal-reform-news" element={<LegalReformNews />} />
        <Route path="/legal-reform-news/:id" element={<LegalReformNewsDetail />} />
        <Route path="/international-cooperation" element={<InternationalCooperation />} />
        <Route path="/international-cooperation/:id" element={<InternationalCooperationDetail />} />

        {/* Corporate Legal Support Routes */}
        <Route path="/corporate-support" element={<LegalSupportForForeignBusinesses />} />
        <Route path="/corporate-support/programs/:id" element={<LegalSupportDetail />} />
        <Route path="/corporate-support/compliance" element={<LegalComplianceGuide />} />
        <Route path="/corporate-support/compliance/:id" element={<ComplianceTopicDetail />} />
        <Route path="/corporate-support/documents" element={<DocumentsAndContracts />} />
        <Route path="/corporate-support/documents/:id" element={<DocumentContractDetail />} />
        <Route path="/corporate-support/faq" element={<FAQForInternationalEnterprises />} />

        {/* Legal Assistance Routes */}
        <Route path="/legal-aid/about" element={<AboutLegalAidSystem />} />
        <Route path="/legal-aid/news" element={<LegalAidNews />} />
        <Route path="/legal-aid/news/:id" element={<LegalAidNewsDetail />} />
        <Route path="/legal-aid/providers" element={<LegalAidProviders />} />
        <Route path="/legal-aid/organizations/:id" element={<LegalAidOrganizationDetail />} />
        <Route path="/legal-aid/individuals/:id" element={<LegalAidIndividualDetail />} />
        <Route path="/legal-aid/documents" element={<LegalAidDocuments />} />
        <Route path="/legal-aid/documents/:id" element={<LegalAidDocumentDetail />} />

        {/* Multimedia Routes */}
        <Route path="/multimedia/photos" element={<PhotoLibrary />} />
        <Route path="/multimedia/photos/:id" element={<PhotoDetail />} />
        <Route path="/multimedia/videos" element={<VideoLibrary />} />
        <Route path="/multimedia/videos/:id" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
