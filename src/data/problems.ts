import { Bunkei2020 } from "./Bunkei/2020";
import { Bunkei2021 } from "./Bunkei/2021";
import { Bunkei2022 } from "./Bunkei/2022";
import { Bunkei2023 } from "./Bunkei/2023";
import { Bunkei2024 } from "./Bunkei/2024";
import { Rikei2024 } from "./Rikei/2024";
import { Rikei2003 } from "./Rikei/2003";
import { Rikei2023 } from "./Rikei/2023";
import { Rikei2022 } from "./Rikei/2022";
import { Rikei2021 } from "./Rikei/2021";
// 理系データも同様にインポート
// import { 理系2023 } from "./理系/2023";
// import { 理系2024 } from "./理系/2024";

export const problems = [...Bunkei2023, ...Bunkei2024, ...Bunkei2022, ...Bunkei2021, ...Bunkei2020, ...Rikei2024, ...Rikei2003, ...Rikei2023, ...Rikei2022, ...Rikei2021];
