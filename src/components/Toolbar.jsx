import { exportToHTML, exportToPDF } from "../utils/exportUtils";

function Toolbar({ darkMode, setDarkMode, activeFile }) {
  return (
    <div className="toolbar">
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {activeFile && (
        <>
          <button className="btn" onClick={() => exportToHTML(activeFile)}>
            Download HTML
          </button>
          <button className="btn" onClick={() => exportToPDF(activeFile)}>
            Export PDF
          </button>
        </>
      )}
    </div>
  );
}

export default Toolbar;
