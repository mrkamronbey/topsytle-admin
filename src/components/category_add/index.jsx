import { useState } from "react";
import { useDispatch } from "react-redux";
import { CategoryDelete, CategoryPut } from "../../redux/category/index";
import Delete from "./delete";
import CategoryAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
function CategoryAddComponent({ open, handleClose }) {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setCategoryId(e.target.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setCategoryId(e.target.id);
    setOpenPut(true);
  };
  const HandleDelete = () => {
    dispatch(CategoryDelete(categoryId));
  };
  const HandlePut = () => {
    dispatch(CategoryPut(categoryId));
  };
  return (
    <>
      <CategoryAddForm Open={open} HandleClose={handleClose} />
      <TableAdd onClickDelete={handleDeleteModal} onClickPut={handlePutModal} />
      <Delete
        HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        put_id={categoryId}
        HandlePut={HandlePut}
        openPut={openPut}
        handleClosePut={handleClosePut}
      />
    </>
  );
}

export default CategoryAddComponent;
