import "./index.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

/**
 *
 * @returns 这下面的路由都带有顶级布局
 */
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
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
};

export default Layout;
