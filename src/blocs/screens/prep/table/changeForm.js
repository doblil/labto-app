import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useChangeReagentMutation } from "../../../../redux/api/reagentApi";
import { useUploadMutation } from "../../../../redux/api/uploadApi";
import { chCASCh, chPriceCh, chLocationCh, chSDSCh, chTDSCh, chPassportCh, chWarnCh, changeReset } from "../../../../redux/store/changeItemSlice";
import { InputFile } from "../add/inputFile";
export const ChangeForm = (props) => {
    
    const [passportType, setPassportType] = useState('link')
    const [passportFile, setPassportFile] = useState(null)
    const {setShowChange} = props
    const dispatch = useDispatch();

    const {CAS, SDS, TDS, passport, warn, location, price, itemId, name} = useSelector(state=>state.changeItem)
    const {userId} = useSelector(state => state.auth);
    const {_id:target} = useSelector(state => state.activeReagent)
    const [changeReagent] = useChangeReagentMutation();
    const [upload] = useUploadMutation()
    
    
    const handleWarn = (w) => {
        if (warn.includes(w)){
            dispatch(chWarnCh((warn.filter(item=> item !== w))))
        } else {
            dispatch(chWarnCh([...warn, w]))
        }
    }

    const handleWarnStyle = (w) => {
        if (warn.includes(w)){
            return {
                boxShadow: '-2px 1px 4px rgb(181, 181, 181)',
                border: '1px solid rgb(185, 185, 185)',
            }
        } else {
            return {}
        }
    }

    const handleChange = async () => {
        const body = {
            CAS, SDS, TDS, passport, warn, location, price, itemId, name
        };

        await changeReagent({target, body}).unwrap()

        if(passportType === 'file'){
            const formData = new FormData();
            formData.append('files', passportFile[0])
            formData.append('fileName', passportFile[0].name)
            await upload({userId, itemId, formData}).unwrap()
        }
        setPassportFile(null);
        setPassportType('link')
        dispatch(changeReset())

    } 

    return (
        <>
        
            <div className="confirm" >         
                    <div className="confirm__window">
                        <div className="close" onClick={() => setShowChange(false)}></div>

                        <div className="confirm__heading">Изменение реактива ID: {itemId}, {name}</div>
                        <div className="add__inner">
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">CAS-№</div>
                                <input 
                                    value={CAS} 
                                    type="text" 
                                    class="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chCASCh(e.target.value))}}
                                />
                            </div>
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">Цена</div>
                                <input 
                                    value={price} 
                                    type="text" c
                                    lass="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chPriceCh(e.target.value))}}
                                />
                            </div>
                            <div className="add__destination add__destination_mt8">
                                <div className="add__label">Расположение</div>
                                <input 
                                    value={location} 
                                    type="text" 
                                    class="add__input add__input_low"
                                    onChange={(e)=>{dispatch(chLocationCh(e.target.value))}}
                                />
                            </div>
                            <div className="add__destination add__destination_top add__destination_mt8">
                                <div className="add__label">Пиктограммы опасности СГС</div>
                                <div className="add__choice add__choice_mini">
                                <div style={handleWarnStyle('explosive')} onClick={()=>handleWarn('explosive')} className="add__pict add__pict_mini"><img src="icons/danger/explosive.svg" alt="explosive" />Explosive</div>
                            <div style={handleWarnStyle('flameble')} onClick={()=>handleWarn('flameble')} className="add__pict add__pict_mini"><img src="icons/danger/flammable.svg" alt="flammable" />Flammable</div>
                            <div style={handleWarnStyle('oxidizing')} onClick={()=>handleWarn('oxidizing')} className="add__pict add__pict_mini"><img src="icons/danger/oxidizing.svg" alt="oxidizing" />Oxidizing</div>
                            <div style={handleWarnStyle('gas')} onClick={()=>handleWarn('gas')} className="add__pict add__pict_mini"><img src="icons/danger/compressed_gas.svg" alt="compressed_gas" />Compressed gas</div>
                            <div style={handleWarnStyle('corrosive')} onClick={()=>handleWarn('corrosive')} className="add__pict add__pict_mini"><img src="icons/danger/corrosive.svg" alt="corrosive" />Corrosive</div>
                            <div style={handleWarnStyle('toxic')} onClick={()=>handleWarn('toxic')} className="add__pict add__pict_mini"><img src="icons/danger/toxic.svg" alt="toxic" />Toxic</div>
                            <div style={handleWarnStyle('harmful')} onClick={()=>handleWarn('harmful')} className="add__pict add__pict_mini"><img src="icons/danger/harmful.svg" alt="harmful" />Harmful</div>
                            <div style={handleWarnStyle('hHazard')} onClick={()=>handleWarn('hHazard')} className="add__pict add__pict_mini"><img src="icons/danger/health_hazard.svg" alt="health_hazard" />Health hazard</div>
                            <div style={handleWarnStyle('eHazard')} onClick={()=>handleWarn('eHazard')} className="add__pict add__pict_mini"><img src="icons/danger/environmentally_hazardous.svg" alt="environmentally_hazardous" />Environmentally hazardous</div>
                                </div>
                            </div>
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
                                                onChange={(e)=>dispatch(chPassportCh(e.target.value))}
                                            />
                                        </div>}           
                                    </div>
                                

                                    <div className="add__document_window">
                                        <div className="add__document-title">Добавить SDS:</div>
                                        <input 
                                            value={SDS} 
                                            type="text" 
                                            class="add__input add__input-doc add__input_low"
                                            onChange={(e)=>{dispatch(chSDSCh(e.target.value))}}
                                        />
                                    </div>             

                                    <div className="add__document_window">
                                        <div className="add__document-title">Добавить TDS:</div>
                                        <input 
                                            value={TDS} 
                                            type="text" 
                                            class="add__input add__input-doc add__input_low"
                                            onChange={(e)=>{dispatch(chTDSCh(e.target.value))}}
                                        />
                                    </div>             
                                </div>
                            </div>
                        </div>
                           
                        <div className="confirm__btns">
                            <button className='btn' onClick={handleChange}>Изменить</button>
                            <button className='btn' >Отменить</button>
                        </div>
                    </div>
                </div>
        </>
    )
}