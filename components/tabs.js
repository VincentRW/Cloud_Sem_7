import { useEffect, useState } from 'react';

export default function TabsGenerator() {
  const [tabs, setTabs] = useState([{ heading: 'Step 1', content: '' }]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('tabs');
    if (stored) setTabs(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs));
  }, [tabs]);

  const addTab = () => {
    if (tabs.length < 15)
      setTabs([...tabs, { heading: `Step ${tabs.length + 1}`, content: '' }]);
  };
  const removeTab = (i) => {
    if (tabs.length > 1) {
      const newTabs = tabs.filter((_, idx) => idx !== i);
      setTabs(newTabs);
      setSelected(Math.max(0, selected - 1));
    }
  };
  const updateTab = (i, heading, content) => {
    const newTabs = [...tabs];
    newTabs[i] = { heading, content };
    setTabs(newTabs);
  };

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <h3>Tabs Headers: <button onClick={addTab}>[+]</button></h3>
        <ul>
          {tabs.map((tab, i) => (
            <li key={i}>
              <button
                style={{
                  fontWeight: selected === i ? 'bold' : 'normal',
                  background: selected === i ? '#eee' : 'transparent',
                  border: '1px solid #333',
                  padding: '4px 10px',
                  marginBottom: '2px'
                }}
                onClick={() => setSelected(i)}
                aria-current={selected === i}
              >
                {tab.heading}
              </button>
              <button onClick={() => removeTab(i)} aria-label="Remove Tab" style={{ marginLeft: 5 }}>[-]</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tabs Content</h3>
        <input
          type="text"
          value={tabs[selected].heading}
          onChange={e => updateTab(selected, e.target.value, tabs[selected].content)}
          aria-label="Tab Heading"
          style={{ marginBottom: 8, display: 'block', width: '200px' }}
        />
        <textarea
          value={tabs[selected].content}
          onChange={e => updateTab(selected, tabs[selected].heading, e.target.value)}
          aria-label="Tab Content"
          rows={5}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
}