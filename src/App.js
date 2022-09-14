import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import { Tabs } from './components/Tabs';
import { MainMenu } from './components/MainMenu';
import { Dashboard } from './pages/Dashboard';
import { AudITees } from './pages/Auditees';
import { AudITItems } from './pages/Audititems';
import { Categories } from './pages/Categories';
import { Templates } from './pages/Templates';
import { TabsContextProvider } from './misc/tabsContext';

export default function App() {
  return (
    <TabsContextProvider>
      <div style={{width: '100%', height: 128, background: '#9f9fff', padding: '32px 0 0 48px', fontSize: 48, fontWeight: 700, boxSizing: 'border-box'}}>
          Page Header
      </div>  
      <Tabs />
      <div style={{display: 'flex', height:'calc(100% - (128px + 64px)'}}>
        <MainMenu />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/auditees/*" element={<AudITees />} />
          <Route path="/audit-items" element={<AudITItems />} />
          <Route path="/categories/*" element={<Categories />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </div>
    </TabsContextProvider>
  );
}
