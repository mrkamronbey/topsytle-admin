
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminDelete } from '../../redux/admin_add';
import Delete from './delete';
import AdminAddForm from './post';
import Put from './put';
import TableAdd from './table';
function AdminAddComponent({open , handleClose}) {
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
   setOpenPut(true)
  }
  const HandleDelete = () =>{
    dispatch(adminDelete(adminId))
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
      // HandlePut={HandlePut}
      openPut={openPut}
      handleClosePut={handleClosePut}
/>
      </>
  )
}

export default AdminAddComponent