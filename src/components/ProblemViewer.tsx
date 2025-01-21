import React from "react";
import MathJaxRenderer from "./MathJaxRenderer";

interface ProblemViewerProps {
  contentType: string; // 表示するコンテンツの種類
  problemContent: {
    question: string;
    hints: string[];
    solution: string;
    detailedSolution: string[];
  };
}

const ProblemViewer: React.FC<ProblemViewerProps> = ({
  contentType,
  problemContent,
}) => {
  if (!problemContent) {
    return <p>該当するデータがありません。</p>;
  }

  return (
    <div>
      {contentType === "question" && (
        <MathJaxRenderer key="question" content={problemContent.question} />
      )}
      {contentType === "hints" && (
        <MathJaxRenderer key="hints" content={problemContent.hints} />
      )}
      {contentType === "solution" && (
        <MathJaxRenderer key="solution" content={problemContent.solution} />
      )}
      {contentType === "detailedSolution" && (
        <MathJaxRenderer
          key="detailedSolution"
          content={problemContent.detailedSolution}
        />
      )}
    </div>
  );
};

export default ProblemViewer;
