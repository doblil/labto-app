import { decodeProjectName, stringifyDate } from "../../../../services/services"
import { useConfirm } from "../../../../hooks/useConfirm"
import { useTakeReagentMutation } from "../../../../redux/api/reagentApi"
import { useState } from "react"
import { sMessageCh } from "../../../../redux/store/sMessageSlice"
import { useSelector } from "react-redux"
import { useDeleteDraftMutation } from "../../../../redux/api/draftApi"


export const DraftItem = (props) => {
    const {projects} = useSelector(state=> state.project)
    const {target, date, test, quan:draftQuan, destination, id: draftId} = props
    const {name: userName} = useSelector(state => state.auth)
    
    const [quan, setQuan] = useState(draftQuan)

    const [FlowDialog, flowConfirm] = useConfirm(`Списать ${quan} ${target.units} ${target.name}`)

    const [takeReagent, {isLoading}] = useTakeReagentMutation()
    const [deleteDraft, {isLoading: deleteLoading}] = useDeleteDraftMutation()


    const handleTakeReagent = async () => {
        
        if(isLoading || deleteLoading) return
        if(!(date && quan && test && destination && target.name)){
            return sMessageCh('Заполнены не все поля')
        }
        const body = {
            date, quan, test, destination, name: userName
        }
        try {
           await takeReagent({target: target.reagent, body}).unwrap()
           await deleteDraft(draftId).unwrap()
        } catch (error) {
            console.error(error)
        }
    }

    const confirmTakeReagent = async () => {
        const confirm = await flowConfirm();
        if(confirm){
            handleTakeReagent()
        } else {
            return
        }
    }

    const handleDelete = async () => {
        if(isLoading || deleteLoading) return
        try {
            await deleteDraft(draftId).unwrap()
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="profile__item">
            <FlowDialog/>
            <div className="profile__value">{stringifyDate(date, true)}</div>
            <div className="profile__value profile__value-underlined profile__value_5">{target.itemId}</div>
            <div className="profile__value profile__value-underlined">{target.name}</div>
            <div className="profile__value">
                <input value={quan || ''} onChange={(e)=> {setQuan(e.target.value)}} type="number" min={0} class="flow__input"/>
                <div className="profile__value flow__measure" style={{display:'inline', marginLeft:'-2px'}}>{target.units}</div>
            </div>
            <div className="profile__value profile__value-underlined">{decodeProjectName(projects, destination)}</div>
            <div className="profile__value profile__value-underlined profile__value_text">{test}</div>

            <div className="profile__value" onClick={confirmTakeReagent}>
                <div className="profile__select" style={{marginLeft:'0', width:'73px', fontSize:'10px', marginLeft:'5px'}}>
                     Списать
                    </div>
                </div>
            <div className="profile__value profile__value_5" >
                <div className="profile__delete"onClick={handleDelete}>
                    <img src="icons/trash.svg" alt="" />
                </div>
            </div>
        </div>
    )
}