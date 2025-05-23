/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table, Dropdown, message } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import type { SortOrder } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

interface GenericDataType {
  key: string;
  [key: string]: any;
}

interface CustomTableProps {
  data: GenericDataType[];
  showAction?:boolean
  onEdit?: (record: GenericDataType) => void;
  onDelete?: (record: GenericDataType) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({ 
  data, 
  onEdit,
  onDelete,
  showAction = false
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: string
  ): TableColumnType<GenericDataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ?.toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()) || false,
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // Generate columns dynamically from the first data object's keys
  const generateColumns = (): TableColumnsType<GenericDataType> => {
    if (!data || data.length === 0) return [];
    
    const firstItem = data[0];
    const dataColumns = Object.keys(firstItem)
      .filter(key => key !== 'key') // Optional: exclude the key field from display
      .map((key) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
        dataIndex: key,
        key: key,
        ...getColumnSearchProps(key),
        sorter: (a: GenericDataType, b: GenericDataType) => {
          if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].localeCompare(b[key]);
          }
          return (a[key] || 0) - (b[key] || 0);
        },
        sortDirections: ["descend", "ascend"] as SortOrder[],
      }));

    // Create action column with proper typing
    const actionColumn: TableColumnType<GenericDataType> = {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 100,
      // Include these properties to match the structure of other columns
      dataIndex: '', // Empty dataIndex
      sorter: false, // No sorting for action column
      render: (_: any, record: GenericDataType) => (
        <Dropdown
          menu={{ 
            items: [
              {
                key: '1',
                label: 'Edit',
                onClick: () => onEdit(record)
              },
              {
                key: '2',
                label: 'Delete',
                danger: true,
                onClick: () => onDelete(record)
              }
            ] 
          }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    };

    return !showAction ? dataColumns :  [...dataColumns, actionColumn] as TableColumnsType<GenericDataType>;
  };

  const columns = generateColumns();

  return <Table columns={columns} dataSource={data} bordered scroll={{ x: "max-content" }} />;
};

export default CustomTable;