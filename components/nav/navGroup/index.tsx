"use client";
import React from "react";
import { QuestionCircleOutlined, SettingOutlined, ToolFilled, UserAddOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { routeMap } from "./constant";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: "首页"
  },
  {
    key: "sub1",
    label: "用户",
    icon: <UserAddOutlined />,
    children: [
      {
        key: "g1",
        label: "用户资料"
      },
      {
        key: "g2",
        label: "二级菜单",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" }
        ]
      }
    ]
  },
  {
    key: "sub2",
    label: "工具",
    icon: <ToolFilled />,
    children: [
      {
        key: "sport",
        label: "运动记录"
      },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" }
        ]
      }
    ]
  },
  {
    type: "divider"
  },
  {
    key: "sub4",
    label: "设置",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" }
    ]
  },
  {
    key: "grp",
    label: "帮助",
    type: "item",
    icon: <QuestionCircleOutlined />
  }
];

const NavGroup: React.FC = () => {
  const router = useRouter();

  // 导航跳转
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    if (routeMap[e.key]) {
      router.push(routeMap[e.key]);
    }
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default NavGroup;
