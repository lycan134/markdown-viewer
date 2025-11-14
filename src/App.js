import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Editor from "./components/Editor";
import MarkdownViewer from "./components/MarkdownViewer";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleCreate = () => {
    const newFile = {
      id: Date.now(),
      name: `NewFile-${files.length + 1}.md`,
      content: "# New Markdown File\nStart typing..."
    };
    setFiles([...files, newFile]);
    setActiveFile(newFile);
  };

  const handleUpdateContent = (content) => {
    if (!activeFile) return;
    const updated = files.map(f =>
      f.id === activeFile.id ? { ...f, content } : f
    );
    setFiles(updated);
    setActiveFile({ ...activeFile, content });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar
        files={files}
        setFiles={setFiles}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        onCreate={handleCreate}
      />

      <div className="main">
        <Toolbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeFile={activeFile}
        />

        <div className="workspace">
          <Editor
            content={activeFile?.content || ""}
            onChange={handleUpdateContent}
          />
          <MarkdownViewer content={activeFile?.content || ""} />
        </div>
      </div>
    </div>
  );
}

export default App;
