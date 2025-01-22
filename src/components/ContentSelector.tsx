import React from "react";

interface ContentSelectorProps {
  selectedContent: "question" | "hints" | "solution" | "detailedSolution"; // 修正: リテラル型を指定
  onContentChange: (
    content: "question" | "hints" | "solution" | "detailedSolution"
  ) => void;
}

const ContentSelector: React.FC<ContentSelectorProps> = ({
  selectedContent,
  onContentChange,
}) => {
  const options = [
    { label: "問題", value: "question" },
    { label: "ヒント", value: "hints" },
    { label: "簡単な解答", value: "solution" },
    { label: "詳しい解答", value: "detailedSolution" },
  ] as const;

  return (
    <div>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onContentChange(option.value)}
          style={{
            margin: "0 5px",
            padding: "10px",
            backgroundColor:
              selectedContent === option.value ? "#add8e6" : "#f0f0f0",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ContentSelector;
