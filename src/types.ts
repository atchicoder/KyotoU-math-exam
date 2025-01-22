// 型定義をsrc/types.tsに作成
export interface ProblemContent {
    question: string;
    hints: string[];
    solution: string | { [key: string]: string };
    detailedSolution: string[];
  }
  
  export interface Problem {
    year: number;
    number: number;
    category: string;
    content: ProblemContent;
  }
  