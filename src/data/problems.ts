import { Bunkei2022 } from "./Bunkei/2022";
import { Bunkei2023 } from "./Bunkei/2023";
import { Bunkei2024 } from "./Bunkei/2024";
// 理系データも同様にインポート
// import { 理系2023 } from "./理系/2023";
// import { 理系2024 } from "./理系/2024";

export const problems = [...Bunkei2023, ...Bunkei2024, ...Bunkei2022];
