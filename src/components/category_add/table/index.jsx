import * as React from "react";
import './styles.css'
import TableCommon from "../../common/table";
import { useSelector } from "react-redux";
export default function TableAdd({ onClickDelete, onClickPut }) {
  const categoryGetState = useSelector((state) => state.category);
  const rows = categoryGetState.categoryGet?.data;
  const data = [];
  rows.map((elem) => {
    data.push({
      key: elem.id,
      Имякатегорииузб: elem.category_name_uz,
      Имякатегориирусский: elem.category_name_ru,
      Действие: (
        <div className="btn-wrap">
          <button onClick={onClickPut} id={elem.id}>
            <i id={elem.id} class="bx bx-message-square-edit"></i>
          </button>
          <button onClick={onClickDelete} id={elem.id}>
            <i id={elem.id} class="bx bxs-trash"></i>
          </button>
        </div>
      ),
    });
  });

  const columns = [
    {
      title: "Имя категории узб",
      dataIndex: "Имякатегорииузб",
      key: "Имякатегорииузб",
    },
    {
      title: "Имя категории русский",
      dataIndex: "Имякатегориирусский",
      key: "Имякатегориирусский",
    },
    {
      title: "Действие",
      dataIndex: "Действие",
      key: "Действие",
      fixed: "right",
    },
  ];
  const HeaderRows = [
    {
      id: 1,
      title: "Title uz",
    },
    {
      id: 2,
      title: "Title ru",
    },
    {
      id: 3,
      title: "Delete",
      algin: "right",
    },
  ];
  return (
    <TableCommon
      bordered
      scroll={{
        y: 400,
      }}
      columns={columns}
      data={data}
      pagination={false}
    />
  );
}
