import React, { useRef } from 'react';
import './DIV写TABLE.scss';
import { times } from 'lodash';
import 表格组件 from './表格组件';
import { Button } from 'antd';

const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const 请求数据 = () => {

};
const DIV写TABLE = () => {
  const actionRef = useRef<any>()
  const dataSource: any[] = [];
  times(1000, (i) => {
    dataSource.push({
      id: getUUID(),
      a: i,
      b: i,
      c: i,
      d: i,
      e: i,
    });
  });

  const columns = [
    { dataIndex: 'id', title: 'id', width: 100 },
    { dataIndex: 'a', title: '表头1', width: 100 },
    { dataIndex: 'b', title: '表头2' },
    { dataIndex: 'c', title: '表头3', width: 100 },
    { dataIndex: 'd', title: '表头4' },
    { dataIndex: 'e', title: '表头5', width: 100 },
  ];
  return (
    <div className={'adasd'}>
      <Button onClick={()=>{
        // actionRef.current.changeVal()
      }}>123</Button>
      <表格组件 rowSelection actionRef={actionRef} dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DIV写TABLE;
