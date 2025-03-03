import { Problem } from "../../types";

export const Rikei2025: Problem[] = [
  {
    "year": 2025,
    "number": 4,
    "category": "理系",
    "content": {
      "question": "座標空間の4点 \\(O, A, B, C\\) は同一平面上にないとする。\\(s, t, u\\) は0でない実数とする。直線 \\(OA\\) 上の点 \\(L\\)、直線 \\(OB\\) 上の点 \\(M\\)、直線 \\(OC\\) 上の点 \\(N\\) を\n\\[\n\\overrightarrow{OL} = s\\,\\overrightarrow{OA}, \\quad \\overrightarrow{OM} = t\\,\\overrightarrow{OB}, \\quad \\overrightarrow{ON} = u\\,\\overrightarrow{OC}\n\\]\nが成り立つようにとる。さらに、\\(s, t, u\\) が\n\\[\n\\frac{1}{s} + \\frac{2}{t} + \\frac{3}{u} = 4\n\\]\nを満たすとき、\n\n(1) 3点 \\(L, M, N\\) の定める平面 \\(LMN\\) が、\\(s, t, u\\) の値に無関係に常に一定の点 \\(P\\) を通ること、またその点 \\(P\\) がただ一つであることを示せ。\n\n(2) 四面体 \\(OABC\\) の体積を \\(V\\) とするとき、(1) における点 \\(P\\) について四面体 \\(PABC\\) の体積を \\(V\\) を用いて表せ。\n\n※解答では、ベクトルの表記を \\(\\overrightarrow{OA}\\) のようにし、位置ベクトルは \\(\\vec{a} = \\overrightarrow{OA}\\) などと定義してください。また、ベクトルの3重積や行列（行列式）は用いないこと。",
      "hints": [
        "1. 点 \\(P\\) の位置ベクトルを、\\(\\overrightarrow{OP} = x\\,\\overrightarrow{OA} + y\\,\\overrightarrow{OB} + z\\,\\overrightarrow{OC}\\) と固定して表す。",
        "2. 一方、\\(P\\) が平面 \\(LMN\\) に属するためには、\\(\\overrightarrow{OP}\\) を \\(\\overrightarrow{OL}, \\overrightarrow{OM}, \\overrightarrow{ON}\\) の線形結合、つまり\n\\(\\overrightarrow{OP} = \\alpha\\,\\overrightarrow{OL} + \\beta\\,\\overrightarrow{OM} + \\gamma\\,\\overrightarrow{ON}\\) （\\(\\alpha + \\beta + \\gamma = 1\\)）と表せる必要がある。",
        "3. この2通りの表し方の係数を比較して、\\(x = \\alpha s, \\; y = \\beta t, \\; z = \\gamma u\\) とし、\\(\\alpha+\\beta+\\gamma = 1\\) から \\(\\frac{x}{s} + \\frac{y}{t} + \\frac{z}{u} = 1\\) となる。",
        "4. 与えられた条件 \\(\\frac{1}{s}+\\frac{2}{t}+\\frac{3}{u}=4\\) と合わせると、\\(\\frac{x}{s}+\\frac{y}{t}+\\frac{z}{u}\\) を \\(\\frac{1}{4}\\left(\\frac{1}{s}+\\frac{2}{t}+\\frac{3}{u}\\right)\\) と一致させることで、\\(x=\\frac{1}{4}, \\; y=\\frac{1}{2}, \\; z=\\frac{3}{4}\\) が求まる。",
        "5. 次に、\\(P\\) を通る直線 \\(OP\\) と平面 \\(ABC\\) の交点 \\(Q\\) を求め、その位置ベクトルから、\\(PQ\\) と \\(OQ\\) の比を利用して体積比を求める方法を考える。"
      ],
      "solution": {
        "定点": "平面 \\(LMN\\) は、\\(\\frac{1}{s}+\\frac{2}{t}+\\frac{3}{u}=4\\) の条件下で常に\n\\[\n\\overrightarrow{OP} = \\frac{1}{4}\\,\\overrightarrow{OA} + \\frac{1}{2}\\,\\overrightarrow{OB} + \\frac{3}{4}\\,\\overrightarrow{OC}\n\\]\nで与えられる一定の点 \\(P\\) を通るため、\\(P\\) は一意に定まります。",
        "体積比": "直線 \\(OP\\) と平面 \\(ABC\\) の交点 \\(Q\\) を求めると、\\(Q\\) は \\(\\overrightarrow{OQ} = k\\,\\overrightarrow{OP}\\) （\\(k\\) は実数）と表せ、\\(Q\\) が \\(ABC\\) 上の条件から、\\(k(\\frac{1}{4}+\\frac{1}{2}+\\frac{3}{4})=1\\) となります。これより \\(k=\\frac{2}{3}\\) となり、\\(OQ:OP = \\frac{2}{3}\\) となります。\\(P\\) は \\(OP\\) 上の \\(Q\\) より遠い点であるため、\\(PQ = OP - OQ = \\frac{1}{3}OP\\) となります。四面体は同じ底面 \\(ABC\\) を共有するため、体積比は頂点から底面への高さの比に等しく、\\(\\text{体積}(PABC)/\\text{体積}(OABC) = PQ/OQ = (\\frac{1}{3}OP)/(\\frac{2}{3}OP) = \\frac{1}{2}\\) となります。\nすなわち、\\(\\text{体積}(PABC) = \\frac{1}{2}V\\) です。"
      },
      "detailedSolution": [
        "【(1) 定数点 \\(P\\) の存在と一意性】",
        "",
        "① 点 \\(P\\) の位置ベクトルを、",
        "   \\[",
        "   \\overrightarrow{OP} = x\\,\\overrightarrow{OA} + y\\,\\overrightarrow{OB} + z\\,\\overrightarrow{OC}",
        "   \\] と表します。（\\(x, y, z\\) は定数）",
        "",
        "② 一方、点 \\(P\\) が平面 \\(LMN\\) 上にあるためには、",
        "   \\[",
        "   \\overrightarrow{OP} = \\alpha\\,\\overrightarrow{OL} + \\beta\\,\\overrightarrow{OM} + \\gamma\\,\\overrightarrow{ON}, \\quad (\\alpha+\\beta+\\gamma=1)",
        "   \\] と書ける必要があります。ここで",
        "   \\[",
        "   \\overrightarrow{OL} = s\\,\\overrightarrow{OA}, \\quad \\overrightarrow{OM} = t\\,\\overrightarrow{OB}, \\quad \\overrightarrow{ON} = u\\,\\overrightarrow{OC}",
        "   \\] であるため、",
        "   \\[",
        "   \\overrightarrow{OP} = \\alpha s\\,\\overrightarrow{OA} + \\beta t\\,\\overrightarrow{OB} + \\gamma u\\,\\overrightarrow{OC}",
        "   \\] となります。",
        "",
        "③ 固定点としての \\(P\\) の表し方と比較すると、",
        "   \\[",
        "   x\\,\\overrightarrow{OA} + y\\,\\overrightarrow{OB} + z\\,\\overrightarrow{OC} = \\alpha s\\,\\overrightarrow{OA} + \\beta t\\,\\overrightarrow{OB} + \\gamma u\\,\\overrightarrow{OC}",
        "   \\] となり、各成分について",
        "   \\[",
        "   x = \\alpha s, \\quad y = \\beta t, \\quad z = \\gamma u",
        "   \\] が成り立ちます。",
        "",
        "④ さらに、\\(\\alpha+\\beta+\\gamma=1\\) であることから、両辺を \\(s, t, u\\) で割ると",
        "   \\[",
        "   \\frac{x}{s} + \\frac{y}{t} + \\frac{z}{u} = \\alpha+\\beta+\\gamma = 1.",
        "   \\] となります。",
        "",
        "⑤ 与えられた条件",
        "   \\[",
        "   \\frac{1}{s} + \\frac{2}{t} + \\frac{3}{u} = 4",
        "   \\] と合わせると、",
        "   \\[",
        "   \\frac{x}{s} + \\frac{y}{t} + \\frac{z}{u} = \\frac{1}{4}\\left(\\frac{1}{s}+\\frac{2}{t}+\\frac{3}{u}\\right) = \\frac{1}{4}\\times4 = 1.",
        "   \\]",
        "",
        "⑥ したがって、各項の係数の比較から",
        "   \\[",
        "   x = \\frac{1}{4}, \\quad y = \\frac{1}{2}, \\quad z = \\frac{3}{4}",
        "   \\] となり、点 \\(P\\) の位置ベクトルは",
        "   \\[",
        "   \\overrightarrow{OP} = \\frac{1}{4}\\,\\overrightarrow{OA} + \\frac{1}{2}\\,\\overrightarrow{OB} + \\frac{3}{4}\\,\\overrightarrow{OC}",
        "   \\] と一意に定まります。",
        "",
        "【(2) 四面体 \\(PABC\\) の体積比の求め方（交点 \\(Q\\) を用いる方法）】",
        "",
        "① ここで、直線 \\(OP\\) と平面 \\(ABC\\) の交点を \\(Q\\) とします。点 \\(Q\\) は、",
        "   \\[",
        "   \\overrightarrow{OQ} = k\\,\\overrightarrow{OP}",
        "   \\] という形で表されます。（\\(k\\) は実数）",
        "",
        "② 平面 \\(ABC\\) 上の任意の点は、\\(\\overrightarrow{OX} = x\\,\\overrightarrow{OA}+y\\,\\overrightarrow{OB}+z\\,\\overrightarrow{OC}\\) と表せ、さらにその係数は",
        "   \\(x+y+z=1\\) を満たします。",
        "",
        "③ \\(\\overrightarrow{OP} = \\frac{1}{4}\\,\\overrightarrow{OA}+\\frac{1}{2}\\,\\overrightarrow{OB}+\\frac{3}{4}\\,\\overrightarrow{OC}\\) なので、",
        "   \\[",
        "   \\overrightarrow{OQ} = k\\left(\\frac{1}{4}\\,\\overrightarrow{OA}+\\frac{1}{2}\\,\\overrightarrow{OB}+\\frac{3}{4}\\,\\overrightarrow{OC}\\right) = \\frac{k}{4}\\,\\overrightarrow{OA}+\\frac{k}{2}\\,\\overrightarrow{OB}+\\frac{3k}{4}\\,\\overrightarrow{OC}.",
        "   \\] となります。",
        "",
        "④ \\(Q\\) が平面 \\(ABC\\) 上にあるための条件は、",
        "   \\[",
        "   \\frac{k}{4}+\\frac{k}{2}+\\frac{3k}{4} = 1.",
        "   \\] 計算すると、",
        "   \\[",
        "   \\frac{k+2k+3k}{4} = \\frac{6k}{4} = \\frac{3k}{2} = 1,",
        "   \\] よって",
        "   \\[",
        "   k = \\frac{2}{3}.",
        "   \\]",
        "",
        "⑤ つまり、\\(Q\\) の位置ベクトルは",
        "   \\[",
        "   \\overrightarrow{OQ} = \\frac{2}{3}\\,\\overrightarrow{OP}.",
        "   \\] となります。",
        "",
        "⑥ 次に、四面体 \\(OABC\\) と \\(PABC\\) はどちらも底面 \\(ABC\\) を共有しています。底面 \\(ABC\\) に対する高さは、頂点から平面 \\(ABC\\) への垂直距離です。",
        "",
        "⑦ \\(OABC\\) の高さは \\(O\\) から平面 \\(ABC\\) への垂直距離であり、\\(PABC\\) の高さは \\(P\\) から平面 \\(ABC\\) への垂直距離です。",
        "",
        "⑧ 直線 \\(OP\\) 上にある \\(Q\\) は平面 \\(ABC\\) 上にあるので、\\(OQ\\) が \\(O\\) から平面 \\(ABC\\) までの距離、\\(PQ = OP - OQ\\) が \\(P\\) から平面 \\(ABC\\) までの距離に相当します。",
        "",
        "⑨ すなわち、",
        "   \\[",
        "   \\frac{\\text{高さ}(PABC)}{\\text{高さ}(OABC)} = \\frac{PQ}{OQ} = \\frac{OP - OQ}{OQ}.",
        "   \\]",
        "",
        "⑩ ここで、\\(OQ = \\frac{2}{3}OP\\) なので、",
        "   \\[",
        "   PQ = OP - \\frac{2}{3}OP = \\frac{1}{3}OP.",
        "   \\]",
        "",
        "⑪ よって、",
        "   \\[",
        "   \\frac{PQ}{OQ} = \\frac{\\frac{1}{3}OP}{\\frac{2}{3}OP} = \\frac{1}{2}.",
        "   \\]",
        "",
        "⑫ 同じ底面 \\(ABC\\) を持つ四面体は、高さの比に応じて体積が決まるため、",
        "   \\[",
        "   \\frac{\\text{体積}(PABC)}{\\text{体積}(OABC)} = \\frac{PQ}{OQ} = \\frac{1}{2}.",
        "   \\]",
        "",
        "⑬ 結果として、",
        "   \\[",
        "   \\text{体積}(PABC) = \\frac{1}{2}V.",
        "   \\]"
      ]
    }
  }
];

export default Rikei2025;
