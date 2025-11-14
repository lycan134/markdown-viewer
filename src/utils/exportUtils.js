export const exportToHTML = (file) => {
  const blob = new Blob([file.content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name.replace(".md", ".html");
  a.click();
};

export const exportToPDF = async (file) => {
  const html = `<html><body>${file.content}</body></html>`;
  const blob = new Blob([html], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name.replace(".md", ".pdf");
  a.click();
};
