import * as React from "react";
import { useSelector } from "react-redux";
import TableCommon from "../../common/table";
export default function TableAdd({ onClickDelete, onClickPut }) {
  const ContactGetState = useSelector(
    (state) => state.contact.getContact?.Data
  );
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
 
  const data = [];
  ContactGetState.map((elem) => {
    data.push({
      key: elem.id,
      Имя: elem.name,
      Телефонныйномер: elem.phone_number,
      Времяденьмесяцгод: DateFormat(elem.createdAt),
    });
  });

  const columns = [
    {
      title: "Имя",
      dataIndex: "Имя",
      key: "Имя",
      fixed: "left",
    },
    {
      title: "Телефонный номер",
      dataIndex: "Телефонныйномер",
      key: "Телефонныйномер",
    },
    {
      title: "Время/день/месяц/год",
      dataIndex: "Времяденьмесяцгод",
      key: "Времяденьмесяцгод",
    },
  ];
  return (
    
    <>
      <TableCommon
        bordered
        columns={columns}
        data={data}
        pagination={false}
        scroll={{
          y: 330,
        }}
      />
    </>
  );
}
