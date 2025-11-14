import { loadMarkdownFile } from "../utils/fileUtils";

function Sidebar({ files, setFiles, activeFile, setActiveFile, onCreate }) {
  
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const content = await loadMarkdownFile(file);
    const newMd = {
      id: Date.now(),
      name: file.name,
      content
    };

    setFiles([...files, newMd]);
    setActiveFile(newMd);
  };

  return (
    <div className="sidebar">
      <button className="btn" onClick={onCreate}>+ New File</button>

      <input
        type="file"
        accept=".md"
        onChange={handleUpload}
        style={{ marginTop: "10px" }}
      />

      <div className="file-list">
        {files.map(file => (
          <div
            key={file.id}
            className={
              activeFile?.id === file.id ? "file-item active" : "file-item"
            }
            onClick={() => setActiveFile(file)}
          >
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
