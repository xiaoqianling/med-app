import { CardMetaInfo } from "./type";
import {
  AuditOutlined,
  CommentOutlined,
  DashboardOutlined,
  FormOutlined,
  ReadOutlined,
  UserAddOutlined
} from "@ant-design/icons";

export const cardsMetaInfo: CardMetaInfo[] = [
  {
    title: "在线问诊",
    desc: "随时随地，轻松问诊",
    icon: <CommentOutlined style={{ fontSize: "40px" }} />,
    link: ""
  },
  {
    title: "膳食推荐",
    desc: "个性化推荐，科学饮食",
    icon: <AuditOutlined style={{ fontSize: "40px" }} />,
    link: ""
  },
  {
    title: "运动记录",
    desc: "记录你的运动，健康生活",
    icon: <DashboardOutlined style={{ fontSize: "40px" }} />,
    link: "record"
  },
  {
    title: "运动处方",
    desc: "定制专属运动方案",
    icon: <FormOutlined style={{ fontSize: "40px" }} />,
    link: "sport"
  },
  {
    title: "知识科普",
    desc: "健康知识，健康生活",
    icon: <ReadOutlined style={{ fontSize: "40px" }} />,
    link: "https://chinagout.org/index.html"
  },
  {
    title: "信息管理",
    desc: "修改个人信息",
    icon: <UserAddOutlined style={{ fontSize: "40px" }} />,
    link: ""
  }
];
