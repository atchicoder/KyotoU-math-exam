import { Problem } from "../../types";

export const Rikei2003: Problem[] = [
  {
    "year": 2003,
    "number": 3,
    "category": "理系",
    "content": {
      "question": "四面体 \\(OABC\\) は次の2つの条件を満たしている。\n\\begin{align*}\n\\text{(i)} & \\quad OA \\perp BC, \\quad OB \\perp AC, \\quad OC \\perp AB, \\\\\n\\text{(ii)} & \\quad 4\\text{つの面の面積がすべて等しい}.\n\\end{align*}\nこのとき、この四面体が正四面体であることを示せ。",
      "hints": [
        "条件 \\((i)\\) から、3本のベクトルの相互の内積に関係があることに注目する。\n",
        "条件 \\((ii)\\) より、各面積が等しいことを利用して、ベクトルの長さやなす角を考える。",
        "ベクトルの長さを \\(r\\) とし、なす角がどのような値になるかを調べる。\n",
        "面積の計算を通じて、角度が \\(60^{\\circ}\\) であることを示す。"
      ],
      "solution": "四面体 \\(OABC\\) は正四面体である。",
      "detailedSolution": [
        "### 1. ベクトルの設定\n原点 \\(O\\) を基準に、\\(\\vec{a} = \\overrightarrow{OA}, \\; \\vec{b} = \\overrightarrow{OB}, \\; \\vec{c} = \\overrightarrow{OC}\\) とおく。各辺が成す直交条件 \\(OA \\perp BC, \\; OB \\perp AC, \\; OC \\perp AB\\) を内積の形で表すと、次の式が得られる：\n\\begin{align*}\n\\vec{a} \\cdot (\\vec{c} - \\vec{b}) &= 0, \\\\\n\\vec{b} \\cdot (\\vec{c} - \\vec{a}) &= 0, \\\\\n\\vec{c} \\cdot (\\vec{b} - \\vec{a}) &= 0.\n\\end{align*}",
        "### 2. 条件 (i) の展開\nこれらの内積を展開すると、以下の関係が得られる：\n\\begin{align*}\n\\vec{a} \\cdot \\vec{c} &= \\vec{a} \\cdot \\vec{b}, \\\\\n\\vec{b} \\cdot \\vec{c} &= \\vec{a} \\cdot \\vec{b}, \\\\\n\\vec{c} \\cdot \\vec{a} &= \\vec{a} \\cdot \\vec{b}.\n\\end{align*}\nしたがって、\\(\\vec{a}, \\vec{b}, \\vec{c}\\) の相互の内積はすべて等しい。この値を \\(\\alpha\\) とおく。\n",
        "### 3. 条件 (ii) による長さの等式\n次に、4つの面の面積がすべて等しい条件を考える。三角形 \\(OAB\\) の面積は\n\\[\n[OAB] = \\frac{1}{2} |\\vec{a}| |\\vec{b}| \\sin\\theta,\n\\]\nここで \\(\\theta\\) は \\(\\vec{a}\\) と \\(\\vec{b}\\) のなす角である。同様に、三角形 \\(OBC\\) の面積は\n\\[\n[OBC] = \\frac{1}{2} |\\vec{b}| |\\vec{c}| \\sin\\phi,\n\\]\nここで \\(\\phi\\) は \\(\\vec{b}\\) と \\(\\vec{c}\\) のなす角である。これらの面積が等しいため、ベクトルの長さがすべて等しいことが分かる。すなわち、\n\\[\n|\\vec{a}| = |\\vec{b}| = |\\vec{c}| = r \\quad (r > 0).\n\\]",
        "### 4. 三角形 ABC の面積を利用した角度の特定\nさらに、三角形 \\(ABC\\) の面積も等しい条件を用いる。\\(\\vec{AB} = \\vec{b} - \\vec{a}, \\; \\vec{AC} = \\vec{c} - \\vec{a}\\) とすると、三角形 \\(ABC\\) の面積は次の式で与えられる：\n\\[\n[ABC] = \\frac{1}{2} \\sqrt{|\\vec{b} - \\vec{a}|^2 |\\vec{c} - \\vec{a}|^2 - \\{(\\vec{b} - \\vec{a}) \\cdot (\\vec{c} - \\vec{a})\\}^2}.\n\\]\nここで、\\(|\\vec{b} - \\vec{a}|^2 = 2r^2 - 2\\alpha\\)、\\((\\vec{b} - \\vec{a}) \\cdot (\\vec{c} - \\vec{a}) = r^2 - \\alpha\\) を代入して計算を進めると、角度 \\(\\theta = 60^{\\circ}\\) であることが導かれる。\n",
        "### 5. 正四面体の確認\n以上により、\\(OA = OB = OC = AB = BC = CA = r\\) が示され、四面体 \\(OABC\\) はすべての辺の長さが等しい正四面体であることが分かる。"
      ]
    }
  }
  
  
];

export default Rikei2003;
