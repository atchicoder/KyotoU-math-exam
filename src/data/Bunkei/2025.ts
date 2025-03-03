import { Problem } from "../../types";

export const Bunkei2025: Problem[] = [
  {
    year: 2025,
    number: 1,
    category: "文系",
    content: {
      question: 
        "（1）実数 \\(x, y, z\\) が\n" +
        "\\[ 2025^x = 3^y = 5^z \\]\n" +
        "を満たすとき、次の等式が成り立つことを示せ。\n" +
        "\\[ 2xy + 4xz - yz = 0. \\]\n\n" +
        "（2）正の整数 \\( n \\) に対して、多項式\n" +
        "\\[ n^4 + 6n^2 + 23 \\]\n" +
        "が \\( n^2 + n + 3 \\) で割り切れるようなすべての整数 \\( n \\) を求めよ。",
      hints: [
        "（1）2025 を素因数分解し、与えられた式を対数を用いて整理する。",
        "（1）共通の値 \\( K \\) を用いて \\( y \\) と \\( z \\) を \\( x \\) の式で表す。",
        "（1）式 \\( 2xy + 4xz - yz \\) に代入し、計算する。",
        "（2）多項式の割り算を考え、商と余りを求める。",
        "（2）余りが 0 になる条件を求める。",
        "（2）割り切れる条件を満たす整数 \\( n \\) を列挙する。"
      ],
      solution: {
        "(1)": "与えられた条件のもとで \\( y \\) と \\( z \\) を \\( x \\) の式で表し、計算すると \\( 2xy + 4xz - yz = 0 \\) が成り立つ。",
        "(2)": "求める整数 \\( n \\) は \\( n = 1, 2, 11 \\) である。"
      },
      detailedSolution: [
        "【（1）の解答】",
        "1. 2025 を素因数分解すると、\n   \\[ 2025 = 45^2 = (3^2 \\cdot 5)^2 = 3^4 \\cdot 5^2. \\]",
        "   これを用いると、\n   \\[ 2025^x = (3^4 \\cdot 5^2)^x = 3^{4x} \\cdot 5^{2x}. \\]",
        "   共通の値を \\( K \\) とおくと、\n   \\[ 3^{4x} \\cdot 5^{2x} = 3^y = 5^z = K. \\]",
        "2. 対数をとり、\\( 3 \\) と \\( 5 \\) の指数を比較すると、\n   \\[ 4x = y, \\quad 2x = z. \\]",
        "   したがって、\n   \\[ y = 4x, \\quad z = 2x. \\]",
        "3. 与えられた式 \\( 2xy + 4xz - yz \\) に代入すると、\n   \\[ 2x(4x) + 4x(2x) - (4x)(2x). \\]",
        "   計算すると、\n   \\[ 8x^2 + 8x^2 - 8x^2 = 0. \\]",
        "4. したがって、\n   \\[ 2xy + 4xz - yz = 0 \\] が示された。",
        "",
        "【（2）の解答】",
        "1. \\( n^4 + 6n^2 + 23 \\) を \\( n^2 + n + 3 \\) で割る。",
        "   商は \\( n^2 - n + 4 \\) で、割り算を行うと余りが",
        "   \\[ 11 - n. \\]",
        "2. ここで、「割り切れる」とは、多項式としての余りが 0 になる場合だけでなく、整数 \\( n \\) に対して \\( n^2 + n + 3 \\) が \\( 11 - n \\) を割る場合も考える。",
        "   すなわち、\\( n^2 + n + 3 \\) が \\( 11 - n \\) の約数である場合にも割り切れるとみなす。",
        "3. \\( n^2 + n + 3 \\leq 11 - n \\) を満たす整数 \\( n \\) の範囲を考える。",
        "   不等式を整理すると、\n   \\[ n^2 + 2n + 3 \\leq 11 \\]\n   これを変形すると、\n   \\[ n^2 + 2n - 8 \\leq 0. \\]",
        "   因数分解すると、\n   \\[ (n - 2)(n + 4) \\leq 0. \\]",
        "   よって、\\( -4 \\leq n \\leq 2 \\) だが、正の整数 \\( n \\) なので \\( n \\leq 2 \\) の範囲を考える。",
        "4. 実際に \\( n = 1, 2 \\) で \\( n^2 + n + 3 \\) が \\( 11 - n \\) を割ることを確認する。",
        "   - \\( n = 1 \\) のとき: \\( n^2 + n + 3 = 1 + 1 + 3 = 5 \\), \\( 11 - n = 10 \\) → \\( 5 \\) は \\( 10 \\) の約数。",
        "   - \\( n = 2 \\) のとき: \\( n^2 + n + 3 = 4 + 2 + 3 = 9 \\), \\( 11 - n = 9 \\) → 割り切れる。",
        "5. また、\\( 11 - n = 0 \\) となる \\( n = 11 \\) も条件を満たす。",
        "6. したがって、求める整数 \\( n \\) は\n   \\[ n = 1, 2, 11. \\]"
      ]
    }
  },
  {
    "year": 2025,
    "number": 2,
    "category": "文系",
    "content": {
      "question": "実数 \\(a,b\\) について次の条件 (*) を考える。\n (*) \\(~\\) ある実数係数の2次式 \\(f(x)\\) と、ある実数 \\(c\\) に対して、\\(x\\) についての恒等式\n\\[ \\frac{1}{8}x^4+ax^3+bx^2=f(f(x))+c \\]\nが成り立つ。\nこの条件 (*) を満たす点 \\((a,b)\\) 全体の集合を座標平面上に図示せよ。",
      "hints": [
        "1. \\(f(x)\\) を一般形 \\(Ax^2+Bx+C\\) とおき、\\(f(f(x))\\) を展開して各次数の係数を比較する。",
        "2. \\(x^4\\) 項から \\(A^3=\\frac{1}{8}\\) として \\(A=\\frac{1}{2}\\) を求め、\\(x^3\\) 項で \\(2A^2B=a\\) より \\(B=2a\\) を導く。",
        "3. \\(x\\) の項の係数比較から \\(2ABC+B^2=B(C+B)=0\\) となるので、\\(B=0\\) または \\(C=-B\\) の場合分けを行う。",
        "4. それぞれの場合に対して \\(x^2\\) 項の係数から \\(b\\) を求め、解の集合を求める。"
      ],
      "solution": "座標平面上では、\\(a=0\\) の直線と、\\(b=2a^2\\) という放物線",
      "detailedSolution": [
        "1. \\(f(x)\\) を \\(Ax^2+Bx+C\\) と置く。\n",
        "2. \\(f(f(x))\\) を展開すると、\\(x^4, x^3, x^2, x, 定数\\) の各項が現れるので恒等式の係数を比較する。\n",
        "3. \\(x^4\\) の項から \\(A^3=\\frac{1}{8}\\) なので、\\(A=\\frac{1}{2}\\)。\n",
        "4. \\(x^3\\) の項は \\(2A^2B=2(\\frac{1}{2})^2B=\\frac{1}{2}B\\) であるため、\\(\\frac{1}{2}B=a\\) から \\(B=2a\\)。\n",
        "5. \\(x\\) の項の係数は \\(2ABC+B^2\\) で、これが 0 になることから \\(B(C+B)=0\\) となる。\n",
        "6. \\(B(C+B)=0\\) より、\\(B=0\\) または \\(C=-B\\) の場合に分ける。\n",
        "【場合 1】 \\(B=0\\) の場合：",
        "　　\\(B=0\\) なので \\(a=0\\)。\\(x^2\\) の項は \\(2A^2C=\\frac{1}{2}C=b\\) から \\(C=2b\\) となる。したがって、解は \\((a,b)=(0,b)\\) （\\(b\\) は任意の実数）。\n",
        "【場合 2】 \\(C=-B\\) の場合：",
        "　　\\(C=-B=-2a\\) として、\\(x^2\\) の項の係数は \\(2A^2C+AB^2+AB\\) である。\\(A=\\frac{1}{2}\\) と \\(B=2a\\) を代入すると、",
        "　  \\(2(\\frac{1}{4})(-2a)+(\\frac{1}{2})(4a^2)+(\\frac{1}{2})(2a)=-a+2a^2+a=2a^2\\) となり、\\(b=2a^2\\) となる。すなわち解は \\((a,b)=(a,2a^2)\\)。\n",
        "7. よって、条件 (*) を満たす \\((a,b)\\) 全体の集合は",
        "  \\(\\{(0,b) \\mid b\\in\\mathbb{R}\\} \\cup \\{(a,2a^2) \\mid a\\in\\mathbb{R}\\}\\) である。",
        "8. 座標平面上では、\\(a=0\\) の直線と、\\(b=2a^2\\) という放物線が描かれる。\n(図示する機能がないので、図示は省略)\n"
      ]
    }
  },
  {
    "year": 2025,
    "number": 3,
    "category": "文系",
    "content": {
        "question": "正の整数 \\( n \\) を用いて、1 枚の硬貨を投げ、表が出たら 1、裏が出たら 2 を記録する。この試行を \\( n \\) 回繰り返し、記録された順に数字を左から並べて \\( n \\) 桁の数 \\( X \\) を作る（十進法とする）。このとき、\\( X \\) が 6 で割り切れる確率を求めよ。",
        "hints": [
            "1. \\( X \\) が 6 で割り切れるためには、2 で割り切れ、かつ 3 で割り切れる必要がある。",
            "2. 2 で割り切れる条件は、右端の桁が 2 であること。",
            "3. 3 で割り切れる条件は、桁の合計が 3 の倍数であること。",
            "4. \\( n \\) 回の試行で得られる桁の合計が 3 の倍数である確率 \\( a_n \\)、3 で割ると 1 余る確率 \\( b_n \\)、3 で割ると 2 余る確率 \\( c_n \\) を考え、それぞれの漸化式を立てる。",
            "5. \\( b_n \\) の漸化式を変形し、一般項を求める。",
            "6. 右端が 2 である確率と組み合わせて、求める確率を求める。"
        ],
        "solution": "求める確率は \\( \\frac{1}{6} \\left( 1 - \\left(-\\frac{1}{2}\\right)^{n-1} \\right) \\) である。",
        "detailedSolution": [
            "### 1. 6 で割り切れる条件",
            " \\( X \\) が 6 で割り切れるためには、2 で割り切れ、かつ 3 で割り切れる必要がある。",
            " 2 で割り切れるためには、右端の桁が 2 であること。",
            " 3 で割り切れるためには、桁の合計が 3 の倍数であること。",
            " 右端の桁が 2 になる確率は 1/2 であるため、求める確率は",
            " \\[ P_n = \\frac{1}{2} b_{n-1}. \\]",
            "",
            "### 2. 桁の合計に関する確率の漸化式",
            " \\( n \\) 回の試行で得られる桁の合計が",
            " 3 の倍数になる確率を \\( a_n \\)",
            " 3 で割ると 1 余る確率を \\( b_n \\)",
            " 3 で割ると 2 余る確率を \\( c_n \\)",
            " とすると、次の漸化式が成り立つ。",
            " \\[ a_{n+1} = \\frac{1}{2} (b_n + c_n), \\]",
            " \\[ b_{n+1} = \\frac{1}{2} (a_n + c_n), \\]",
            " \\[ c_{n+1} = \\frac{1}{2} (a_n + b_n). \\]",
            " また、すべての確率の合計は 1 であるため、",
            " \\[ a_n + b_n + c_n = 1. \\]",
            "",
            "### 3. \\( b_n \\) の漸化式の変形",
            " \\( b_{n+1} \\) の漸化式を変形すると、",
            " \\[ b_{n+1} - \\frac{1}{3} = -\\frac{1}{2} (b_n - \\frac{1}{3}). \\]",
            " ここで、\\( x_n = b_n - \\frac{1}{3} \\) とおくと、",
            " \\[ x_{n+1} = -\\frac{1}{2} x_n. \\]",
            " 初期条件 \\( b_0 = 0 \\) から \\( x_0 = -\\frac{1}{3} \\) である。",
            " したがって、この漸化式の一般解は",
            " \\[ x_n = -\\frac{1}{3} \\left(-\\frac{1}{2}\\right)^n. \\]",
            " これを元に戻すと、",
            " \\[ b_n = \\frac{1}{3} \\left( 1 - \\left(-\\frac{1}{2}\\right)^n \\right). \\]",
            "",
            "### 4. 求める確率の計算",
            " 右端が 2 である確率は 1/2 であり、さらに \\( n-1 \\) 回の試行で合計が 3 で割ると 1 余る確率は \\( b_{n-1} \\) である。",
            " したがって、求める確率は",
            " \\[ P_n = \\frac{1}{2} b_{n-1}. \\]",
            " これに先ほど求めた一般項を代入すると、",
            " \\[ P_n = \\frac{1}{2} \\times \\frac{1}{3} \\left( 1 - \\left(-\\frac{1}{2}\\right)^{n-1} \\right). \\]",
            " よって、",
            " \\[ \\boxed{ P_n = \\frac{1}{6} \\left( 1 - \\left(-\\frac{1}{2}\\right)^{n-1} \\right) }. \\]"
        ]
    }
  },
  {
    "year": 2025,
    "number": 4,
    "category": "文系",
    "content": {
      "question": "座標平面において、曲線 \\(C_1: y = x^2 - 2\\lvert x\\rvert\\)、曲線 \\(C_2: y = x^2 - 5x + \\frac{7}{4}\\)、直線 \\(l_1: x = \\frac{3}{2}\\) を考える。\n \\( (1) \\) 点 \\((0,0)\\) と異なる点で \\(C_1\\) と接し、さらに \\(C_2\\) とも接するような直線 \\(l_2\\) がただ 1 つ存在することを示せ。\n \\( (2) \\) \\(C_1\\) と \\(l_2\\) の共有点を \\(P\\) とし、その \\(x\\) 座標を \\(\\alpha\\) とする。また \\(l_1\\) と \\(l_2\\) の共有点を \\(Q\\)、\\(C_1\\) と \\(l_1\\) の共有点を \\(R\\) とする。曲線 \\(C_1\\) の \\(\\alpha \\leq x \\leq \\frac{3}{2}\\)の部分、線分 \\(PQ\\)、および線分 \\(QR\\) で囲まれる図形の面積を求めよ。",
      "hints": [
        "1. 曲線 \\(C_1\\) は \\( x \\ge 0 \\) のとき \\(y = x^2 - 2x\\)、\\( x < 0 \\) のとき \\(y = x^2 + 2x\\) に分かれる。",
        "2. \\(C_1\\) 上の一般点を \\((a, f(a))\\) として接線の方程式を立て、\\(C_2\\) にも接するための判別式が 0 になる条件を調べる。",
        "3. \\( x \\ge 0 \\) 側と \\( x < 0 \\) 側でそれぞれ接線を求め、そのうち \\( (0,0) \\) 以外で接するものが一意に決まることを示す。",
        "4. \\(C_1\\) と \\(l_2\\) の共有点 \\(P\\) の座標を \\(\\alpha\\) として求め、あとは区間 \\( \\alpha \\le x \\le \\frac{3}{2} \\) を 2 つに分割し（\\( x < 0 \\) と \\( x \\ge 0 \\)）、曲線と直線の差を積分する。"
      ],
      "solution": "直線 \\(l_2\\) は \\( y = -x - \\frac{9}{4} \\) であり、\\( \\alpha = -\\frac{3}{2} \\)。面積は \\( \\frac{9}{2} \\) となる。",
      "detailedSolution": [
        "### (1) ただ 1 つの直線 \\(l_2\\) の存在証明",
        "曲線 \\(C_1\\) は \\( x \\ge 0 \\) のとき \\(y = x^2 - 2x\\)、\\( x < 0 \\) のとき \\(y = x^2 + 2x\\) である。\\(C_1\\) 上の点 \\((a, f(a))\\) における接線の方程式を求め、\\(C_2: y = x^2 - 5x + \\frac{7}{4}\\) にも接する条件を調べる。\n",
        "ア）\\( x \\ge 0 \\) 側の接線について",
        "接線の傾きは \\( f'(x) = 2x - 2 \\) なので、接点 \\( (a, a^2 - 2a) \\) での接線は",
        "\\[ y = (2a - 2)x - a^2. \\]",
        "この直線が \\(C_2\\) にも接するには、以下の二次方程式が重解を持つ必要がある。",
        "\\[ x^2 - (5 + 2a - 2)x + \\left(\\frac{7}{4} + a^2\\right) = 0. \\]",
        "その判別式を計算すると \\( 12a + 2 \\) となり、これが 0 になるには \\( a = -\\frac{1}{6} \\) であるが、\\( a \\geq 0 \\) に反する。",
        "したがって、\\( x \\geq 0 \\) 側には条件を満たす接線は存在しない。\n",
        "イ）\\( x < 0 \\) 側の接線",
        "接線の傾きは \\( f'(x) = 2x + 2 \\) なので、接点 \\( (a, a^2 + 2a) \\) での接線は",
        "\\[ y = (2a + 2)x - a^2. \\]",
        "同様に \\(C_2\\) への接触条件を考えると、判別式は \\( 14(2a+3) \\) となり、これが 0 になるのは \\( a = -\\frac{3}{2} \\) のとき。",
        "よって、このときの接線は \\( y = -x - \\frac{9}{4} \\) である。よって原点を通らない接戦が1本だけ存在する。\n",
        "### (2) 面積の計算",
        "\\(\\alpha=a\\)であり、求める面積は、",
        "\\[ S = \\int_{-\\frac{3}{2}}^{0} (x^2 + 3x + \\frac{9}{4}) dx + \\int_{0}^{\\frac{3}{2}} (x^2 - x + \\frac{9}{4}) dx. \\]",
        "それぞれの積分を計算すると、",
        "\\[ \\int (x^2 + 3x + \\frac{9}{4}) dx = \\frac{x^3}{3} + \\frac{3x^2}{2} + \\frac{9x}{4}, \\]",
        "これを \\( -\\frac{3}{2} \\leq x < 0 \\) で評価すると \\( \\frac{9}{8} \\)。",
        "次に、",
        "\\[ \\int (x^2 - x + \\frac{9}{4}) dx = \\frac{x^3}{3} - \\frac{x^2}{2} + \\frac{9x}{4}, \\]",
        "これを \\( 0 \\leq x \\leq \\frac{3}{2} \\) で評価すると \\( \\frac{27}{8} \\)。",
        "したがって、",
        "\\[ S = \\frac{9}{8} + \\frac{27}{8} = \\frac{9}{2}. \\]",
        "よって、求める面積は \\( \\frac{9}{2} \\) である。"
      ]
    }
  }
];

export default Bunkei2025;
