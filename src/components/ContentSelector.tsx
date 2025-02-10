import React from "react";

interface ContentSelectorProps {
  selectedContent: "question" | "hints" | "solution" | "detailedSolution"; // 修正: リテラル型を指定
  onContentChange: (
    content: "question" | "hints" | "solution" | "detailedSolution"
  ) => void;
  currentProblem: { content: Record<string, string> } | undefined;
}

const ContentSelector: React.FC<ContentSelectorProps> = ({
  selectedContent,
  onContentChange,
  currentProblem,
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
              selectedContent === option.value
                ? "#add8e6" // 選択中のボタンは青
                : currentProblem?.content?.[option.value]
                ? "#d3ffd3" // データがある場合は緑
                : "#f0f0f0", // データがない場合はグレー
            border: "1px solid #ccc",
            cursor: currentProblem?.content?.[option.value] ? "pointer" : "not-allowed", // データがない場合は無効風
            opacity: currentProblem?.content?.[option.value] ? 1 : 0.5, // データがない場合は薄くする
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ContentSelector;
