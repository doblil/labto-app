import React, {useState} from 'react';
import { useChangeProjectMutation, useCloseProjectMutation, useDeleteProjectMutation } from '../../../../redux/api/projectApi';
import { ChangeProject } from './changeProject';

export const ProjectItem = (props) => {
    const [showChangeProject, setShowChangeProject] = useState(false);
    const { name, code, descr, creator, closed, id } = props

    const [deleteProject, {isLoading: deleteLoading}] = useDeleteProjectMutation();
    const [closeProject, {isLoading: closeLoading}] = useCloseProjectMutation();



    return(
        <>
            {showChangeProject && <ChangeProject name = {name} descr = {descr} target={id} code={code} setShowChangeProject = {setShowChangeProject}/>}
            <div className="profile__card">
                <div className="profile__name">{name}</div> <br />
                <div className="profile__name">{code}</div> <br />
                <div className="profile__info">{descr}</div>
                
                <br />
                <div className="profile__contact">
                    <img src="icons/info.svg" alt="" />
                    <div className="profile__heading">Проект создал:  {creator}</div>
                </div>


                <br />
                <div className="profile__row">
                    <div className="profile__select" onClick={()=>{setShowChangeProject(true)}}>Редактировать</div>
                    {!closed && <div className="profile__select">Пренести в неактивные</div>}
                    {!!closed && <div className="profile__select">Активировать</div>}
                    {!!closed && <div className="profile__select">Удалить</div>}
                </div>
            </div>
        </>
    )
}