import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownViewer({ content }) {
  return (
    <div className="viewer">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
