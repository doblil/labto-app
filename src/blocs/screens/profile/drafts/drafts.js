import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useGetDraftsQuery } from '../../../../redux/api/draftApi'
import '../../../../sass/sassTemplates/menu.scss'
import { DraftItem } from './draftItem'


export const Drafts = () => {

	const [activeNav, setActiveNav] = useOutletContext()
	const {data, isLoading,  isSuccess, } = useGetDraftsQuery();
	
	useEffect(() => {
        setActiveNav('drafts')
    }, [setActiveNav])


	let content = <></>

	if(isLoading) content = <h5>Загрузка...</h5>
	if (data && data.drafts.length === 0) content = <h5>У вас пока что нет ни одного черновика</h5>
	if(data?.drafts){
		content = data.drafts.map(draft => {
			return <DraftItem
				key = {draft._id}
				id = {draft._id}
				target = {draft.target}
				date = {draft.date}
				test = {draft.test}
				quan = {draft.quan}
				destination = {draft.destination}
			/>
		})
	}




	

  	return(
    	<div>

			<div className="profile__parameter">
				<div className="profile__value profile__value_header">дата</div>
				<div className="profile__value profile__value_5 profile__value_header">ID</div>
				<div className="profile__value profile__value_header">вещество</div>
				<div className="profile__value profile__value_header">количество</div>
				<div className="profile__value profile__value_header">статья списания</div>
				<div className="profile__value profile__value_text profile__value_header">вид испытания</div>
				<div className="profile__value profile__value_header"></div>
				<div className="profile__value profile__value_5 profile__value_header"></div>
            </div>
			<div className="overflow drafts">{content}</div>
        </div>
    )
}