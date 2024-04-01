const CopyButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <button className="btn" onClick={copyToClipboard}>
      Copy
    </button>
  );
};

export default CopyButton;
