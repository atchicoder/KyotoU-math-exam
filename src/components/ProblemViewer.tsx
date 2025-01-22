import React from "react";
import MathJaxRenderer from "./MathJaxRenderer";

interface ProblemViewerProps {
  contentType: string;
  problemContent: {
    question: string;
    hints: string[];
    solution: string | { [key: string]: string };
    detailedSolution: string[];
  };
}

const ProblemViewer: React.FC<ProblemViewerProps> = ({
  contentType,
  problemContent,
}) => {
  // solution を安全にレンダリングする関数
  const renderSolution = (solution: string | { [key: string]: string }) => {
    if (typeof solution === "string") {
      return solution;
    } else {
      return Object.entries(solution)
        .map(([key, value]) => `${key}: ${value}`)
        .join("<br/>"); // HTML の改行を適用
    }
  };

  // contentType に応じて MathJaxRenderer に渡す内容を決定
  const renderContent = () => {
    switch (contentType) {
      case "question":
        return <MathJaxRenderer content={problemContent.question} />;
      case "hints":
        return (
          <MathJaxRenderer
            content={problemContent.hints.join("<br/>")} // ヒントを改行付きで表示
          />
        );
      case "solution":
        return (
          <MathJaxRenderer
            content={renderSolution(problemContent.solution)} // solution を処理して表示
          />
        );
      case "detailedSolution":
        return (
          <MathJaxRenderer
            content={problemContent.detailedSolution.join("<br/>")} // 詳しい解答を改行付きで表示
          />
        );
      default:
        return <p>該当するデータがありません。</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default ProblemViewer;
