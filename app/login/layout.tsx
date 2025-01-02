import { FunctionComponent } from "react";

interface LayoutProps {
    children: React.ReactNode;
}
 
const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    return <div>
    <span>这是login layout</span>
    <div>
        {children}
    </div>
</div>;;
}
 
export default Layout;