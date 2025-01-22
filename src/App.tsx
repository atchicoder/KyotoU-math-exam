import { useState } from "react";
import ContentSelector from "./components/ContentSelector";
import ProblemViewer from "./components/ProblemViewer";
import { problems } from "./data/problems";
import { ProblemContent } from "./types"; // 型をインポート

const App = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedCategory, setSelectedCategory] = useState("文系");
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedContent, setSelectedContent] = useState("question");

  // 利用可能な年度を問題データから動的に取得
  const availableYears = [
    ...new Set(problems.map((problem) => problem.year)),
  ].sort((a, b) => b - a);

  const currentProblem = problems.find(
    (item) =>
      item.year === selectedYear &&
      item.category === selectedCategory &&
      item.number === selectedNumber
  );

  const handleContentChange = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>京都大学入試数学アプリ</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>年度:</label>
        <select
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

        <label>文系/理系:</label>
        <select
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

        <label>問題番号:</label>
        <select
          value={selectedNumber}
          onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>

      <ContentSelector
        selectedContent={selectedContent}
        onContentChange={handleContentChange}
      />

      <div style={{ marginTop: "20px" }}>
        {currentProblem ? (
          <ProblemViewer
            key={`${selectedYear}-${selectedCategory}-${selectedNumber}-${selectedContent}`}
            contentType={selectedContent}
            problemContent={currentProblem.content as ProblemContent} // 型を明示
          />
        ) : (
          <p>該当する問題がありません。</p>
        )}
      </div>
    </div>
  );
};

export default App;
