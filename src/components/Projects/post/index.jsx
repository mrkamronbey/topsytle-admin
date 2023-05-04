import React, { useRef, useState } from 'react'
import CommonBtn from '../../common/CommonBtn'
import ModalCommon from '../../common/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './styled-index';
import { GetProjects, PostProjects, UploadImage } from '../../../redux/projects';
function AdminAddForm({Open , HandleClose}) {
    const dispatch = useDispatch();
    const dataProject = useSelector(state => state.projects?.uploadProjects)
    const HandleChange =  async (e) => {
      await dispatch(UploadImage(e))
    }
    const HandleSubmit = async (e) =>{
        e.preventDefault();
        const image = dataProject.data
        await dispatch(PostProjects({image }))
        dispatch(GetProjects())
        HandleClose()
      }
 
  return (
    <ModalCommon open={Open} handleClose={HandleClose}>
          <>
          <Wrapper onSubmit={HandleSubmit}>
              <h3>Админ добавить</h3>
              {dataProject.Loading == true ? 
                <span className="loading">loading...</span>
              :<>
              <input type="file" id="file" onChange={HandleChange}/>
              <label for="file" class="custom-file-upload">
                  <span className="span-download"><ion-icon  name="cloud-download-outline"></ion-icon></span>
              загрузить изображение
              </label>
              </>}
                  <CommonBtn type={"submit"} style={{marginTop : "20px"}}>Добавить</CommonBtn>
             </Wrapper>
          </>
    </ModalCommon>
  )
}

export default AdminAddForm