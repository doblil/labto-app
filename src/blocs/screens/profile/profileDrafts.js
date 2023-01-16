import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'


export const ProfileDrafts = () => {

	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('drafts')
    }, [setActiveNav])

  	return(
    	<div className="drafts">

    	</div>
    )
}