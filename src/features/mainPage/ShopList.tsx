import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import ShopAction from './ShopAction';
import { useShopListCountFilter } from 'store/store';
import type { DataType, FilterConfirmProps, DataIndex } from './types/types';
import { shopListData } from 'utils/mock/MockData';

const ShopList: React.FC = () => {
  const { count } = useShopListCountFilter();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterConfirmProps,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
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
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current, 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      width: '5%',
    },
    {
      title: '쇼핑몰명',
      dataIndex: 'shopName',
      key: 'shopName',
      width: '24%',
      ...getColumnSearchProps('shopName'),
    },
    {
      title: '쇼핑몰코드',
      dataIndex: 'shopCode',
      key: 'shopCode',
      width: '24%',
      ...getColumnSearchProps('shopCode'),
    },
    {
      title: 'API여부',
      dataIndex: 'isApi',
      key: 'isApi',
      width: '21%',
    },
    {
      title: '엔진적용여부',
      dataIndex: 'isAppliedEngine',
      key: 'isAppliedEngine',
      width: '21%',
    },
    Table.EXPAND_COLUMN,
    {
      title: 'QA',
      dataIndex: 'qa',
      key: 'qa',
      width: '5%',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={shopListData}
      pagination={{ pageSize: count }}
      expandable={{
        expandedRowRender: record => <ShopAction shopCode={record.shopCode} />,
      }}
    />
  );
};

export default ShopList;
