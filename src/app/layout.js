import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Maykee Frontend Task",
  description: "Assessment by Haseeb",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}