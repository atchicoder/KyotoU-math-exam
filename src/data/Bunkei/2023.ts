import { Problem } from "../../types";

export const Bunkei2023: Problem[] = [
  {
    "year": 2023,
    "number": 1,
    "category": "文系",
    "content": {
      "question": "次の2問に答えよ。\n\n(1) \\(n\\) を自然数とする。1個のさいころを \\(n\\) 回投げるとき，出た目の積が 5 で割り切れる確率を求めよ。\n\n(2) 次の式の分母を有理化し，分母に3乗根の記号が含まれない式として表せ。\n\\[\\frac{55}{2\\sqrt[3]{9}+\\sqrt[3]{3}+5}\\]",
      "hints": [
        "(1) 5 が出ない確率を考え、それを \\(n\\) 回続けた場合を考える。",
        "(2) \\(a = \\sqrt[3]{3}\\) と置き換えて計算を進める。"
      ],
      "solution": {
        "(1)": "確率は \\(1 - \\left(\\frac{5}{6}\\right)^n\\) となる。",
        "(2)": "解は \\(\\frac{19 + 7\\sqrt[3]{3} - 9\\sqrt[3]{9}}{2}\\) である。"
      },
      "detailedSolution": [
        "【(1) の解法】",
        "1. サイコロを1回投げて5が出る確率は \\(\\frac{1}{6}\\)。",
        "2. 5が出ない確率は \\(\\frac{5}{6}\\)。",
        "3. \\(n\\) 回連続で5が出ない確率は \\(\\left(\\frac{5}{6}\\right)^n\\)。",
        "4. 少なくとも1回は5が出る確率は \\(1 - \\left(\\frac{5}{6}\\right)^n\\)。",
        "",
        "【(2) の解法】",
        "1. \\(a = \\sqrt[3]{3}\\) と置くと分母は \\(2a^2 + a + 5\\)。",
        "2. 分母を有理化するために、分子と分母に \\(4a^4 - 2a^3 - 2a^2 + a + 5\\) を掛ける。",
        "3. 分母は \\((2a^2 + a + 5)(4a^4 - 2a^3 - 2a^2 + a + 5)\\) となり、\\(a^3 = 3\\) を用いて整理。",
        "4. 計算により最終的に \\(\\frac{19 + 7a - 9a^2}{2}\\) が得られる。",
        "5. \\(a = \\sqrt[3]{3}\\) を戻して \\(\\frac{19 + 7\\sqrt[3]{3} - 9\\sqrt[3]{9}}{2}\\)。"
      ]
    }
  },
  {
    "year": 2023,
    "number": 2,
    "category": "文系",
    "content": {
      "question": "空間内の4点 \\(O\\)，\\(A\\)，\\(B\\)，\\(C\\) は同一平面上にないとする．\n点 \\(D\\)，\\(P\\)，\\(Q\\) を次のように定める．\n点 \\(D\\) は \\(\\overrightarrow{OD} = \\overrightarrow{OA} + 2\\overrightarrow{OB} + 3\\overrightarrow{OC}\\) を満たし，\n点 \\(P\\) は線分 \\(OA\\) を \\(1:2\\) に内分し，点 \\(Q\\) は線分 \\(OB\\) の中点である．\nさらに，直線 \\(OD\\) 上の点 \\(R\\) を，直線 \\(QR\\) と直線 \\(PC\\) が交点を持つように定める．\nこのとき，線分 \\(OR\\) の長さと線分 \\(RD\\) の長さの比 \\(OR:RD\\) を求めよ。",
      "hints": [
        "1. 点 \\(P\\) と \\(Q\\) の位置をベクトルで表す。",
        "2. 点 \\(R\\) を直線 \\(OD\\) 上の点としてパラメータ \\(t\\) を用いて表現する。",
        "3. 直線 \\(QR\\) と直線 \\(PC\\) の交点であることから、ベクトル方程式を立てる。",
        "4. 各成分ごとに係数を比較し、連立方程式を解く。",
        "5. パラメータ \\(t\\) を求め、内分比 \\(OR:RD\\) を計算する。"
      ],
      "solution": "比 \\(OR:RD\\) は 1:9 である。",
      "detailedSolution": [
        "1. ベクトルを用いて各点の位置を表現する。",
        "   - 点 \\(D\\): \\(\\overrightarrow{OD} = \\overrightarrow{a} + 2\\overrightarrow{b} + 3\\overrightarrow{c}\\) とする。",
        "   - 点 \\(P\\): \\(\\overrightarrow{OP} = \\tfrac{1}{3}\\overrightarrow{a}\\)",
        "   - 点 \\(Q\\): \\(\\overrightarrow{OQ} = \\tfrac{1}{2}\\overrightarrow{b}\\)",
        "   - 点 \\(R\\): 直線 \\(OD\\) 上の点なので \\(\\overrightarrow{OR} = t(\\overrightarrow{a}+2\\overrightarrow{b}+3\\overrightarrow{c})\\) と表す。",
        "",
        "2. 直線 \\(QR\\) と \\(PC\\) の交点 \\(R\\) を考える。",
        "   - 直線 \\(QR\\) 上の任意の点は \\[ \\overrightarrow{OQ} + v(\\overrightarrow{OR}-\\overrightarrow{OQ}) \\] と表される。",
        "   - 直線 \\(PC\\) 上の任意の点は \\[ \\overrightarrow{OP} + u(\\overrightarrow{c}-\\overrightarrow{OP}) \\] と表される。",
        "",
        "3. これらを \\(R\\) について等式で結び、ベクトルの各成分を比較することにより連立方程式を立てる。",
        "",
        "4. 連立方程式を解いて得た \\(t = \\tfrac{1}{10}\\) から、点 \\(R\\) は直線 \\(OD\\) 上で \\(O\\) から \\(D\\) までの距離を 1:9 に内分する。",
        "",
        "5. よって、求める比は \\(OR:RD = 1:9\\) である。"
      ]
    }
  },
  {
    "year": 2023,
    "number": 3,
    "category": "文系",
    "content": {
      "question": "次の2問に答えよ。\n\n(1) \\(\\cos2\\theta\\) と \\(\\cos3\\theta\\) を、\\(\\cos\\theta\\) の式で表せ。\n\n(2) 半径 1 の円に内接する正五角形の一辺の長さが 1.15 より大きいか否かを判定し、理由を述べよ。",
      "hints": [
        "2倍角の公式: \\(\\cos(2\\theta) = 2\\cos^2\\theta - 1\\)",
        "3倍角の公式: \\(\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta\\)",
        "\\(\\theta = 36^{\\circ}\\) で \\(\\pi - 2\\theta = 3\\theta\\) となり、\\(\\cos(\\pi - 2\\theta) = \\cos(3\\theta)\\) を利用する。",
        "得られる 3 次方程式が \\(x = -1\\) を解にもつため、因数分解が可能となる。"
      ],
      "solution": "(1) \\(\\cos(2\\theta) = 2\\cos^2\\theta - 1\\), \\(\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta\\)\n\n(2) 正五角形の一辺の長さは約 1.1756 であり、1.15 より大きい。",
      "detailedSolution": [
        "【(1)の解法】",
        "1. 2倍角の公式より:",
        "   \\(\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1\\)",
        "2. 3倍角の公式は以下のように導出:",
        "   \\(\\cos(3\\theta) = \\cos(2\\theta + \\theta) = \\cos(2\\theta)\\cos\\theta - \\sin(2\\theta)\\sin\\theta\\)",
        "   \\(\\cos(2\\theta) = 2\\cos^2\\theta - 1\\) と \\(\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\) を代入して整理すると",
        "   \\(\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta\\)",
        "",
        "【(2)の解法】",
        "1. \\(\\theta = 36^{\\circ}\\) のとき \\(\\pi - 2\\theta = 3\\theta\\) より",
        "   \\(\\cos(\\pi - 2\\theta) = \\cos(3\\theta)\\)",
        "2. \\(\\cos(\\pi - x) = -\\cos(x)\\) より",
        "   \\(-\\cos(2\\theta) = \\cos(3\\theta)\\)",
        "3. \\(x = \\cos\\theta\\) とおくと",
        "   \\(-(2x^2 - 1) = 4x^3 - 3x\\)",
        "   \\(4x^3 + 2x^2 - 3x - 1 = 0\\)",
        "4. この式は \\(x = -1\\) を解に持つので因数分解できる:",
        "   \\((x + 1)(4x^2 - 2x - 1) = 0\\)",
        "5. 2次方程式を解くと",
        "   \\(x = \\frac{1 \\pm \\sqrt{5}}{4}\\)",
        "6. \\(\\theta = 36^{\\circ}\\) では \\(\\cos\\theta > 0\\) なので",
        "   \\(\\cos(36^{\\circ}) = \\frac{1 + \\sqrt{5}}{4} \\approx 0.8090\\)",
        "7. 正五角形の一辺の長さは \\(2\\sin(36^{\\circ})\\) で",
        "   \\(\\sin(36^{\\circ}) \\approx 0.5878\\)",
        "   よって一辺の長さは約 1.1756 となり、1.15 より大きい。"
      ]
    }
  },
  {
    "year": 2023,
    "number": 4,
    "category": "文系",
    "content": {
      "question": "数列\\(\\{a_n\\}\\)は次の条件を満たしている。\n\\[a_1 = 3,a_n = \\frac{S_n}{n} + (n-1)\\cdot2^n \\quad (n = 2, 3, 4, \\dots)\\]\nただし、\\(S_n\\)は\\(a_1 + a_2 + \\dots + a_n\\)である。\nこのとき、数列\\(\\{a_n\\}\\)の一般項を求めよ。",
      "hints": [
        "1. 与式 \\(a_n = \\frac{S_n}{n} + (n-1)\\cdot2^n\\) を使って、\\(S_n\\) と \\(a_n\\) の関係を整理する。",
        "2. \\(S_n = S_{n-1} + a_n\\) を利用し、前の項との関係を導く。",
        "3. 得られた漸化式 \\(a_n = a_{n-1} + (n+2)\\cdot2^{n-1}\\) を求める。",
        "4. 漸化式を繰り返し適用して、一般項の形を見つける。",
        "5. 和の公式などを使って、閉じた形 \\(a_n = (n+1)\\cdot2^n - 1\\) を導く。"
      ],
      "solution": "数列の一般項は \\(a_n = (n+1)\\cdot2^n - 1\\) である。",
      "detailedSolution": [
        "【解法】",
        "1. 「初期条件の確認」:",
        "   初項は \\(a_1 = 3\\) と与えられている。",
        "",
        "2. 「与式の利用」:",
        "   条件より、\\(a_n = \\frac{S_n}{n} + (n-1)\\cdot2^n\\) である。",
        "   ここで、\\(S_n = S_{n-1} + a_n\\) を利用すると、\\(S_n\\) を次のように表せる。",
        "   \\[ S_n = n\\,a_n - n(n-1)\\cdot2^n. \\]",
        "   同様にして、\\(S_{n-1}\\) を次の形で表す。",
        "   \\[ S_{n-1} = (n-1)\\,a_{n-1} - (n-1)(n-2)\\cdot2^{n-1}. \\]",
        "   これらの差をとると、次が成り立つ。",
        "   \\[ n\\,a_n - (n-1)\\,a_{n-1} = n(n-1)\\cdot2^n - (n-1)(n-2)\\cdot2^{n-1}. \\]",
        "   整理して、",
        "   \\[ (n-1)(a_n - a_{n-1}) = (n+2)(n-1)\\cdot2^{n-1}. \\]",
        "   \\(n-1\\neq0\\)より、両辺を \\((n-1)\\) で割ると、",
        "   \\[ a_n - a_{n-1} = (n+2)\\cdot2^{n-1}. \\]",
        "   が得られる。",
        "",
        "3. 「階差数列の考え方の適用」:",
        "   差分漸化式を用いて \\(n=2\\) から順に足し上げると、",
        "   \\[a_n = a_1 + \\sum_{k=2}^n (k+2)2^{k-1}.\\]",
        "   初項 \\(a_1 = 3\\) を代入して一般形を得る。",
        "",
        "4. 「Σの計算」:",
        "   和 \\(\\sum_{k=2}^n (k+2)2^{k-1}\\) を分割して計算する。",
        "   \\[\\sum_{k=2}^n (k+2)2^{k-1} = \\sum_{k=2}^n k\\cdot2^{k-1} + 2\\sum_{k=2}^n 2^{k-1}.\\]",
        "   まず、\\(\\sum_{k=2}^n k\\cdot2^{k-1}\\) を計算する。",
        "   \\[\\sum_{k=2}^n k\\cdot2^{k-1} = \\frac{1}{2}\\sum_{k=2}^n k\\cdot2^k.\\]",
        "   ここで \\(\\sum_{k=2}^n k\\cdot2^k\\) を具体的に計算するため、添字を調整して和を以下の形に書き換える。",
        "   \\[S = \\sum_{k=1}^n k\\cdot2^k.\\]",
        "   両辺を 2 倍すると、",
        "   \\[2S = \\sum_{k=1}^n k\\cdot2^{k+1}.\\]",
        "   右辺をずらして書き直すと、",
        "   \\[2S = 2^2 + 2\\cdot2^3 + 3\\cdot2^4 + \\dots + n\\cdot2^{n+1}.\\]",
        "   元の和 \\(S\\) を引くと、",
        "   \\[S = n\\cdot2^{n+1} - \\sum_{k=1}^n 2^k.\\]",
        "   \\(\\sum_{k=1}^n 2^k = 2^{n+1} - 2\\) （等比数列の和の公式）を用いると、",
        "   \\[S = n\\cdot2^{n+1} - (2^{n+1} - 2).\\]",
        "   これを整理して、",
        "   \\[S = (n-1)2^{n+1} + 2.\\]",
        "   次に、\\(\\sum_{k=2}^n k\\cdot2^k\\) に戻る。",
        "   \\[\\sum_{k=2}^n k\\cdot2^k = \\sum_{k=1}^n k\\cdot2^k - 1\\cdot2^1.\\]",
        "   よって、",
        "   \\[\\sum_{k=2}^n k\\cdot2^k = (n-1)2^{n+1} + 2 - 2 = (n-1)2^{n+1}.\\]",
        "   さらに、",
        "   \\[\\sum_{k=2}^n k\\cdot2^{k-1} = \\frac{1}{2}\\sum_{k=2}^n k\\cdot2^k = (n-1)2^n.\\]",
        "   次に、\\(\\sum_{k=2}^n 2^k\\) を計算する。これは等比数列の和の公式を用いて、",
        "   \\[\\sum_{k=2}^n 2^k = 2^{n+1} - 4.\\]",
        "   これらを合わせると、",
        "   \\[\\sum_{k=2}^n (k+2)2^{k-1} = (n-1)2^n + (2^{n+1} - 4).\\]",
        "   整理すると、",
        "   \\[\\sum_{k=2}^n (k+2)2^{k-1} = (n+1)2^n - 4.\\]",
        "",
        "5. 「結論」:",
        "   最後に初項を加えて、",
        "   \\[a_n = 3 + ((n+1)2^n - 4) = (n+1)2^n - 1.\\]",
        "   よって、数列の一般項は \\(\\boxed{a_n = (n+1)\\cdot2^n - 1}\\) である。"
      ]
    }
  },
  {
    "year": 2023,
    "number": 5,
    "category": "文系",
    "content": {
      "question": "整式\\(f(x)\\)が恒等式\n\\[ f(x)+\\int_{-1}^1 {(x-y)}^2 f(y) \\;dy=2x^2+x+\\frac{5}{3} \\]\nを満たすとき，\\(f(x)\\)を求めよ。",
      "hints": [
        "1. \\(f(x)\\) を整式である。右辺から次数が分かる。"
      ],
      "solution": "整式 \\(f(x)\\) は \\(\\boxed{f(x) = -3x + 1}\\) である。",
      "detailedSolution": [
        "【解法】",
        "1. 「初期設定と次数の議論」:",
        "   \\(f(x)\\) は整式である。与式において右辺は \\(2x^2 + x + \\frac{5}{3}\\) と 2 次以下の多項式である。",
        "   また、積分項 \\(\\int_{-1}^1 (x-y)^2 f(y) \\, dy\\) の中で、\\(f(y)\\) が高々 \\(n\\) 次多項式ならば、\\((x-y)^2\\) による展開で次数は高々 \\(n+2\\) となるが、積分により \\(y\\) に関する高次の項（例えば \\(y^3, y^4\\) など）の寄与が消える。",
        "   結果として、積分項も高々 2 次の項までしか現れない。このため、\\(f(x)\\) は 2 次以下の多項式と決定できる。",
        "",
        "2. 「積分項の計算」:",
        "   \\(f(x)\\) を \\(f(x) = ax^2 + bx + c\\) と仮定し、積分項 \\(\\int_{-1}^1 (x-y)^2 f(y) \\;dy\\) を展開する。",
        "   \\[(x-y)^2 f(y) = (x^2 - 2xy + y^2)(ay^2 + by + c)\\]",
        "   を展開して項別に積分する。",
        "   \\[\\int_{-1}^1 (x-y)^2 f(y) \\;dy = A x^2 - 2B x + C\\]",
        "   と書ける。ここで、",
        "   \\[A = \\int_{-1}^1 f(y) \\, dy, \\quad B = \\int_{-1}^1 y f(y) \\, dy, \\quad C = \\int_{-1}^1 y^2 f(y) \\, dy.\\]",
        "   各項の具体的な計算を行い、次を得る。",
        "   \\[A = \\frac{2a}{3} + 2c, \\quad B = \\frac{2b}{3}, \\quad C = \\frac{2a}{5} + \\frac{2c}{3}.\\]",
        "",
        "3. 「恒等式の展開と係数比較」:",
        "   与式を \\(f(x) + \\int_{-1}^1 (x-y)^2 f(y) \\;dy = 2x^2 + x + \\frac{5}{3}\\) に代入し、",
        "   \\[(a + A)x^2 + (b - 2B)x + (c + C) = 2x^2 + x + \\frac{5}{3}\\]",
        "   を得る。これを係数比較すると、次の連立方程式が得られる。",
        "   \\[a + A = 2, \\quad b - 2B = 1, \\quad c + C = \\frac{5}{3}.\\]",
        "   各式に \\(A, B, C\\) を代入し整理する。",
        "",
        "4. 「連立方程式を解く」:",
        "   \\[a + \\left(\\frac{2a}{3} + 2c\\right) = 2 \\quad \\Rightarrow \\quad \\frac{5a}{3} + 2c = 2,\\]",
        "   \\[b - 2\\left(\\frac{2b}{3}\\right) = 1 \\quad \\Rightarrow \\quad -\\frac{1}{3}b = 1 \\quad \\Rightarrow \\quad b = -3,\\]",
        "   \\[c + \\left(\\frac{2a}{5} + \\frac{2c}{3}\\right) = \\frac{5}{3} \\quad \\Rightarrow \\quad \\frac{5c}{3} + \\frac{2a}{5} = \\frac{5}{3}.\\]",
        "   これらを解いて \\(a = 0, b = -3, c = 1\\) を得る。",
        "",
        "5. 「結論」:",
        "   \\(a, b, c\\) の値を用いて \\(f(x) = ax^2 + bx + c = -3x + 1\\) を得る。",
        "   よって、\\(\\boxed{f(x) = -3x + 1}\\)。"
      ]
    }
  }
];

export default Bunkei2023;
