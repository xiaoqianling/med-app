import { FunctionComponent, ReactNode } from "react";

interface NavGroupProps {
  icon: string;
  title: string;
  children?: ReactNode[];
}

const NavGroup: FunctionComponent<NavGroupProps> = () => {
  return <div>这是一组nav</div>;
};

export default NavGroup;
