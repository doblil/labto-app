import '../admin.scss'
import '../../profile/profile.scss'

import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAddOptionMutation, useDeleteOptionsMutation } from '../../../../redux/api/optionApi'
import { sMessageCh } from '../../../../redux/store/sMessageSlice'


export const Options = (props) => {

    const [activeNav, setActiveNav] = useOutletContext();
    useEffect(() => {
        setActiveNav('options')
    }, [])

    const [newRsType, setNewRsType] = useState('');
    const [newManufacturer, setNewManufacturer] = useState('')
    const [newManufacturerCol, setNewManufacturerCol] = useState('')
    const [newManufacturerSubst, setNewManufacturerSubst] = useState('')
    const [newPosition, setNewPosition] = useState('')
    const [newDirection, setNewDirection] = useState('')

    const dispatch = useDispatch()
    const {allDepartments, allPositions, allDirections, allManufacturers, allRsTypes, allManufacturersCol, allManufacturersSubst} = useSelector(state=> state.global)
    
    const [addOption, {isLoading: addLoading}] = useAddOptionMutation();
    const [deleteOption, {isLoading: deleteLoading}] = useDeleteOptionsMutation();

    const handleDeleteOption = async (name, option, target) => {
        if(!target || !option) return 
        if(addLoading || deleteLoading) return dispatch(sMessageCh('попробуйте еще раз'));
        const body = {name, option};
        await deleteOption({body, target}).unwrap()
    }
    const handleAddOption = async (name, state, stateSetter) => {
        if(!state) return dispatch(sMessageCh('Необходимо заполнить'))
        if(addLoading || deleteLoading) return dispatch(sMessageCh('попробуйте еще раз'));
        const option = {value: state, label: state}
        const body = {name, option};
        await addOption(body).unwrap();
        stateSetter('')
    }


    
    let rsTypesList = allRsTypes.map(item => {
       return <div className="options__item" key={item._id}>
            <div className="options__name">{item.label}</div>
            <div className="options__delete" onClick={()=>handleDeleteOption('rsType', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
        </div>
    })
    let manufacturersList = allManufacturers.map(item => {
        return <div className="options__item" key={item._id}>
             <div className="options__name">{item.label}</div>
             <div className="options__delete" onClick={()=>handleDeleteOption('manufacturer', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
         </div>
     })
    let manufacturersColList = allManufacturersCol.map(item => {
        return <div className="options__item" key={item._id}>
             <div className="options__name">{item.label}</div>
             <div className="options__delete" onClick={()=>handleDeleteOption('manufacturerCol', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
         </div>
     })
    let manufacturersSubstList = allManufacturersSubst.map(item => {
        return <div className="options__item" key={item._id}>
             <div className="options__name">{item.label}</div>
             <div className="options__delete" onClick={()=>handleDeleteOption('manufacturerSubst', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
         </div>
     })
    let positionsList = allPositions.map(item => {
        return <div className="options__item" key={item._id}>
             <div className="options__name">{item.label}</div>
             <div className="options__delete" onClick={()=>handleDeleteOption('position', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
         </div>
     })
    let directionsList = allDirections.map(item => {
        return <div className="options__item" key={item._id}>
             <div className="options__name">{item.label}</div>
             <div className="options__delete" onClick={()=>handleDeleteOption('direction', item, item._id)}><img src="icons/trash_white.svg" alt="trash" /></div>
         </div>
     })

    return(
        <div style={{height:'100%'}}>
            <h6 style={{marginTop:'-10px'}}>В этом разделе можно добавить или удалить определенные данные, которые используются в сервисе. Любые изменения отображаются у абсолютно всех пользователей</h6>
            <h6>Перед проведением администрирования необходимо отключить всех пользователей от системы</h6>

            <div className="options__wrapper overflow overflow__mt29" style={{height:'calc(100% - 20px)'}}>
                <div className="options__section">
                    <div className="options__title">Типы стандартов</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {rsTypesList}
                        </div>

                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewRsType(e.target.value)}}
                                value={newRsType}
                            />
                            <button className="btn" onClick={()=>handleAddOption('rsType', newRsType, setNewRsType)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Производители реактивов/CO</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {manufacturersList}
                        </div>
                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewManufacturer(e.target.value)}}
                                value = {newManufacturer}
                            />
                            <button className="btn" onClick={()=>handleAddOption('manufacturer', newManufacturer, setNewManufacturer)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="options__section">
                    <div className="options__title">Производители колонок</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {manufacturersColList}
                        </div>
                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewManufacturerCol(e.target.value)}}
                                value = {newManufacturerCol}
                            />
                            <button className="btn" onClick={()=>handleAddOption('manufacturerCol', newManufacturerCol, setNewManufacturerCol)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="options__section">
                    <div className="options__title">Производители субстанций</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {manufacturersSubstList}
                        </div>
                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewManufacturerSubst(e.target.value)}}
                                value = {newManufacturerSubst}
                            />
                            <button className="btn" onClick={()=>handleAddOption('manufacturerSubst', newManufacturerSubst, setNewManufacturerSubst)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Должности</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {positionsList}
                        </div>
                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewPosition(e.target.value)}}
                                value = {newPosition}
                            />
                            <button className="btn" onClick={()=>handleAddOption('position', newPosition, setNewPosition)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Отделы</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            {directionsList}
                        </div>
                        <div className="options__add">
                            <input 
                                type="text" 
                                onChange={(e) => {setNewDirection(e.target.value)}}
                                value ={newDirection}
                            />
                            <button className="btn" onClick={()=>handleAddOption('direction', newDirection, setNewDirection)}>+</button>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
  }