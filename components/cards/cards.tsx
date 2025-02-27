import React from "react";
import { Card } from "antd";
import { cardsMetaInfo } from "./constant";
import { useRouter } from "next/navigation";

const { Meta } = Card;

const Cards: React.FC = () => {
  const router = useRouter();
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px", width: "100%" }}>
      {cardsMetaInfo.map((item, index) => {
        return (
          <Card
            onClick={() => {
              if (item.link.startsWith("http")) {
                window.open(item.link, "_blank");
              } else {
                router.push(item.link);
              }
            }}
            key={index}
            hoverable
            style={{ width: 240, margin: "0 auto" }}
            cover={
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px"
                }}
              >
                {item.icon}
              </div>
            }
          >
            <Meta title={item.title} description={item.desc} style={{ textAlign: "center" }} />
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
