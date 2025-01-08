import React from "react";
import { Card } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Cards: React.FC = () => {
  const card = (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div style={{ height: "50px", display: "flex", justifyContent: "center" }}>
          <UserAddOutlined style={{ fontSize: "40px" }} />
        </div>
      }
    >
      <Meta title="用户管理" description="一段描述" style={{ textAlign: "center" }} />
    </Card>
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px", width: "100%" }}>
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
      {card}
    </div>
  );
};

export default Cards;
