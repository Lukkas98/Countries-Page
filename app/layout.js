import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Footer from "./countries/components/footer";

const Font = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Country page",
  description: "Search for any information about a country",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-800 min-h-screen overflow-x-hidden grid grid-rows-1 ${Font.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
