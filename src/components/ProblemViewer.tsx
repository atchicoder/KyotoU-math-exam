import React from "react";
import MathJaxRenderer from "./MathJaxRenderer";

interface ProblemViewerProps {
  contentType: string; // 表示するコンテンツの種類
  problemContent: {
    question: string;
    hints: string[];
    solution: string | { [key: string]: string };
    detailedSolution: string[] | string;
  };
}

const ProblemViewer: React.FC<ProblemViewerProps> = ({
  contentType,
  problemContent,
}) => {
  if (!problemContent) {
    return <p>該当するデータがありません。</p>;
  }

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.join("\n");
    }
    return content;
  };

  return (
    <div>
      {contentType === "question" && (
        <MathJaxRenderer key="question" content={problemContent.question} />
      )}
      {contentType === "hints" && (
        <MathJaxRenderer key="hints" content={renderContent(problemContent.hints)} />
      )}
      {contentType === "solution" && (
        <MathJaxRenderer
          key="solution"
          content={
            typeof problemContent.solution === "string"
              ? problemContent.solution
              : Object.values(problemContent.solution).join("\n")
          }
        />
      )}
      {contentType === "detailedSolution" && (
        <MathJaxRenderer
          key="detailedSolution"
          content={renderContent(problemContent.detailedSolution)}
        />
      )}
    </div>
  );
};

export default ProblemViewer;
