// ProblemContent 型: 各問題の詳細な内容を定義
export interface ProblemContent {
  question: string; // 問題文
  hints: string[]; // ヒント (配列型)
  solution: string | { [key: string]: string }; // 解答: 文字列またはキー-値形式のオブジェクト
  detailedSolution: string[]; // 詳細な解答 (配列型)
}

// Problem 型: 問題全体の構造を定義
export interface Problem {
  year: number; // 年度
  number: number; // 問題番号
  category: string; // 文系/理系
  content: ProblemContent; // 問題の詳細内容
}
