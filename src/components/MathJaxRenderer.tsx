import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    MathJax: {
      typeset: (elements?: HTMLElement[]) => void;
    }
  }
}

interface MathJaxRendererProps {
  content: string | string[];
}

const MathJaxRenderer: React.FC<MathJaxRendererProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.MathJax && containerRef.current) {
      window.MathJax.typeset([containerRef.current]);
    }
  }, [content]);

  const convertNewlines = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div ref={containerRef}>
      {Array.isArray(content) ? (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {content.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {convertNewlines(item)}
            </li>
          ))}
        </ul>
      ) : (
        <div>{convertNewlines(content)}</div>
      )}
    </div>
  );
};

export default MathJaxRenderer;