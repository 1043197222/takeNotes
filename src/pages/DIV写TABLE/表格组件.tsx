import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import './DIV写TABLE.scss';
import { waitTimePromise } from '../../utils/utils';
import { Checkbox, Spin } from 'antd';

interface 组件参数类型 {
  columns: any[];
  dataSource?: any[];
  actionRef?: any;
  rowSelection?: any;
}

const 表格组件 = ((组件参数: 组件参数类型) => {
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);

  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const 数据请求方法 = useCallback(async () => {
    setLoading(true);
    await waitTimePromise(100);
    setDataSource(组件参数.dataSource || []);
    setLoading(false);
  }, []);
  // useImperativeHandle(组件参数.actionRef, () => {
  //   return {
  //     changeVal: () => {
  //     },``
  //   };
  // });
  useEffect(() => {
    数据请求方法();
  }, []);

  return <div className={'x-table'}>
    <div className={'x-thead'}>
      <div className={'x-tr'}>
        {组件参数.rowSelection && <div
          key={`check}`}
          className={'x-th'}
          style={{
            width: 45,
          }}>
          <Checkbox indeterminate={indeterminate} onChange={(e) => {
            setCheckAll(e.target.checked);
          }} checked={checkAll} />
        </div>}
        {组件参数.columns.map((item, index) => {
          return <div
            key={`${item.dataIndex}_${index}`}
            className={'x-th'}
            style={{
              width: item.width,
            }}>{item.title}</div>;
        })}

      </div>
    </div>
    <div className={'x-tbody'}>
      {dataSource.map((item, index) => {

        return <>
          <div key={item.id} className={'x-tr'}>
            <div
              key={`checked_${index}`}
              className={'x-td'}
              style={{
                width: 45,
              }}>
              <Checkbox />
            </div>
            {组件参数.columns.map((itemp) => {
              return <>
                <div
                  key={`${item.id}_${index}`}
                  className={'x-td'}
                  style={{
                    width: itemp.width,
                  }}>
                  {item[itemp.dataIndex]}
                </div>
              </>;
            })}

          </div>
        </>;
      })}

    </div>
  </div>
    ;
});

export default 表格组件;