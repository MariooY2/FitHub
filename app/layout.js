import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitHub",
  description:
    "FitHub is a comprehensive personal training platform built with Next.js, designed to help you achieve your fitness goals with ease and efficiency. Whether you're aiming for weight loss, muscle gain, or improved endurance, FitHub has got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
