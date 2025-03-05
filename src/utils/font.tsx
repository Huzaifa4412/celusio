import { Urbanist, Montserrat, Playwrite_GB_J } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "500", "600", "700"],
});
const joining = Playwrite_GB_J({ display: "swap" });

export const font = {
  urbanist,
  montserrat,
  joining,
};
