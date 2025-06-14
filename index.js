import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Portfolio from './Pages/Portfolio';
import TheSpace from './Pages/TheSpace';
import DesignStory from './Pages/DesignStory';
import SiteAnalysis from './Pages/SiteAnalysis';
import Contact from './Pages/Contact';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="the-space" element={<TheSpace />} />
          <Route path="design-story" element={<DesignStory />} />
          <Route path="site-analysis" element={<SiteAnalysis />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
