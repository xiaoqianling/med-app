"use client";
import { Button } from "@chakra-ui/react";
import { FC, FunctionComponent } from "react";

interface SportCardProps {
  className?: string;
  info: SportCardMetaInfo[];
  onDetailClick?: () => void;
  // 点击打卡
  onPunchClick?: () => void;
}

const SportCard: FunctionComponent<SportCardProps> = ({ info, className, onDetailClick, onPunchClick }) => {
  const mapInfo = (item: SportCardMetaInfo, index: number) => {
    console.log(item.cardColor);
    return (
      <div key={index} className="w-80 relative">
        {/* 背景右下偏移 不影响主内容定位(背景脱离文档流) */}
        <div className={`absolute left-4 top-10 w-full h-72`} style={{ backgroundColor: item.cardColor }}>
          {/* 标签 */}
          <span className="absolute bottom-1 left-2 text-white">→ 减脂健身</span>
        </div>
        {/* 主内容区域 */}
        <div className="flex flex-col justify-center self-center w-full h-72 relative shadow-md bg-white">
          <span className="font-bold my-2 flex flex-col justify-center self-center">{item.title}</span>
          {/* table 每格内容居中*/}
          <table className="w-full border-y border-gray-200">
            <tbody>
              <tr className="border-b">
                <TdCenter text="运动类型:" />
                <TdCenter text={item.sportType} />
              </tr>
              <tr className="border-b">
                <TdCenter text="运动时间:" />
                <TdCenter text={item.time} />
              </tr>
              <tr className="border-b">
                <TdCenter text="适宜心率:" />
                <TdCenter text={item.heartRate} />
              </tr>
              <tr className="border-b">
                <TdCenter text="适宜频率:" />
                <TdCenter text={item.frequency} />
              </tr>
              <tr className="border-b">
                <TdCenter text="推荐速度:" />
                <TdCenter text={item.recommendedSpeed} />
              </tr>
            </tbody>
          </table>
          {/* 按钮区域 */}
          <div className="flex flex-row justify-around py-4">
            <Button className="bg-blue-400 text-white px-4" onClick={onDetailClick}>
              查看详情
            </Button>
            <Button className="bg-orange-400 text-white px-4" onClick={onPunchClick}>
              打卡
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-16 mb-16`}>
      {info.map(mapInfo)}
    </div>
  );
};

export default SportCard;

const tdCenterClassname = `text-center py-1`;
const TdCenter: FC<{ text: string }> = ({ text }) => <td className={tdCenterClassname}>{text}</td>;

export interface SportCardMetaInfo {
  title: string;
  sportType: string;
  time: string;
  // 心率
  heartRate: string;
  // 频率
  frequency: string;
  // 推荐速度
  recommendedSpeed: string;
  cardColor: string;
}
