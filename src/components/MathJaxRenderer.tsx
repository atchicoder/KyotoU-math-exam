import React, { useEffect, useRef } from "react";

// MathJax の型定義を拡張
declare global {
  interface Window {
    MathJax: {
      typeset: (elements?: HTMLElement[]) => void;
    };
  }
}

interface MathJaxRendererProps {
  content: string | string[]; // 表示する内容
}

const MathJaxRenderer: React.FC<MathJaxRendererProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // MathJax を使用して数式をレンダリング
  useEffect(() => {
    if (window.MathJax && containerRef.current) {
      window.MathJax.typeset([containerRef.current]);
    }
  }, [content]);

  // 改行コードを <br /> に変換して HTML に挿入
  const renderWithNewlinesAsHTML = (text: string) => {
    const htmlContent = text.replace(/\n/g, "<br />"); // 改行を <br /> に置換
    return { __html: htmlContent }; // HTML を挿入するためのオブジェクト
  };

  return (
    <div ref={containerRef}>
      {Array.isArray(content) ? (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {content.map((item, index) => (
            <li
              key={index}
              style={{ marginBottom: "8px" }}
              dangerouslySetInnerHTML={renderWithNewlinesAsHTML(item)} // HTML として解釈
            />
          ))}
        </ul>
      ) : (
        <div
          dangerouslySetInnerHTML={renderWithNewlinesAsHTML(content)} // HTML として解釈
        />
      )}
    </div>
  );
};

export default MathJaxRenderer;
