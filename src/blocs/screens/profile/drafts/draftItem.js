import { stringifyDate } from "../../../../services/services"
import { useConfirm } from "../../../../hooks/useConfirm"
import { useTakeReagentMutation } from "../../../../redux/api/reagentApi"
import { useState } from "react"
import { sMessageCh } from "../../../../redux/store/sMessageSlice"
import { useSelector } from "react-redux"
import { useDeleteDraftMutation } from "../../../../redux/api/draftApi"

export const DraftItem = (props) => {
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
            <div className="profile__value profile__value-underlined">{target.itemId}</div>
            <div className="profile__value profile__value-underlined">{target.name}</div>
            <div className="profile__value">
                <input value={quan || ''} onChange={(e)=> {setQuan(e.target.value)}} type="number" min={0} class="flow__input"/>
                <div className="profile__value flow__measure">{target.units}</div>
            </div>
            <div className="profile__value profile__value-underlined">{destination}</div>
            <div className="profile__value profile__value-underlined profile__value_text">{test}</div>

            <div className="profile__select  profile__select_10" onClick={confirmTakeReagent}>Списать</div>
            <div className="profile__delete profile__value_5" onClick={handleDelete}><img src="icons/trash.svg" alt="" /></div>
        </div>
    )
}