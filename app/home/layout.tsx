import "./index.scss";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="root-container">
      {/* layout布局 */}
      <Header />
      <main className="main">
        <Nav />
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
