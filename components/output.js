export default function OutputBox({ tabs }) {
  const generateHTML = () => {
    // Only inline CSS
    let buttons = tabs.map((tab, i) =>
      `<button onclick="showTab(${i})" style='width:100%;margin-bottom:2px;'>${tab.heading}</button>`
    ).join('\n');
    let contents = tabs.map(tab => JSON.stringify(tab.content));
    return `<div style="display:flex;border:1px solid #333;">
  <div style="width:150px;">${buttons}</div>
  <div id="tab-content" style="flex:1;padding:10px;"></div>
</div>
<script>
  var contents = [${contents.join(',')}];
  function showTab(i) {
    document.getElementById('tab-content').innerHTML = contents[i];
  }
  showTab(0);
</script>`;
  };
  return (
    <div>
      <button onClick={() => navigator.clipboard.writeText(generateHTML())}>
        Copy Output
      </button>
      <pre style={{
        border: '1px solid #333',
        padding: '10px',
        marginTop: '8px',
        background: '#f4f4f4',
        maxWidth: '400px',
        maxHeight: '300px',
        overflow: 'auto'
      }}>
        {generateHTML()}
      </pre>
    </div>
  );
}