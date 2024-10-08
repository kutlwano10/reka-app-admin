import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Header from "../components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>
          <Header />
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
