"use client";
import {
  Group,
  HStack,
  Input,
  InputElement,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Table
} from "@chakra-ui/react";
import { Tooltip } from "antd";
import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { CiEdit, CiSearch } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { mockRecordTableItems, paginationSizeOptions } from "./type";
import Checkbox from "antd/es/checkbox/Checkbox";
import { BiDetail } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";

function RecordPage() {
  const [selection, setSelection] = useState<number[]>([]);

  const hasSelection = selection.length > 0;
  // true: 选择了一部分 false: 选择了全部或者没有选择
  const indeterminate = hasSelection && selection.length < mockRecordTableItems.length;

  const handleAccountChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleAccountSubmit = () => {
    console.log("submit");
  };
  const handleClickCheckbox = (index: number) => {
    setSelection((prev) => {
      if (selection.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };
  const handleClickAllCheck = () => {
    // 三态
    if (indeterminate) {
      // 选择了一部分 行为：全选
      setSelection(mockRecordTableItems.map((item, index) => index));
    } else {
      if (hasSelection) {
        setSelection([]);
      } else {
        setSelection(mockRecordTableItems.map((item, index) => index));
      }
    }
  };

  const rows = mockRecordTableItems.map((item, index) => {
    const operationClassname = `cursor-pointer flex flex-row gap-1 justify-center items-center px-2 py-1 rounded-md`;
    return (
      <Table.Row key={index} data-selected={selection.includes(index) ? "" : undefined} className="h-10">
        <Table.Cell className="text-center">
          <Checkbox
            aria-label="Select row"
            checked={selection.includes(index)}
            onClick={() => {
              handleClickCheckbox(index);
            }}
          />
        </Table.Cell>
        <Table.Cell className="text-center">{item.account}</Table.Cell>
        <Table.Cell className="text-center">{item.name}</Table.Cell>
        <Table.Cell className="text-center">{item.type}</Table.Cell>
        <Table.Cell className="text-center">{item.sport}</Table.Cell>
        <Table.Cell className="text-center">{item.span}</Table.Cell>
        <Table.Cell className="text-center">{item.cost}</Table.Cell>
        <Table.Cell className="text-center">{item.time}</Table.Cell>
        {/* 操作区 */}
        <Table.Cell className="text-center">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className={`${operationClassname} bg-cyan-300`}>
              <BiDetail />
              <span>详情</span>
            </div>
            <div className={`${operationClassname} bg-yellow-400`}>
              <CiEdit />
              <span>修改</span>
            </div>
            <div className={`${operationClassname} bg-red-500`}>
              <LuDelete />
              <span>删除</span>
            </div>
          </div>
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div className="m-4 bg-gray-100 p-4">
      {/* 表格操作 */}
      <div className="flex flex-row gap-4 mb-4">
        <RecordInput
          label="账号"
          placeholder="账号"
          onChange={handleAccountChange}
          onSubmit={handleAccountSubmit}
        />
        <RecordInput
          label="类型"
          placeholder="类型"
          onChange={handleAccountChange}
          onSubmit={handleAccountSubmit}
        />
        <RecordInput
          label="运动"
          placeholder="运动"
          onChange={handleAccountChange}
          onSubmit={handleAccountSubmit}
        />
        <div className="bg-cyan-300 flex justify-center items-center px-4 py-1 rounded-md cursor-pointer hover:bg-cyan-400 transition-colors duration-100">
          <CiSearch size={20} />
        </div>
      </div>
      {/* icon */}
      <div className="flex flex-row gap-4 mb-4">
        <Tooltip title="清空搜索" placement="bottom">
          <div className="bg-red-400 flex justify-center items-center px-5 py-3 rounded-md cursor-pointer hover:bg-red-500 transition-colors duration-100">
            <GoTrash size={15} />
          </div>
        </Tooltip>
        <Tooltip title="打印" placement="bottom">
          <div className="bg-cyan-300 flex justify-center items-center px-5 py-3 rounded-md cursor-pointer hover:bg-cyan-400 transition-colors duration-100">
            <AiOutlinePrinter size={15} />
          </div>
        </Tooltip>
      </div>
      {/* table */}
      <div>
        <Table.Root striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader w="6" textAlign={"center"}>
                <Checkbox
                  onClick={handleClickAllCheck}
                  checked={selection.length === mockRecordTableItems.length}
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                账号
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                姓名
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                类型
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                运动
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                时长
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                消耗
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                记录
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign={"center"} className="font-bold">
                操作
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table.Root>

        {/* <ActionBarRoot open={hasSelection}>
          <ActionBarContent>
            <ActionBarSelectionTrigger>{selection.length} selected</ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm">
              Delete <Kbd>⌫</Kbd>
            </Button>
            <Button variant="outline" size="sm">
              Share <Kbd>T</Kbd>
            </Button>
          </ActionBarContent>
        </ActionBarRoot> */}
      </div>
      {/* 分页  */}
      <div className="flex flex-row items-center gap-4">
        <span>共x条</span>
        <SelectRoot
          collection={paginationSizeOptions}
          size="sm"
          width="320px"
          defaultValue={[paginationSizeOptions.items[0].label]}
        >
          <SelectTrigger>
            <SelectValueText defaultValue={paginationSizeOptions.items[0].label} />
          </SelectTrigger>
          <SelectContent>
            {paginationSizeOptions.items.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <PaginationRoot count={20} pageSize={2} page={1} onPageChange={() => {}}>
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItem type="page" value={1} />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </div>
    </div>
  );
}

export default RecordPage;

interface RecordInputProps {
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}

const RecordInput: FunctionComponent<RecordInputProps> = ({ label, placeholder, onChange, onSubmit }) => {
  return (
    <div>
      <span className="mr-2">{label}</span>
      <Group className="border-solid border-2 border-gray-300 rounded-md h-8 pl-2" onSubmit={onSubmit}>
        <Input className=" focus:outline-none mr-7" placeholder={placeholder} onChange={onChange} />
        <InputElement placement={"end"} className="mr-1">
          <CiSearch size={20} />
        </InputElement>
      </Group>
    </div>
  );
};
