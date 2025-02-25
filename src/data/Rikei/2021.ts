import { Problem } from "../../types";

export const Rikei2021: Problem[] = [
  {
    "year": 2021,
    "number": 1,
    "category": "理系",
    "content": {
      "question": "（1）\\(xyz\\) 空間の3点 \\(A(1,0,0)\\)、\\(B(0,-1,0)\\)、\\(C(0,0,2)\\) を通る平面 \\(\\alpha\\) に関して、点 \\(P(1,1,1)\\) と対称な点 \\(Q\\) の座標を求めよ。\nただし、点 \\(Q\\) が平面 \\(\\alpha\\) に関して \\(P\\) と対称であるとは、線分 \\(PQ\\) の中点 \\(M\\) が平面 \\(\\alpha\\) 上にあり、直線 \\(PM\\) が \\(P\\) から平面 \\(\\alpha\\) に下ろした垂線となることである。\n\n（2）赤玉、白玉、青玉、黄玉が1個ずつ入った袋がある。よくかき混ぜた後に袋から玉を1個取り出し、その玉の色を記録してから袋に戻す。この試行を繰り返すとき、\\(n\\) 回目の試行で初めて赤玉が取り出され、4種類全ての色が記録済みとなる確率を求めよ。ただし、\\(n\\) は4以上の整数とする。",
      "hints": [
        "（1）\\(\\overrightarrow{OA} = (1,0,0)\\)、\\(\\overrightarrow{OB} = (0,-1,0)\\)、\\(\\overrightarrow{OC} = (0,0,2)\\) とし、\\(\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = (-1,-1,0)\\) および \\(\\overrightarrow{AC} = \\overrightarrow{OC} - \\overrightarrow{OA} = (-1,0,2)\\) を求める。",
        "平面 \\(\\alpha\\) 上の任意の点 \\(M\\) は、\\(\\overrightarrow{OM} = \\overrightarrow{OA} + s\\,\\overrightarrow{AB} + t\\,\\overrightarrow{AC}\\) （\\(s,t\\) は実数）と表せる。",
        "一方、\\(P(1,1,1)\\) と \\(Q(x,y,z)\\) の中点 \\(M\\) は \\(\\left(\\frac{1+x}{2},\\frac{1+y}{2},\\frac{1+z}{2}\\right)\\) と書ける。",
        "対称条件より、\\(PQ\\) の中点が平面上にあるとともに、\\(PM = M-P\\) が平面内の方向ベクトル \\(\\overrightarrow{AB}\\) と \\(\\overrightarrow{AC}\\) に垂直となる。",
        "（2）最初の \\(n-1\\) 回で赤玉が出ない確率は \\(\\left(\\frac{3}{4}\\right)^{n-1}\\) であり、残りの3色（白、青、黄）が全て出る組み合わせは包含排除により \\(3^{n-1} - 3\\cdot2^{n-1} + 3\\) 通りと求められる。"
      ],
      "solution": "（1）\\(Q\\left(\\frac{13}{9}, \\frac{5}{9}, \\frac{11}{9}\\right)\\)　（2）\\(\\displaystyle \\frac{1}{4}\\left[\\left(\\frac{3}{4}\\right)^{n-1} - 3\\left(\\frac{1}{2}\\right)^{n-1} + 3\\left(\\frac{1}{4}\\right)^{n-1}\\right]\\)",
      "detailedSolution": [
        "【（1）の解答】",
        "1. 位置ベクトルを \\(\\overrightarrow{OA} = (1,0,0)\\)、\\(\\overrightarrow{OB} = (0,-1,0)\\)、\\(\\overrightarrow{OC} = (0,0,2)\\) とする。そこで、",
        "   \\(\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = (-1,-1,0)\\) 及び",
        "   \\(\\overrightarrow{AC} = \\overrightarrow{OC} - \\overrightarrow{OA} = (-1,0,2)\\) を求める。",
        "2. 平面 \\(\\alpha\\) 上の任意の点 \\(M\\) は、",
        "   \\[ \\overrightarrow{OM} = \\overrightarrow{OA} + s\\,\\overrightarrow{AB} + t\\,\\overrightarrow{AC} = (1-s-t,\\,-s,\\,2t) \\]",
        "   （\\(s,t\\) は実数）と表される。",
        "3. 一方、\\(P(1,1,1)\\) と未知の点 \\(Q(x,y,z)\\) の中点 \\(M\\) は、",
        "   \\[ M = \\left(\\frac{1+x}{2},\\,\\frac{1+y}{2},\\,\\frac{1+z}{2}\\right) \\].",
        "4. 中点 \\(M\\) が平面 \\(\\alpha\\) 上にあるので、\\(M\\) の座標は (\\(1-s-t, -s, 2t\\)) とも表される。さらに、\\(\\overrightarrow{PM} = (-s-t, -s-1, 2t-1)\\) が、平面内の方向ベクトル \\(\\overrightarrow{AB}\\) と \\(\\overrightarrow{AC}\\) に直交するため、",
        "   \\(\\overrightarrow{PM} \\cdot \\overrightarrow{AB} = (-s-t)(-1) + (-s-1)(-1) = 2s+t+1 = 0\\) ・・・(1)",
        "   \\(\\overrightarrow{PM} \\cdot \\overrightarrow{AC} = (-s-t)(-1) + (2t-1)(2) = s+5t-2 = 0\\) ・・・(2)",
        "5. (1) より \\(2s+t+1 = 0\\) から \\(t = -2s-1\\) とし、これを (2) に代入すると、",
        "   \\[ s + 5(-2s-1) - 2 = 0 \\quad\\Rightarrow\\quad -9s - 7 = 0 \\quad\\Rightarrow\\quad s = -\\frac{7}{9}. \\]",
        "   したがって、\\(t = -2\\left(-\\frac{7}{9}\\right)-1 = \\frac{14}{9} - 1 = \\frac{5}{9}\\).",
        "6. これにより、\\(M\\) の座標は",
        "   \\[ \\overrightarrow{OM} = (1-s-t,\\,-s,\\,2t) = \\left(1+\\frac{7}{9}-\\frac{5}{9},\\,\\frac{7}{9},\\,\\frac{10}{9}\\right) = \\left(\\frac{11}{9},\\,\\frac{7}{9},\\,\\frac{10}{9}\\right). \\]",
          "7. 中点の性質から \\(\\overrightarrow{OQ} = 2\\overrightarrow{OM} - \\overrightarrow{OP}\\) であるので、",
        "   \\[ \\overrightarrow{OQ} = 2\\left(\\frac{11}{9},\\,\\frac{7}{9},\\,\\frac{10}{9}\\right) - (1,1,1) = \\left(\\frac{13}{9},\\,\\frac{5}{9},\\,\\frac{11}{9}\\right). \\]",
        "   よって、\\(Q\\) の座標は \\(\\left(\\frac{13}{9}, \\frac{5}{9}, \\frac{11}{9}\\right)\\) となる。",
        "",
        "【（2）の解答】",
        "1. 袋に入る4色の玉のうち、各回で赤玉が出る確率は \\(\\frac{1}{4}\\) である。\n",
        "2. \\(n\\) 回目の試行で初めて赤玉が出るため、最初の \\(n-1\\) 回では赤玉が一度も出ない必要があり、その確率は \\(\\left(\\frac{3}{4}\\right)^{n-1}\\) である。\n",
        "3. この \\(n-1\\) 回の試行では、赤玉以外の3色（白、青、黄）のみが出る。全体の出方は \\(3^{n-1}\\) 通りだが、すべての色が出る場合の数は包含排除により",
        "   \\(3^{n-1} - 3\\cdot2^{n-1} + 3\\) 通りと求められる。",
        "4. よって、最初の \\(n-1\\) 回で条件を満たす確率は",
        "   \\[ \\left(\\frac{3}{4}\\right)^{n-1} \\cdot \\frac{3^{n-1} - 3\\cdot2^{n-1} + 3}{3^{n-1}} \\].",
        "5. 最後に、\\(n\\) 回目に赤玉が出る確率 \\(\\frac{1}{4}\\) をかけると、求める確率は",
        "   \\[ \\frac{1}{4}\\left[\\left(\\frac{3}{4}\\right)^{n-1} - 3\\left(\\frac{1}{2}\\right)^{n-1} + 3\\left(\\frac{1}{4}\\right)^{n-1}\\right] \\]."
      ]
    }
  },
  {
    "year": 2021,
    "number": 2,
    "category": "理系",
    "content": {
      "question": "曲線 \\( y=\\frac{1}{2}(x^2+1) \\) 上の点 \\( P \\) における接線は \\( x \\) 軸と交わるとし、その交点を \\( Q \\) とおく。線分 \\( PQ \\) の長さを \\( L \\) とするとき、\\( L \\) が取りうる値の最小値を求めよ。",
      "hints": [
        "1. 曲線 \\( y=\\frac{1}{2}(x^2+1) \\) の接線の方程式を求める。",
        "2. 接線と \\( x \\) 軸との交点 \\( Q \\) の座標を求める。",
        "3. 点 \\( P \\) と点 \\( Q \\) の距離を計算し、関数 \\( f(a) \\) を定義する。",
        "4. \\( f(a) \\) を微分して最小値を求める。",
        "5. \\( f'(a) \\) の符号変化を確認し、極小値であることを示す。"
      ],
      "solution": "線分 \\( PQ \\) の長さの最小値は \\( \\frac{3\\sqrt{3}}{4} \\) である。",
      "detailedSolution": [
        "### 1. 接線の方程式",
        "曲線 \\( y = \\frac{1}{2}(x^2+1) \\) の微分係数は \\( y' = x \\) であり、点 \\( P(a, \\frac{1}{2}(a^2+1)) \\) における接線の方程式は",
        "\\[ y - \\frac{1}{2}(a^2+1) = a(x-a). \\]",
        "この接線が \\( x \\) 軸と交わる点 \\( Q \\) を求めるため、\\( y = 0 \\) を代入すると",
        "\\[ 0 - \\frac{1}{2}(a^2+1) = a(x-a), \\]",
        "よって、",
        "\\[ x = \\frac{a^2-1}{2a}. \\]",
        "したがって、\\( Q \\) の座標は \\( Q(\\frac{a^2-1}{2a}, 0) \\) となる。",
        "",
        "### 2. 距離 \\( L \\) の式",
        "点 \\( P \\) と点 \\( Q \\) の距離は",
        "\\[ L = \\sqrt{ \\left(a - \\frac{a^2-1}{2a} \\right)^2 + \\left( \\frac{a^2+1}{2} \\right)^2 }. \\]",
        "計算すると、",
        "\\[ L = \\frac{(a^2+1)^{3/2}}{2a}. \\]",
        "",
        "### 3. 最小値の求め方",
        "関数 \\( f(a) = \\frac{(a^2+1)^{3/2}}{2a} \\) を微分する。",
        "商の微分公式を用いて、",
        "\\[ f'(a) = \\frac{(a^2+1)^{1/2}(2a^2-1)}{2a^2}. \\]",
        "これが 0 となる条件は、",
        "\\[ 2a^2 - 1 = 0 ,a>0\\]",
        "すなわち、",
        "\\[ a^2 = \\frac{1}{2}, \\quad a = \\frac{1}{\\sqrt{2}}. \\]",
        "",
        "### 4. 最小値の確認",
        "分母 \\( 2a^2 \\) は正であり、\\( f'(a) \\) の符号は分子の \\( 2a^2 - 1 \\) の符号に依存する。",
        " \\( a < \\frac{1}{\\sqrt{2}} \\) のとき、\\( 2a^2 - 1 < 0 \\) なので \\( f'(a) < 0 \\) （減少）。\n",
        " \\( a > \\frac{1}{\\sqrt{2}} \\) のとき、\\( 2a^2 - 1 > 0 \\) なので \\( f'(a) > 0 \\) （増加）\n。",
        "よって、\\( a = \\frac{1}{\\sqrt{2}} \\) で極小値をとる。",
        "",
        "### 5. 最小値の計算",
        "\\( a = \\frac{1}{\\sqrt{2}} \\) を代入すると、",
        "\\[ L = \\frac{(\\frac{3}{2})^{3/2}}{2 \\cdot \\frac{1}{\\sqrt{2}}}. \\]",
        "計算すると、",
        "\\[ L = \\frac{3\\sqrt{3}}{4}. \\]",
        "",
        "したがって、線分 \\( PQ \\) の長さの最小値は \\( \\frac{3\\sqrt{3}}{4} \\) である。"
      ]
    }
  }
];

export default Rikei2021;
