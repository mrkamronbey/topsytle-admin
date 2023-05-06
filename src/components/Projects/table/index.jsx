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
import { ProductGet } from "../../../redux/products/index";
import { useSelector } from "react-redux";
import { Row, Col } from "react-grid-system";
import { Image } from "antd";
import { useState } from "react";
import "./styles.css";
import { Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

export default function TableAdd({ onClickDelete, onClickPut, selectId }) {
  const { Meta } = Card;
  const [visible, setVisible] = useState(false);
  const ClientCommentGetState = useSelector(
    (state) => state.projects.getProjects?.Data
  );
  const productGetState = useSelector(
    (state) => state.product.productGet?.data
  );
  console.log(productGetState.map((elem) => elem));
  const fliterData = ClientCommentGetState.filter(
    (elem) => elem.product == selectId
  );
  console.log(fliterData);
  const HeaderRows = [
    {
      id: 1,
      title: "Картинка",
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
    //       {ClientCommentGetState.map((row) => (
    //         <TableRow
    //           key={row.img_id}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             <img src={row.image} width={60} height={60} alt="" />
    //           </TableCell>
    //           <TableCell align="right">
    //             <button
    //               style={{
    //                 background: "white",
    //                 border: "none",
    //                 cursor: "pointer",
    //               }}
    //               id={row.id}
    //               onClick={onClickPut}
    //             >
    //               <img
    //                 id={row.id}
    //                 src={Put}
    //                 width={25}
    //                 height={25}
    //                 alt=""
    //               />
    //             </button>{" "}
    //             <button
    //               style={{
    //                 background: "white",
    //                 border: "none",
    //                 cursor: "pointer",
    //               }}
    //               id={row.id}
    //               onClick={onClickDelete}
    //             >
    //               <img
    //                 id={row.id}
    //                 src={Delete}
    //                 width={25}
    //                 height={25}
    //                 alt=""
    //               />
    //             </button>
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <>
      <div className="card_wrapper">
        <Row className="row">
          {ClientCommentGetState.map((elem) => (
            <Col className="col" lg={3}>
              <div className="card_wrap">
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.05)",
                  }}
                  cover={
                    <>
                      <Image
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                        src={elem.image}
                      />
                    </>
                  }
                  actions={[
                    <EditOutlined
                      onClick={onClickPut}
                      id={elem.id}
                      key="edit"
                    />,
                    <DeleteOutlined
                      onClick={onClickDelete}
                      id={elem.id}
                      key="delete"
                    />,
                  ]}
                >
                  <Meta title={elem.products.title_ru} />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
