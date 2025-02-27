"use client";
import "./index.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
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
    <ChakraProvider value={defaultSystem}>
      <div className="root-container h-screen">
        {/* layout布局 */}
        <Header />
        <main className="main flex">
          <div className="h-full overflow-auto">
            <Nav />
          </div>
          <div className="container overflow-auto flex-1">{children}</div>
        </main>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Layout;
