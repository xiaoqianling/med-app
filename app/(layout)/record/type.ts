import { createListCollection } from "@chakra-ui/react";

export type RecordTableItem = {
  id: string;
  account: string;
  name: string;
  type: string;
  sport: string;
  span: string;
  // 消耗
  cost: string;
  time: string;
};

export const mockRecordTableItems: RecordTableItem[] = [
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  },
  {
    id: "1",
    account: "1234567890",
    name: "张三",
    type: "跑步",
    sport: "1000米",
    span: "20分钟",
    cost: "100元",
    time: "2021-01-01 12:00:00"
  }
];

export const paginationSizeOptions = createListCollection({
  items: [
    {
      label: "10条/页",
      value: 10
    },
    {
      label: "20条/页",
      value: 20
    },
    {
      label: "30条/页",
      value: 30
    },
    {
      label: "50条/页",
      value: 50
    }
  ]
});
