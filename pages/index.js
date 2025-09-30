import Header from '../components/header';
import Footer from '../components/footer';
import TabsGenerator from '../components/tabs';
import OutputBox from '../components/output';
import { useState } from 'react';

export default function Home() {
  const studentNumber = "12345678";
  const studentName = "VincentRW";
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { heading: "Step 1", content: "First step" },
    { heading: "Step 2", content: "Second step" }
  ]);

  return (
    <div>
      <Header studentNumber={studentNumber} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ padding: 32 }}>
        <div style={{ display: 'flex', gap: 32 }}>
          <TabsGenerator tabs={tabs} setTabs={setTabs} />
          <div>
            <h3>Output</h3>
            <OutputBox tabs={tabs} />
          </div>
        </div>
      </main>
      <Footer name={studentName} studentNumber={studentNumber} />
    </div>
  );
}