import { useState, useEffect } from "react";
import ContentSelector from "./components/ContentSelector";
import ProblemViewer from "./components/ProblemViewer";
import { problems } from "./data/problems";
import { ProblemContent } from "./types";

const App = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedCategory, setSelectedCategory] = useState("文系");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedContent, setSelectedContent] = useState<
    "question" | "hints" | "solution" | "detailedSolution"
  >("question");

  const availableYears = [
    ...new Set(problems.map((problem) => problem.year)),
  ].sort((a, b) => b - a);

  const currentProblem = problems.find(
    (item) =>
      item.year === selectedYear &&
      item.category === selectedCategory &&
      item.number === selectedNumber
  );

  const handleContentChange = (
    content: "question" | "hints" | "solution" | "detailedSolution"
  ) => {
    setSelectedContent(content);
  };

  // ページタイトルとメタタグを更新する副作用
  useEffect(() => {
    // ページタイトルを更新
    document.title = `京都大学入試数学アプリ - ${selectedYear} ${selectedCategory} 問題 ${selectedNumber}`;

    // メタタグを更新
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `京都大学の${selectedYear}年度${selectedCategory}入試問題の解説を体験できる学習アプリです。`
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = `京都大学の${selectedYear}年度${selectedCategory}入試問題の解説を体験できる学習アプリです。`;
      document.head.appendChild(newMeta);
    }
  }, [selectedYear, selectedCategory, selectedNumber]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>京都大学入試数学アプリ</h1>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="year-select">年度:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          style={{ marginRight: "10px" }}
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <label htmlFor="category-select">文系/理系:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          {["文系", "理系"].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="number-select">問題番号:</label>
        <select
          id="number-select"
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
>
          {[1, 2, 3, 4, 5, 6].map((number) => {
          const problemExists = problems.some(
          (item) =>
              item.year === selectedYear &&
              item.category === selectedCategory &&
              item.number === number
          );

          return (
            <option
            key={number}
            value={number}
            style={{
              backgroundColor: problemExists ? "#d3ffd3" : "#f0f0f0", // データありは緑, なしはグレー
              color: problemExists ? "black" : "gray", // データなしはグレー文字
              fontWeight: problemExists ? "bold" : "normal", // データありは太字
            }}
            >
            {number}
            </option>
            );
          })}
        </select>
      </div>

      <ContentSelector
        selectedContent={selectedContent}
        onContentChange={handleContentChange}
        currentProblem={currentProblem}
      />

      <div style={{ marginTop: "20px" }}>
        {currentProblem ? (
          <ProblemViewer
            key={`${selectedYear}-${selectedCategory}-${selectedNumber}-${selectedContent}`}
            contentType={selectedContent}
            problemContent={currentProblem.content as ProblemContent}
          />
        ) : (
          <p style={{ color: "red" }}>該当する問題が見つかりませんでした。</p>
        )}
      </div>
    </div>
  );
};

export default App;