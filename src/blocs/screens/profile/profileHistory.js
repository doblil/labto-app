import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import '../../../sass/sassTemplates/menu.scss'


export const ProfileHistory = () => {
  
	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('history')
    }, [setActiveNav])
  
  	return(
        <div className="history">

      	</div>
    )
}