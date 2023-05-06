import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Put from "./../../../assets/image/icons-put.png";
import Delete from "./../../../assets/image/icons-delete.png";
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
  const HeaderRows = [
    {
      id: 1,
      title: "имя",
    },

    {
      id: 2,
      title: "телефонный номер",
    },
    {
      id: 3,
      title: "время/день/месяц/год",
    },
  ];
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
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         {HeaderRows.map((elem, index) => (
    //           <>
    //             <TableCell align={elem.algin} key={index}>
    //               {elem.title}
    //             </TableCell>
    //           </>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {ContactGetState.map((row) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell component="th" scope="row">
    //             {row.phone_number}
    //           </TableCell>

    //           <TableCell component="th" scope="row">
    //             {DateFormat(row.createdAt)}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <>
      <TableCommon
        bordered
        columns={columns}
        data={data}
        pagination={false}
        scroll={{
          y: 400,
        }}
      />
    </>
  );
}
