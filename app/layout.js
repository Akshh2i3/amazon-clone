import Header from "@/components/HeaderComp/Header";
import "./globals.css";
import StoreProvider from "./storeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Amazon Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          {children}
          {/* <Footer /> */}
        </StoreProvider>
      </body>
    </html>
  );
}
