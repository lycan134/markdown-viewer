function Editor({ content, onChange }) {
  return (
    <textarea
      className="editor"
      value={content}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Editor;
