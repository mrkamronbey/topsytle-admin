import { Table, Switch } from "antd";
import styles from "./style-module.css";
import './styles.css'

function TableCommon({
  columns,
  data,
  summary,
  bordered,
  scroll,
  className,
  pagination,
}) {
  return (
    <>
      <Table
        className={className}
        columns={columns}
        dataSource={data}
        bordered={bordered}
        tableLayout="none"
        pagination={pagination}
        scroll={scroll}
        summary={summary}
      />
    </>
  );
}
export default TableCommon;
