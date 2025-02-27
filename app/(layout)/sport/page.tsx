import SportCard, { SportCardMetaInfo } from "@/components/sportCard";
import { Blockquote, Button, Stack, Text } from "@chakra-ui/react";

const sportRecord: SportCardMetaInfo[] = [
  {
    title: "越野跑",
    sportType: "跑步",
    time: "43-57分钟",
    heartRate: "最大心率的72%-78%",
    frequency: "每周6次",
    recommendedSpeed: "8km/h",
    // 橙色
    cardColor: "#FFA500"
  },
  {
    title: "快速走",
    sportType: "快速走",
    time: "43-57分钟",
    heartRate: "最大心率的72%-78%",
    frequency: "每周5-7次",
    recommendedSpeed: "100m/min",
    // 紫色
    cardColor: "#800080"
  },
  {
    title: "倒退行走",
    sportType: "走路",
    time: "20-40分钟",
    heartRate: "心率90-100次/分",
    frequency: "每周5-7次",
    recommendedSpeed: "8km/h",
    // 粉色
    cardColor: "#FFC0CB"
  },
  {
    title: "水中走",
    sportType: "水中行走",
    time: "43-57分钟",
    heartRate: "最大心率的72%-78%",
    frequency: "每周5-7次",
    recommendedSpeed: "150-200米/次",
    // 蓝色
    cardColor: "#0000FF"
  },
  {
    title: "走跑交替",
    sportType: "跑步",
    time: "43-57分钟",
    heartRate: "最大心率的72%-78%",
    frequency: "每周6次",
    recommendedSpeed: "8km/h",
    // 橙色
    cardColor: "#FFA500"
  },
  {
    title: "计时慢跑",
    sportType: "跑不",
    time: "43-57分钟",
    heartRate: "最大心率的72%-78%",
    frequency: "每周6次",
    recommendedSpeed: "8km/h",
    // 紫色
    cardColor: "#800080"
  }
];

/**
 * 运动记录
 */
function SportPage() {
  return (
    <div className="pb-4 bg-gray-50">
      <div className="relative bg-cyan-300 pb-10 mb-[-1rem] pl-2 pt-2">
        <div className="font-bold text-2xl z-10 text-white">运动处方</div>
        <h3 className="z-[1] text-white">请自行选择运动处方</h3>
      </div>
      <div className="pl-2">
        <SportCard info={sportRecord} />

        {/* 测评卡片 */}
        <div className="py-4 px-4 bg-teal-50 shadow-sm">
          <div className="border-l-4 border-l-blue-300 border-solid ml-[-16] pl-3 mb-2">
            <span className="text-blue-600 font-bold mr-2">处方评测</span>
            <span className="text-blue-400">简介</span>
          </div>
          <div>通过对处方评测，可以让运动处方更好的适应您自身条件。请认真填写处方评测信息！</div>
          <div className="mt-4">
            <Button className="bg-blue-400 text-white p-2">开始评测</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportPage;
