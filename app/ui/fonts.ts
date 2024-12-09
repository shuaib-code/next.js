import { Fira_Code, Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const firaCode = Fira_Code({
  weight: ["500", "400", "300", "600"],
  subsets: ["greek"],
});

export const lusitana = Lusitana({ weight: ["400"], subsets: ["latin"] });
