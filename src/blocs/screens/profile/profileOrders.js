import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import '../../../sass/sassTemplates/menu.scss'


export const ProfileOrders = () => {
    
	const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('orders')
    }, [setActiveNav])

	return(
        <div className="orders">

      	</div>
    )
}