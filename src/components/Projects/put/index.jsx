import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetProjects, PutProjects, UploadImage } from "../../../redux/projects";
import ModalCommon from "../../common/Modal/Modal"
import { Wrapper } from "./styled-index"

function Put({openPut , handleClosePut , HandlePut }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.projects)
    const dataProject = useSelector(state => state.projects?.uploadProjects)

    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }

    const HandleSubmit =  async(e) =>{
        e.preventDefault();
        const body = {
           image : dataProject.data,
        }
        await dispatch(PutProjects({body , id:HandlePut}))
        dispatch(GetProjects())
        handleClosePut()
      }
    return(
        <>
    <ModalCommon  width={340} open={openPut} handleClose={handleClosePut}>
          <Wrapper>
          <h3>изменить</h3>
                <form onSubmit={HandleSubmit}>
                {dataProject.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
                {data.getProjects?.Data.map(elem => elem.img_id == HandlePut ?
                <>
                <button type="submit" value={elem.tube_id}>изменить</button>
                </>
          :null)}
                </form>
          </Wrapper>
      </ModalCommon>
        </>
    )
}
export default Put