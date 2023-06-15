import { Rubik } from "next/font/google";
import "../sass/index.scss";
import { Footer } from "@/Components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "IP Address Tracker",
  description: "IP Address tracker a frontend challenge from Frontendmentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={rubik.className}>
          {children}
          <Footer />
        </body>
      </html>
  );
}
