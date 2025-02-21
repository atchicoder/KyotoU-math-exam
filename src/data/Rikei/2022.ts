import { Problem } from "../../types";

export const Rikei2022: Problem[] = [
  {
    "year": 2022,
    "number": 1,
    "category": "理系",
    "content": {
        "question": "\\(5.4<\\log_4 2022<5.5\\) であることを示せ。 ただし、\\(0.301<\\log_{10}2<0.3011\\) であることは用いてよい。",
        "hints": [
            "1. \\( \\log_4 2022 \\) を \\( \\log_{10} \\) を用いた式に変換する。",
            "2. \\( 2000 < 2022 < 2048 \\) を用いて、\\( \\log_{10} 2022 \\) の上限と下限を求める。",
            "3. 与えられた \\( \\log_{10} 2 \\) の範囲を利用して評価する。"
        ],
        "solution": "与えられた条件を用いると、\\(5.4<\\log_4 2022<5.5\\) が成り立つ。",
        "detailedSolution": [
            "### 1. \\( \\log_4 2022 \\) の変形",
            " \\( \\log_4 2022 \\) を \\( \\log_{10} \\) を用いた式に変換すると、",
            " \\[ \\log_4 2022 = \\frac{\\log_{10} 2022}{\\log_{10} 4} = \\frac{\\log_{10} 2022}{2\\log_{10}2}. \\]",
            "",
            "### 2. \\( \\log_{10} 2022 \\) の下限評価",
            "  2022 は 2000 より大きいので、",
            "  \\[ \\log_{10} 2022 > \\log_{10} 2000. \\]",
            "  ここで、\\( 2000 = 2 \\times 10^3 \\) であるから、",
            "  \\[ \\log_{10} 2000 = \\log_{10} 2 + 3. \\]",
            "  与えられた条件より \\( \\log_{10}2 > 0.301 \\) なので、",
            "  \\[ \\log_{10} 2000 > 3.301. \\]",
            "  したがって、",
            "  \\[ \\log_{10} 2022 > 3.301. \\]",
            "  これを用いると、",
            "  \\[ \\log_4 2022 = \\frac{\\log_{10}2022}{2\\log_{10}2} > \\frac{3.301}{2\\log_{10}2}. \\]",
            "  さらに、\\( \\log_{10}2 < 0.3011 \\) より \\( 2\\log_{10}2 < 0.6022 \\) となるので、",
            "  \\[ \\frac{3.301}{2\\log_{10}2} > \\frac{3.301}{0.6022} \\approx 5.48. \\]",
            "  よって、",
            "  \\[ \\log_4 2022 > 5.48 > 5.4. \\]",
            "",
            "### 3. \\( \\log_{10} 2022 \\) の上限評価",
            "  2022 は 2048 より小さいので、",
            "  \\[ \\log_{10} 2022 < \\log_{10} 2048. \\]",
            "  ここで、\\( 2048 = 2^{11} \\) なので、",
            "  \\[ \\log_{10} 2048 = \\log_{10} (2^{11}) = 11 \\log_{10}2. \\]",
            "  したがって、",
            "  \\[ \\log_4 2022 = \\frac{\\log_{10} 2022}{2\\log_{10}2} < \\frac{11\\log_{10}2}{2\\log_{10}2} = \\frac{11}{2} = 5.5. \\]",
            "",
            "### 4. 結論",
            "  以上より、",
            "  \\[ 5.4 < \\log_4 2022 < 5.5 \\]",
            "  であることが示された。"
        ]
    }
  },
  {
    "year": 2022,
    "number": 2,
    "category": "理系",
    "content": {
        "question": "箱の中に 1 から \\( n \\) までの番号がついた \\( n \\) 枚の札がある。ただし \\( n \\geqq 5 \\) とし、同じ番号の札はないとする。この箱から 3 枚の札を同時に取り出し、札の番号を小さい順に \\( X, Y, Z \\) とする。このとき、\\( Y - X \\geqq 2 \\) かつ \\( Z - Y \\geqq 2 \\) となる確率を求めよ。",
        "hints": [
            "1. 札の選び方の総数を考える。",
            "2. 条件 \\( Y - X \\geq 2 \\) かつ \\( Z - Y \\geq 2 \\) を満たす場合の数を数える。",
            "3. 変数変換 \\( x = X, y = Y-1, z = Z-2 \\) を行い、選ぶ範囲を調整する。",
            "4. 選び方の数を組み合わせの公式で求め、全体の選び方の数と比べる。"
        ],
        "solution": "求める確率は \\( \\frac{(n-3)(n-4)}{n(n-1)} \\) である。",
        "detailedSolution": [
            "### 1. 札の取り出し方の総数",
            "  3 枚を選ぶ方法の総数は \\( nC3 \\) 通りである。",
            "  \\[ nC3 = \\frac{n(n-1)(n-2)}{6} \\]",
            "",
            "### 2. 条件を満たす場合の数",
            "  条件 \\( Y - X \\geq 2 \\) かつ \\( Z - Y \\geq 2 \\) を満たすように選ぶ方法を考える。",
            "  変数変換 \\( x = X, y = Y-1, z = Z-2 \\) を行うと、新たな変数は",
            "  \\[ 1 \\leq x < y < z \\leq n-2 \\]",
            "  となり、これは \\( (n-2)C3 \\) 通りに対応する。",
            "  \\[ (n-2)C3 = \\frac{(n-2)(n-3)(n-4)}{6} \\]",
            "",
            "### 3. 確率の計算",
            "  求める確率は、条件を満たす場合の数を全体の場合の数で割ったもの:",
            "  \\[ \\frac{(n-2)C3}{nC3} = \\frac{(n-3)(n-4)}{n(n-1)} \\]",
            "",
            "### 4. 結論",
            "  よって、求める確率は",
            "  \\[ \\frac{(n-3)(n-4)}{n(n-1)} \\]."
        ]
    }
  },
  {
    "year": 2022,
    "number": 3,
    "category": "理系",
    "content": {
      "question": "自然数 \\( n \\) に対して、3つの整数 \\( n^2+2, n^4+2, n^6+2 \\) の最大公約数 \\( A_n \\) を求めよ。",
      "hints": [
        "1. \\( n^4+2 = (n^2+2)(n^2-2) + 6 \\) という式を用いると、最大公約数 \\( A_n \\) は 6 の約数（1, 2, 3, 6）のいずれかになる。",
        "2. \\( n \\) を 6 で割った余りに応じて、\\( n = 6k, 6k+1, 6k+2, 6k+3, 6k+4, 6k+5 \\) で場合分けして \\( n^2+2 \\) の性質を調べる。",
        "3. それぞれのケースで共通の因子を考え、\\( A_n \\) の値を特定する。"
      ],
      "solution": "最大公約数 \\( A_n \\) は、\\( n \\) を 6 で割った余りによって次のように決まる。\n\n- \\( n = 6k \\) のとき \\( A_n = 2 \\)\n- \\( n = 6k+1 \\) のとき \\( A_n = 3 \\)\n- \\( n = 6k+2 \\) のとき \\( A_n = 6 \\)\n- \\( n = 6k+3 \\) のとき \\( A_n = 1 \\)\n- \\( n = 6k+4 \\) のとき \\( A_n = 6 \\)\n- \\( n = 6k+5 \\) のとき \\( A_n = 3 \\)",
      "detailedSolution": [
        "### 1. \\( A_n \\) の候補の決定",
        "\\( n^4+2 = (n^2+2)(n^2-2) + 6 \\) という関係式より、\\( n^2+2 \\) と \\( n^4+2 \\) の最大公約数は 6 の約数（1, 2, 3, 6）のいずれかである。",
        "同様に \\( n^6+2 \\) についても同じ議論が成り立つので、求める最大公約数 \\( A_n \\) も 1, 2, 3, 6 のいずれかになる。",
        "",
        "### 2. \\( n \\) を 6 で割った余りによる場合分け",
        "**(1) \\( n = 6k \\) 　(ただし、\\(k=1,2,3,\\cdots)\\)の場合**",
        "\\( n \\) が偶数なので、\\( n^2+2 \\) は必ず偶数となるため、2 は因数に含まれる。",
        "しかし、\\( n^2+2 \\) は 3 で割り切れないため、共通の因子は 2 のみ。",
        "よって、\\( A_n = 2 \\)。",
        "",
        "**(2) \\( n = 6k+1 \\)  　(ただし、以下では\\(k=0,1,2,3,\\cdots)\\)の場合**",
        "\\( n \\) は奇数なので、\\( n^2+2 \\) も奇数となり、2 は因数に含まれない。",
        "一方、\\( n^2+2 \\) は 3 で割り切れるため、共通の因子は 3 のみ。",
        "よって、\\( A_n = 3 \\)。",
        "",
        "**(3) \\( n = 6k+2 \\) の場合**",
        "\\( n \\) は偶数なので、\\( n^2+2 \\) は偶数となり、2 は因数に含まれる。",
        "また、\\( n^2+2 \\) は 3 でも割り切れるため、共通の因子は 2 と 3 の両方を含む。",
        "よって、\\( A_n = 6 \\)。",
        "",
        "**(4) \\( n = 6k+3 \\) の場合**",
        "\\( n \\) は奇数なので、\\( n^2+2 \\) も奇数となり、2 は因数に含まれない。",
        "さらに、\\( n^2+2 \\) は 3 でも割り切れないため、共通の因子は 1 のみ。",
        "よって、\\( A_n = 1 \\)。",
        "",
        "**(5) \\( n = 6k+4 \\) の場合**",
        "\\( n \\) は偶数なので、\\( n^2+2 \\) は偶数となり、2 は因数に含まれる。",
        "また、\\( n^2+2 \\) は 3 でも割り切れるため、共通の因子は 2 と 3 の両方を含む。",
        "よって、\\( A_n = 6 \\)。",
        "",
        "**(6) \\( n = 6k+5 \\) の場合**",
        "\\( n \\) は奇数なので、\\( n^2+2 \\) も奇数となり、2 は因数に含まれない。",
        "一方、\\( n^2+2 \\) は 3 で割り切れるため、共通の因子は 3 のみ。",
        "よって、\\( A_n = 3 \\)。",
        "",
        "### 3. 結論",
        "以上の考察から、最大公約数 \\( A_n \\) は以下のように決まる。",
        "\\[ A_n = \\begin{cases} 2 & (n = 6k) \\\\ 3 & (n = 6k+1) \\\\ 6 & (n = 6k+2) \\\\ 1 & (n = 6k+3) \\\\ 6 & (n = 6k+4) \\\\ 3 & (n = 6k+5) \\end{cases} \\]"
      ]
    }
  },
  {
    "year": 2022,
    "number": 4,
    "category": "理系",
    "content": {
      "question": "四面体 \\(OABC\\) が\n\\[ OA = 4, \\quad OB = AB = BC = 3, \\quad OC = AC = 2\\sqrt{3} \\]\nを満たしているとする。\\(P\\) を辺 \\(BC\\) 上の点とし、\\(\\triangle OAP\\) の重心を \\(G\\) とする。このとき、次の各問に答えよ。\n\n(1) \\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\) を示せ。\n(2) \\(P\\) が辺 \\(BC\\) 上を動くとき、\\(PG\\) の最小値を求めよ。",
      "hints": [
        "1. ベクトルの内積の性質を用いて、\\(\\overrightarrow{PG}\\) と \\(\\overrightarrow{OA}\\) の直交性を示す。",
        "2. 辺 \\(BC\\) 上の任意の点 \\(P\\) をパラメータ \\(t\\) を使って表現し、重心の公式を利用する。",
        "3. \\(PG\\) の長さを \\(t\\) の関数として求め、二次関数の頂点から最小値を算出する。"
      ],
      "solution": "（1）\\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\) であることを示し、（2）\\(PG\\) の最小値は \\(\\frac{4}{3}\\) である。",
      "detailedSolution": [
        "【(1) ベクトルによる解法】",
        "1. 各点の位置ベクトルを \\(\\overrightarrow{OA}\\), \\(\\overrightarrow{OB}\\), \\(\\overrightarrow{OC}\\) とする。与えられた条件から、\n\\[ \\left|\\overrightarrow{OA}\\right| = 4, \\quad \\left|\\overrightarrow{OB}\\right| = 3, \\quad \\left|\\overrightarrow{OC}\\right| = 2\\sqrt{3} \\]\nであり、また\n\\[ \\left|\\overrightarrow{OA} - \\overrightarrow{OB}\\right| = 3, \\quad \\left|\\overrightarrow{OA} - \\overrightarrow{OC}\\right| = 2\\sqrt{3}, \\quad \\left|\\overrightarrow{OC} - \\overrightarrow{OB}\\right| = 3 \\] \nが成り立つ。",
        "2. 余弦定理より、\n\\[ \\overrightarrow{OA} \\cdot \\overrightarrow{OB} = 8, \\quad \\overrightarrow{OA} \\cdot \\overrightarrow{OC} = 8 \\] \nが得られる。",
        "3. 辺 \\(BC\\) 上の任意の点 \\(P\\) は、\n\\[ \\overrightarrow{OP} = \\overrightarrow{OB} + t(\\overrightarrow{OC} - \\overrightarrow{OB}) \\quad (0 \\le t \\le 1) \\] \nと表される。",
        "4. 三角形 \\(OAP\\) の重心 \\(G\\) の位置ベクトルは\n\\[ \\overrightarrow{OG} = \\frac{1}{3}(\\overrightarrow{OA} + \\overrightarrow{OP}). \\]",
        "5. よって、\\(P\\) から \\(G\\) へのベクトルは\n\\[ \\overrightarrow{PG} = \\overrightarrow{OG} - \\overrightarrow{OP} = \\frac{1}{3}\\overrightarrow{OA} - \\frac{2}{3}\\overrightarrow{OP}. \\]",
        "6. \\(\\overrightarrow{OA}\\) との内積を計算すると、\n\\[ \\overrightarrow{PG} \\cdot \\overrightarrow{OA} = \\left(\\frac{1}{3}\\overrightarrow{OA} - \\frac{2}{3}\\overrightarrow{OP}\\right) \\cdot \\overrightarrow{OA}. \\]",
        "7. ここで、\n\\[ \\overrightarrow{OA} \\cdot \\overrightarrow{OP} = \\overrightarrow{OA} \\cdot \\overrightarrow{OB} + t(\\overrightarrow{OA} \\cdot \\overrightarrow{OC} - \\overrightarrow{OA} \\cdot \\overrightarrow{OB}) = 8. \\]\nしたがって、\n\\[ \\overrightarrow{PG} \\cdot \\overrightarrow{OA} = \\frac{16}{3} - \\frac{16}{3} = 0. \\]",
        "8. よって、\\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\) である。",
        "",
        "【(2) ベクトルを用いた解法】",
        "1. \\(\\overrightarrow{PG}\\) の長さを求めるため、\\(\\overrightarrow{PG} = \\frac{1}{3} \\overrightarrow{OA} - \\frac{2}{3} \\overrightarrow{OP}\\) の大きさを計算する。",
        "2. \\(\\overrightarrow{PG}\\) の大きさは、\n\\[ \\left|\\overrightarrow{PG}\\right|^2 = \\left|\\frac{1}{3} \\overrightarrow{OA} - \\frac{2}{3} \\overrightarrow{OP}\\right|^2. \\]\nこれを展開して整理すると、\n\\[ \\left|\\overrightarrow{PG}\\right|^2 = \\frac{4}{9} (9t^2 - 6t + 5). \\]",
        "3. 二次関数 \\(9t^2 - 6t + 5\\) の最小値を求めると、\\(t = \\frac{1}{3}\\) で最小値 4 となる。",
        "4. したがって、\n\\[ \\left|\\overrightarrow{PG}\\right|_{\\min}^2 = \\frac{16}{9}, \\quad \\left|\\overrightarrow{PG}\\right|_{\\min} = \\frac{4}{3}. \\]"
      ]
    }
  },
  {
    "year": 2022,
    "number": 5,
    "category": "理系",
    "content": {
        "question": "曲線 \\( C:y=\cos^3x \\) \\(\\displaystyle\\left( 0 \\leqq x \\leqq \\frac{\\pi}{2} \\right)\\)、 \\(x\\) 軸および \\(y\\) 軸で囲まれる図形の面積を \\(S\\) とする。\n\n \\(\\displaystyle 0 < t < \\frac{\\pi}{2}\\) とし、\n \\( C \\) 上の点 \\( Q(t, \\cos^3t) \\) と原点 \\( O \\)、および \\( P(t, 0) \\)、\\( R(0, \\cos^3t) \\) を頂点にもつ長方形 \\( OPQR \\) の面積を \\( f(t) \\) とする。\n\nこのとき、次の各問に答えよ。\n\n1. \\( S \\) を求めよ。\n\n2. \\( f(t) \\) は最大値をただ 1 つの \\( t \\) でとることを示せ。そのときの \\( t \\) を \\( \\alpha \\) とすると、 \\(\\displaystyle f(\\alpha)=\\frac{\\cos^4\\alpha}{3\\sin\\alpha}\\) であることを示せ。\n\n3. \\(\\displaystyle \\frac{f(\\alpha)}{S}<\\frac{9}{16}\\) を示せ。",
        
        "hints": [
            "1. \\( S \\) は積分 \\( \\int_0^{\\pi/2} \\cos^3 x \\,dx \\) で求める。",
            "2. \\( f(t) = t \\cos^3 t \\) の導関数 \\( f'(t) \\) を求め、その符号変化を調べる。",
            "3. \\( \\varphi(t) = \\cos t - 3t \\sin t \\) を考え、その単調性を示す。",
            "4. \\( \\frac{f(\\alpha)}{S} \\) の評価には \\( \\alpha \\) の範囲を \\( \\frac{\\pi}{6} < \\alpha < \\frac{\\pi}{4} \\) で挟む。",
            "5. \\( \\cos^4 \\alpha < \\frac{9}{16} \\) と \\( 2 \\sin \\alpha > 1 \\) を用いる。"
        ],

        "solution": "求める解答は次の通り。\n1. \\( S = \\frac{2}{3} \\)。",

        "detailedSolution": [
            "### 1. \\( S \\) の計算",
            "求める面積は、\n\\[ S = \\int_0^{\\pi/2} \\cos^3 x \\,dx. \\]\nこれを計算するため、置換 \\( u = \\sin x \\) を導入すると、\\( du = \\cos x \\,dx \\) である。",
            "また、\\( \\cos^3 x = (1 - u^2) \\cos x \\) なので、\n\\[ S = \\int_0^1 (1 - u^2) \\, du. \\]",
            "この積分を計算すると、\n\\[ S = \\left[ u - \\frac{u^3}{3} \\right]_0^1 = \\left( 1 - \\frac{1}{3} \\right) - (0 - 0) = \\frac{2}{3}. \\]",

            "### 2. \\( f(t) \\) の最大値の存在とその表現",
            "長方形の面積は \\( f(t) = t \\cos^3 t \\) であり、導関数は\n\\[ f'(t) = \\cos^3 t - 3t \\cos^2 t \\sin t. \\]\nこれを \\( \\cos^2 t \\) で因数分解すると、\n\\[ f'(t) = \\cos^2 t (\\cos t - 3t \\sin t). \\]",
            "ここで \\( \\varphi(t) = \\cos t - 3t \\sin t \\) を考えると、その導関数は\n\\[ \\varphi'(t) = -4 \\sin t - 3t \\cos t < 0. \\]\nしたがって、\\( \\varphi(t) \\) は単調減少である。\nまた、\n\\[ \\varphi(0) = 1 > 0, \\quad \\varphi(\\pi/2) = -\\frac{3\\pi}{2} < 0. \\]\nよって、\\( \\varphi(t) = 0 \\) となる \\( \\alpha \\) がただ 1 つ存在し、\\( f(t) \\) は \\( t=\\alpha \\) で最大値をとる。",
            "最大値の条件 \\( 3 \\alpha \\sin \\alpha = \\cos \\alpha \\) より、\n\\[ f(\\alpha) = \\frac{\\cos^4 \\alpha}{3 \\sin \\alpha}. \\]",

            "### 3. \\( \\frac{f(\\alpha)}{S} < \\frac{9}{16} \\) の証明",
            "面積比は\n\\[ \\frac{f(\\alpha)}{S} = \\frac{\\cos^4 \\alpha}{2 \\sin \\alpha}. \\]\n\\( \\alpha \\) の範囲を評価するため、 \\( f'(t) \\) の符号変化を見ると、\n\\[ f'\\left( \\frac{\\pi}{6} \\right) > 0, \\quad f'\\left( \\frac{\\pi}{4} \\right) < 0. \\]\nよって、\n\\[ \\frac{\\pi}{6} < \\alpha < \\frac{\\pi}{4}. \\]",
            "この範囲において、\n\\[ \\cos^4 \\alpha < \\left( \\frac{\\sqrt{3}}{2} \\right)^4 = \\frac{9}{16}, \\quad 2 \\sin \\alpha > 1. \\]\nしたがって、\n\\[ \\frac{f(\\alpha)}{S} = \\frac{\\cos^4 \\alpha}{2 \\sin \\alpha} < \\frac{9}{16}. \\]",
            "これで不等式が示された。"
        ]
    }
  }
];

export default Rikei2022;