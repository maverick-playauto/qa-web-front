import { SearchMenu } from 'pages/mainPage/interface';
import { Select, Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ChangeEvent, useState } from 'react';

const Search = ({ searchMenu }: SearchMenu) => {
  const [selectValue, setSelectValue] = useState(searchMenu[0].value);
  const [inputValue, setInputValue] = useState('');

  const [form] = useForm();
  const handleSelectChange = (value: any) => {
    setSelectValue(value);
  };
  const handleInputChage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Form form={form} layout="inline">
      <Form.Item name="select" label="" rules={[{ required: false }]}>
        <Select
          defaultValue={searchMenu[0].label}
          onChange={handleSelectChange}
          options={searchMenu}
          style={{ width: 100 }}
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="검색어를 입력해주세요."
          style={{ width: 240 }}
          onChange={handleInputChage}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          검색
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Search;
