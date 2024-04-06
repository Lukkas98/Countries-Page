import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const Font = Chakra_Petch({ subsets: ["latin"] });

export const metadata = {
  title: "Country page",
  description: "Search for any information about a country",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Font.className}>{children}</body>
    </html>
  );
}
