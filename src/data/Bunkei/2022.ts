import { Problem } from "../../types";

export const Bunkei2022: Problem[] = [
  {
    year: 2022,
    number: 1,
    category: "文系",
    content: {
      question: "次の不等式を示せ。\\[5.4 < \\log_4 2022 < 5.5\\] ただし、\\(0.301 < \\log_{10}2 < 0.3011\\) であることを用いてよい。",
      hints: [
        "対数の底変換公式 \\(\\log_4 2022 = \\frac{\\log_2 2022}{2}\\) を用いる。",
        "上側は \\(2022 < 2^{11}\\) を利用し、下側は \\(\\log_{10}2022 > \\log_{10}2000\\) と与えられた条件を使用する。"
      ],
      solution: "与えられた条件を用いて、\\(5.4 < \\log_4 2022 < 5.5\\) が成立することを示す。",
      detailedSolution: [
        "まず、底変換公式より",
        "\\[\\log_4 2022 = \\frac{\\log_2 2022}{\\log_2 4} = \\frac{\\log_2 2022}{2}.\\]",
        "これより",
        "\\[5.4 < \\log_4 2022 < 5.5 \\iff 10.8 < \\log_2 2022 < 11.\\]",
        "",
        "【上側の証明】",
        "\\(2^{11} = 2048\\) であり、\\(2022 < 2048\\) より、\\(\\log_2 2022 < 11\\) が成り立つ。",
        "",
        "【下側の証明】",
        "\\(10.8 < \\log_2 2022\\) を示すために、両辺に \\(\\log_{10}2\\) を掛けると",
        "\\[10.8 \\cdot \\log_{10}2 < \\log_{10}2022.\\]",
        "与えられた条件から",
        "\\[10.8 \\cdot \\log_{10}2 < 10.8 \\times 0.3011 = 3.25188.\\]",
        "また、\\(2022 > 2000\\) であり",
        "\\[\\log_{10}2022 > \\log_{10}2000 = \\log_{10}2 + 3 > 0.301 + 3 = 3.301.\\]",
        "よって",
        "\\[10.8 \\cdot \\log_{10}2 < 3.25188 < 3.301 < \\log_{10}2022\\]",
        "が成り立ち、\\(10.8 < \\log_2 2022\\) が示された。",
        "",
        "これにより、",
        "\\[10.8 < \\log_2 2022 < 11\\] が成立し、最終的に",
        "\\[5.4 < \\log_4 2022 < 5.5\\] を示すことができた。"
      ]
    }
  },
  {
    "year": 2022,
    "number": 2,
    "category": "文系",
    "content": {
      "question": "三角柱 \\( ABC-DEF \\) において、\\( A \\) を始点として辺に沿って頂点を \\( n \\) 回移動する。この移動経路 \n\\[ P_0 \\to P_1 \\to P_2 \\to \\cdots \\to P_{n-1} \\to P_n \\hspace{1em}(\\text{ただし } P_0=A) \\] \nにおいて、\\( P_0P_1, \\, P_1P_2, \\, \\cdots, \\, P_{n-1}P_n \\) はすべて辺であるとする。また、同じ頂点を何度通ってもよいものとする。\nこのような移動経路で、終点 \\( P_n \\) が \\( A, \\, B, \\, C \\) のいずれかとなるものの総数 \\( a_n \\) を求めよ。",
      "hints": [
        "三角柱の底面と上面の頂点間の移動ルールを確認してください。",
        "\\( a_n \\) と \\( b_n \\) の漸化式を立ててみましょう。",
      ],
      "solution": "\\[ a_n = \\frac{1 + 3^n}{2} \\]",
      "detailedSolution": [
        "まず、三角柱の構造を考えます。底面 \\( ABC \\) と上面 \\( DEF \\) があり、それぞれの頂点間には3本の辺が接続されています。各頂点からは底面または上面内の2頂点、およびもう一方の面の対応する頂点に移動できます。",
        "移動回数 \\( n \\) 回後に終点が \\( A, B, C \\) のいずれかである経路の総数を \\( a_n \\)、\\( D, E, F \\) のいずれかである経路の総数を \\( b_n \\) と定義します。このとき、漸化式は以下のようになります：\n\\[ a_n = 2a_{n-1} + b_{n-1}, \\quad b_n = a_{n-1} + 2b_{n-1} \\]\n初期条件は \\( a_0 = 1, b_0 = 0 \\) です。",
        "漸化式を解くために、線形結合 \\( a_n + \\alpha b_n \\) を考えます。この線形結合を漸化式に適用すると：\n\\[ a_n + \\alpha b_n = (2 + \\alpha)a_{n-1} + (1 + 2\\alpha)b_{n-1} \\]\nこれが \\( \\lambda(a_{n-1} + \\alpha b_{n-1}) \\) の形になるように、\\( \\alpha \\) を決定します。",
        "条件式 \\[ 2 + \\alpha = \\lambda, \\quad 1 + 2\\alpha = \\lambda \\alpha \\] を解くと、\\( \\alpha = 1 \\) または \\( \\alpha = -1 \\) となります。\n- \\( \\alpha = 1 \\) の場合、\\( a_n + b_n \\) の漸化式は \\[ a_n + b_n = 3(a_{n-1} + b_{n-1}) \\] となり、一般解は \\[ a_n + b_n = 3^n \\] です。\n- \\( \\alpha = -1 \\) の場合、\\( a_n - b_n \\) の漸化式は \\[ a_n - b_n = a_{n-1} - b_{n-1} \\] となり、一般解は \\[ a_n - b_n = 1 \\] です。",
        "\\( a_n + b_n = 3^n \\) と \\( a_n - b_n = 1 \\) を連立して解くと、\n\\[ a_n = \\frac{3^n + 1}{2}, \\quad b_n = \\frac{3^n - 1}{2} \\] が得られます。",
        "求める終点が \\( A, B, C \\) のいずれかとなる経路の総数は、\n\\[ a_n = \\frac{1 + 3^n}{2} \\] です。"
      ]
    }
  }
,  
  {
    year: 2022,
    number: 3,
    category: "文系",
    content: {
      question: "xy平面上の2直線\\(L_1, L_2\\)は直交し，交点の\\(x\\)座標は\\(\\displaystyle\\frac{3}{2}\\)である。 また，\\(L_1, L_2\\)はともに曲線\\(\\displaystyle C:y=\\frac{x^2}{4}\\)に接している。このとき，\\(L_1, L_2\\)および\\(C\\)で囲まれる図形の面積を求めよ。",
      hints: [
        "放物線\\(C: y = \\frac{x^2}{4}\\)の任意の点\\((a, \\frac{a^2}{4})\\)における接線の傾きは\\(\\frac{a}{2}\\)である。",
        "接線の方程式を求め、直交条件を用いて係数を決定する。",
        "求めた直線と放物線との交点から面積を積分により求める。"
      ],
      solution: "\\(\\dfrac{125}{48}\\)",
      "detailedSolution": [
        "1. 接線の方程式を求める:\n  放物線\\(C: y = \\frac{x^2}{4}\\)の任意の点\\((a, \\frac{a^2}{4})\\)における接線の傾きは\\(\\frac{a}{2}\\)である。接線の方程式は\\(y - \\frac{a^2}{4} = \\frac{a}{2}(x - a)\\)、整理すると\\(y = \\frac{a}{2}x - \\frac{a^2}{4}\\)となる。\n",
        "2. 直交条件を用いて\\(a\\)と\\(b\\)の関係式を得る:\n 2直線\\(L_1, L_2\\)は直交するため、傾きの積が\\(-1\\)となる。すなわち、\\(\\frac{a}{2} \\cdot \\frac{b}{2} = -1\\)より\\(ab = -4\\)が得られる。\n",
        "3. 交点の条件から\\(a\\)と\\(b\\)の別の関係式を得る:\n 交点の\\(x\\)座標が\\(\\frac{3}{2}\\)であるため、\\(L_1\\)と\\(L_2\\)は\\(x=\\frac{3}{2}\\)において同じ\\(y\\)座標を持つ。すなわち、\\(\\frac{3a - a^2}{4} = \\frac{3b - b^2}{4}\\)、これより\\(a + b = 3\\)が得られる。\n",
        "4. \\(a\\)と\\(b\\)の具体値を求める:\n \\(a + b = 3\\)と\\(ab = -4\\)を連立して解くと、\\(a=4\\), \\(b=-1\\)となる。\n",
        "5. 直線の方程式を決定する:\n よって、\\(L_1\\)の方程式は\\(y = 2x - 4\\)、\\(L_2\\)の方程式は\\(y = -\\frac{1}{2}x - \\frac{1}{4}\\)である。\n",
        "6. 面積を求める:\n 面積は\\(\\int_{-1}^{\\frac{3}{2}} \\left( \\frac{x^2}{4} - \\left( -\\frac{1}{2}x - \\frac{1}{4} \\right) \\right) dx + \\int_{\\frac{3}{2}}^{4} \\left( \\frac{x^2}{4} - (2x - 4) \\right) dx\\)で求められ、計算すると\\(\\frac{125}{48}\\)となる。"
      ]
    }
  },
  {
    "year": 2022,
    "number": 4,
    "category": "文系",
    "content": {
      "question": "直線\\(L: ax + by = 1\\)と曲線\\(y = -\\frac{1}{x}\\)との2つの交点のうち、\\(y\\)座標が正のものを\\(P\\)、負のものを\\(Q\\)とする。また、\\(L\\)と\\(x\\)軸との交点を\\(R\\)とし、\\(L\\)と\\(y\\)軸との交点を\\(S\\)とする。\\(a, b\\)が条件\n\\[ \\frac{PQ}{RS} = \\sqrt{2} \\]\nを満たしながら動くとき、線分\\(PQ\\)の中点の軌跡を求めよ。",
      "hints": [
        "直線\\(L: ax + by = 1\\)と曲線\\(y = -\\frac{1}{x}\\)を連立して交点\\(P, Q\\)を求める。",
        "直線\\(L\\)と\\(x\\)軸および\\(y\\)軸との交点\\(R, S\\)を求め、距離\\(RS\\)を計算する。",
        "分母を有理化した形で、交点\\(P, Q\\)の\\(y\\)-座標を表現する。",
        "条件\\(\\frac{PQ}{RS} = \\sqrt{2}\\)を用いて\\(a, b\\)の関係式を導く。",
        "線分\\(PQ\\)の中点の座標を求め、条件を適用して軌跡を得る。"
      ],
      "solution": "双曲線\\(xy = 1\\)の第1象限部分",
      "detailedSolution": [
        "1. \\(P, Q\\)の座標を求める:\n   直線\\(L: ax + by = 1\\)と曲線\\(y = -\\frac{1}{x}\\)を連立すると、\n   \\[ ax - \\frac{b}{x} = 1 \\]\n   両辺を\\(x\\)倍して整理すると、\n   \\[ a x^2 - x - b = 0. \\]\n   この二次方程式の解は\n   \\[ x = \\frac{1 \\pm \\sqrt{1 + 4ab}}{2a}. \\]\n   よって、交点\\(P, Q\\)の\\(x\\)-座標はそれぞれ\\(\\frac{1 - \\sqrt{1 + 4ab}}{2a}\\)と\\(\\frac{1 + \\sqrt{1 + 4ab}}{2a}\\)であり、\\(y\\)-座標は\\(y = -\\frac{1}{x}\\)で与えられる。\n",
        "2. 分母の有理化:\n   \\(y = -\\frac{1}{x}\\)により、\\(P, Q\\)の\\(y\\)-座標は\n   \\[ y = -\\frac{2a}{1 \\pm \\sqrt{1 + 4ab}}. \\]\n   分母を有理化すると\n   \\[ y = \\frac{2a(\\sqrt{1 + 4ab} \\mp 1)}{4ab}. \\]\n   よって、\\(P, Q\\)の\\(y\\)-座標はそれぞれ\n   \\[ y_P = \\frac{\\sqrt{1 + 4ab} - 1}{2b}, \\quad y_Q = \\frac{-\\sqrt{1 + 4ab} - 1}{2b}. \\]\n",
        "3. 距離\\(RS\\)を求める:\n   点\\(R\\)は\\(x\\)軸との交点なので\\(R = \\left(\\frac{1}{a}, 0\\right)\\)、\\(S\\)は\\(y\\)軸との交点なので\\(S = \\left(0, \\frac{1}{b}\\right)\\)。\n   距離\\(RS\\)は\n   \\[ RS = \\sqrt{\\left(\\frac{1}{a}\\right)^2 + \\left(\\frac{1}{b}\\right)^2}. \\]\n",
        "4. 距離\\(PQ\\)を求める:\n   \\(PQ\\)の距離は、交点\\(P, Q\\)の座標を用いて計算すると\n   \\[ PQ = \\sqrt{(x_P - x_Q)^2 + (y_P - y_Q)^2}. \\]\n   詳しく計算すると、\n   \\[ PQ = \\sqrt{1 + 4ab} \\cdot \\sqrt{\\frac{1}{a^2} + \\frac{1}{b^2}}. \\]\n",
        "5. 条件\\(\\frac{PQ}{RS} = \\sqrt{2}\\)を適用する:\n   \\(\\frac{PQ}{RS} = \\sqrt{2}\\)より、\n   \\[ \\sqrt{1 + 4ab} = \\sqrt{2}, \\]\n   これを解くと\\(ab = \\frac{1}{4}\\)が得られる。\n",
        "6. 中点の座標を求める:\n   \\(PQ\\)の中点\\(M\\)の座標は\n   \\[ M = \\left( \\frac{x_P + x_Q}{2}, \\frac{y_P + y_Q}{2} \\right). \\]\n   \\(x_P + x_Q = \\frac{1}{a}\\), \\(y_P + y_Q = \\frac{1}{b}\\)より、\n   \\[ M = \\left( \\frac{1}{2a}, \\frac{1}{2b} \\right). \\]\n   ここで\\(ab = \\frac{1}{4}\\)を用いると、\\(b = \\frac{1}{4a}\\)となり、\\(M\\)の座標は\n   \\[ M = \\left( \\frac{1}{2a}, 2a \\right). \\]\n",
        "7. 軌跡を求める:\n   \\(M = (X, Y)\\)とおくと\\(X = \\frac{1}{2a}, Y = 2a\\)であり、\\(X \\cdot Y = 1\\)が成り立つ。したがって、\\(M\\)の軌跡は\n   \\[ xy = 1 \\quad (x > 0, y > 0) \\]\n   で表される。"
      ]
    }
  },
  {
    "year": 2022,
    "number": 5,
    "category": "文系",
    "content": {
        "question": "四面体\\(OABC\\)が\\(OA=4,\\ OB=AB=BC=3,\\ OC=AC=2\\sqrt{3}\\)を満たしているとする。\\(P\\)を辺\\(BC\\)上の点とし、\\(\\triangle OAP\\)の重心を\\(G\\)とする。このとき、次の各問に答えよ。\n(1) \\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\)を示せ。\n(2) \\(P\\)が辺\\(BC\\)上を動くとき、\\(PG\\)の最小値を求めよ。",
        "hints": [
            "ベクトルの始点を点\\(B\\)にとり、\\(\\vec{b} = \\overrightarrow{BO},\\ \\vec{a} = \\overrightarrow{BA},\\ \\vec{c} = \\overrightarrow{BC}\\)として整理する。",
            "点\\(P\\)を\\(\\vec{p} = k\\vec{c}\\ (0 \\leq k \\leq 1)\\)とおく。",
            "三角形\\(\\triangle OAP\\)の重心\\(G\\)を\\(\\overrightarrow{BG} = \\frac{1}{3}(\\overrightarrow{BA} + \\overrightarrow{BP} + \\overrightarrow{BO})\\)で表す。",
            "ベクトル\\(\\overrightarrow{PG}\\)を\\(\\overrightarrow{BG} - \\overrightarrow{BP}\\)として計算する。",
            "内積\\(\\overrightarrow{PG} \\cdot \\overrightarrow{OA}\\)を計算し、直交条件を確認する。",
            "\\(PG = \\frac{1}{3}|\\vec{a} + \\vec{b} - 2k\\vec{c}|\\)の形で表し、最小値を求める。"
        ],
        "solution": "点\\(P\\)が辺\\(BC\\)上を動くとき、\\(PG\\)の最小値は\\(\\frac{4}{3}\\)。",
        "detailedSolution": [
            "1. ベクトルの設定:\n   点\\(B\\)を基準にベクトル\\(\\vec{b} = \\overrightarrow{BO},\\ \\vec{a} = \\overrightarrow{BA},\\ \\vec{c} = \\overrightarrow{BC}\\)を設定し、\n   \n   \\[ |\\vec{b}| = |\\vec{a}| = |\\vec{c}| = 3,\\ \\vec{a} \\cdot \\vec{b} = 1,\\ \\vec{b} \\cdot \\vec{c} = 3,\\ \\vec{a} \\cdot \\vec{c} = 3 \\]\n   を計算する。",
            "2. 点\\(P\\)と重心\\(G\\)の表現:\n   点\\(P\\)を\\(\\vec{p} = k\\vec{c}\\ (0 \\leq k \\leq 1)\\)とおく。すると\n   \\[ \\overrightarrow{BP} = k\\vec{c}, \\quad \\overrightarrow{BO} = \\vec{b}, \\quad \\overrightarrow{BA} = \\vec{a}. \\]\n   三角形\\(\\triangle OAP\\)の重心\\(G\\)は\n   \\[ \\overrightarrow{BG} = \\frac{1}{3}(\\overrightarrow{BO} + \\overrightarrow{BA} + \\overrightarrow{BP}) \\]\n   より\n   \\[ \\overrightarrow{BG} = \\frac{1}{3}(\\vec{b} + \\vec{a} + k\\vec{c}). \\]\n   よって\n   \\[ \\overrightarrow{PG} = \\overrightarrow{BG} - \\overrightarrow{BP} = \\frac{1}{3}(\\vec{b} + \\vec{a} + k\\vec{c}) - k\\vec{c} = \\frac{1}{3}(\\vec{b} + \\vec{a} - 2k\\vec{c}). \\]",
            "3. (1) \\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\)を示す:\n   \\(\\overrightarrow{OA} = \\vec{a} - \\vec{b}\\)を用いて、内積\n   \\[ \\overrightarrow{PG} \\cdot \\overrightarrow{OA} = \\frac{1}{3}((\\vec{a} + \\vec{b} - 2k\\vec{c}) \\cdot (\\vec{a} - \\vec{b})). \\]\n   各項を展開すると、\\((\\vec{a} + \\vec{b}) \\cdot (\\vec{a} - \\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2 = 9 - 9 = 0\\) となり、\\(-2k\\vec{c} \\cdot (\\vec{a} - \\vec{b})\\) も計算して 0 となる。したがって内積全体が 0 となり、\\(\\overrightarrow{PG} \\perp \\overrightarrow{OA}\\) が示される。",
            "4. (2) \\(PG\\)の最小値を求める:\n   \\(PG = \\frac{1}{3}|\\vec{a} + \\vec{b} - 2k\\vec{c}|\\)より、\n   二次関数\\(F(k) = |\\vec{a} + \\vec{b} - 2k\\vec{c}|^2\\)を展開して\n   \\[ F(k) = 36k^2 - 24k + 20 \\]\n   とする。\n   頂点\\(k = \\frac{1}{3}\\)で最小値\\(F(\\frac{1}{3}) = 16\\)をとるので、\n   \\(PG = \\frac{1}{3}\\sqrt{16} = \\frac{4}{3}\\)。"
        ]
    }
  }
];

export default Bunkei2022;
