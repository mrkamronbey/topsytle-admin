
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteClient, GetClient } from '../../redux/client_comment';
import Delete from './delete';
import AdminAddForm from './post';
import Put from './put';
import TableAdd from './table';
function ClientComponent({open , handleClose}) {
  const dispatch = useDispatch();
  const [adminId , setAdminId] = useState();
  const [openDelete , setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false)
  const handleDeleteModal = (e) => {
   setAdminId(e.target.id)
   setOpenDelete(true)
  }
  const [openPut , setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false)
  const handlePutModal = (e) => {
   setAdminId(e.target.id)
   setOpenPut(true)
  }
  const HandleDelete =  async() =>{
    await dispatch(DeleteClient(adminId))
    dispatch(GetClient())
    handleCloseDelete()
  }

  return (
      <>
      <AdminAddForm Open={open} HandleClose={handleClose}/>
      <TableAdd onClickDelete={handleDeleteModal} onClickPut={handlePutModal} />
      <Delete
      HandleDelete={HandleDelete}
      openDelete={openDelete}
      handleCloseDelete={handleCloseDelete}
/>
<Put
      HandlePut={adminId}
      openPut={openPut}
      handleClosePut={handleClosePut}
/>
      </>
  )
}

export default ClientComponent