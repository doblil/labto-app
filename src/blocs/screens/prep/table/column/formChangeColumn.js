import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useChangeColumnMutation } from "../../../../../redux/api/columnApi";
import { changeColReset, chColDescrCh, chColMainProjectCh, chColPassportCh, chColPriceCh, chColRestSolventCh } from "../../../../../redux/store/changeColumnSlice";
import { useUploadColMutation } from "../../../../../redux/api/uploadApi";
import { InputFile } from "../../add/inputFile";
import { CustomSelect } from "../../../../customSelect/customSelect";
import { useConfirm } from "../../../../../hooks/useConfirm";
export const FormChangeColumn = (props) => {
    
    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null)
    const [initialise, setInitialise]=useState(false);

    const {setShowChange} = props

    const dispatch = useDispatch();

    const {projects} = useSelector(state => state.project); 
    const {mainProject, pressureLimit, descr, passport, price, restSolvent} = useSelector(state=>state.changeColumn)
    const {_id:target, itemId, name} = useSelector(state => state.activeColumn);
    const [ChangeDialog, changeConfirm] = useConfirm(<p>Изменить данные колонки ID: {itemId}, {name}? <br/><br/> <p style={{fontWeight: 'bold', color: 'red', textAlign: 'left'}}>Изменение данных не соответствует практике GMP, поэтому вы не сможете поменять значимые поля</p>Если вы ошиблись при создании колонки, лучше удалите ее и внесите заново.</p>)

    const [changeColumn, {isLoading: changeLoading}] = useChangeColumnMutation();
    const [upload, {isLoading: uploadLoading}] = useUploadColMutation()
    
    const confirmChange = async () => {
        const confirm = await changeConfirm();
        if(confirm){
            handleChange()
        } else {
            return
        }
    }

    const handleClose = () => {
        setShowChange(false)
        dispatch(changeColReset())
    }

    const handleChange = async () => {
        const body = {
            passport, price, descr, pressureLimit, mainProject, restSolvent
        };
        
        await changeColumn({target, body}).unwrap()
        if(passportType === 'file'){
            const formData = new FormData();
            formData.append('files', passportFile[0])
            formData.append('fileName', passportFile[0].name)
            await upload({itemId, formData}).unwrap()
        }
        

        
        setInitialise(true);
        setPassportFile(null);
        setPassportType('link');
        dispatch(changeColReset());
        setShowChange(false)
    } 

    const handleChangeDestination = (target) => {
        dispatch(chColMainProjectCh(target?.value))
    }

    const projectOptions = projects.map(item => {
        return { value: {code: item.code, name: item.name}, label: `${item.code}, ${item.name}`}
    })

    if (uploadLoading || changeLoading){
        return(
            <div className="overlay" >         
                <div className="overlay__window">
                    <h5>Пожалуйста подождите, идет загрузка</h5>
                </div>
            </div>
        )
    }
    

    return (
        <>
            <ChangeDialog/>
            <div className="overlay" >         
                    <div className="overlay__window">
                        <div className="close" onClick={handleClose}></div>

                        <div className="overlay__heading">Изменение колонки ID: {itemId}, {name}</div>
                        <div className="add__inner">
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">Описание</div>
                                <textarea 
                                    value={descr} 
                                    type="text" 
                                    class="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chColDescrCh(e.target.value))}}
                                    style ={{height: '100px'}}
                                />
                            </div>
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">Цена</div>
                                <input 
                                    value={price} 
                                    type="number"
                                    lass="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chColPriceCh(e.target.value))}}
                                />
                            </div>
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">Растворитель хранения</div>
                                <input 
                                    value={restSolvent} 
                                    type="text" 
                                    class="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chColRestSolventCh(e.target.value))}}
                                />
                            </div>
                            <div className="add__label">Основной проект</div>
                            <CustomSelect
                                initialise = {initialise}
                                setInitialise = {setInitialise}
                                handleChange = {handleChangeDestination}
                                height = {'25px'}
                                fontSize = {'12px'}
                                width = {'250px'}
                                options = {projectOptions}
                            /> 
                           

                            <div className="add__destination add__destination_top">
                                <div className="add__label">Документы</div>
                                <div className="add__document">
                                    <div className="add__document_window">
                                        <div className="add__document-title">Добавить паспорт:</div>
                                        <div className="add__document-checkbox">
                                            <input 
                                                value={'link'}
                                                className="custom-checkbox" 
                                                type="checkbox"id="chb-addLink" 
                                                name="chb-addLink"
                                                checked={passportType === 'link'}
                                                onChange={(e) => setPassportType(e.target.value)}
                                            />
                                            <label className="custom-checkbox__text" for="chb-addLink">Ссылка</label>

                                            <input 
                                                value = {'file'}
                                                className="custom-checkbox" 
                                                type="checkbox"id="chb-addFile" 
                                                name="chb-addFile"
                                                checked={passportType === 'file'}
                                                onChange={(e) => setPassportType(e.target.value)}
                                            />
                                            <label className="custom-checkbox__text" for="chb-addFile">Файл</label>
                                        </div>

                                        {passportType === 'file' && <InputFile passportFile={passportFile} setPassportFile = {setPassportFile}/>}
                                        
                                        {passportType === 'link' && 
                                        <div className="add__document-result">
                                            <input 
                                                value={passport} 
                                                type="text" 
                                                class="add__input add__input-doc add__input-passport add__input_low"
                                                onChange={(e)=>dispatch(chColPassportCh(e.target.value))}
                                            />
                                        </div>}           
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                           
                        <div className="confirm__btns">
                            <button className='btn' onClick={confirmChange}>Изменить</button>
                            <button className='btn' onClick={handleClose}>Отменить</button>
                        </div>
                    </div>
                </div>
        </>
    )
}