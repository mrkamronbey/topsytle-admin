import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Put from "./../../../assets/image/icons-put.png"
import Delete from "./../../../assets/image/icons-delete.png"
import { useSelector } from 'react-redux';
export default function TableAdd({ onClickDelete , onClickPut }) {
  const ClientCommentGetState = useSelector(state => state.team.getTeam?.Data)
    const HeaderRows = [
        {
            id : 1, 
            title : "Картинка"
        },
        {
            id : 2, 
            title : "имя"
        },
        {
          id : 3, 
          title : "направления"
      },
        {
          id : 4, 
          title : "Удалить и изминеть",
          algin : "right"
        }
    ]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem , index) =>
                <>
            <TableCell align={elem.algin}  key={index}>{elem.title}</TableCell>
                </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {ClientCommentGetState.map((row) => (
            <TableRow
              key={row.team_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.team_img} width={60} height={60}  alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.team_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.team_position}
              </TableCell>
              <TableCell align="right"><button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.client_id} onClick={onClickPut}><img id={row.team_id} src={Put} width={25} height={25} alt="" /></button> <button style={{background : "white" , border : "none" , cursor :"pointer"}} id={row.team_id}  onClick={onClickDelete}><img id={row.team_id} src={Delete} width={25} height={25} alt="" /></button></TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
