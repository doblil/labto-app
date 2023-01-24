import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


export const ReportAnnual = () => {
    
    const [activeNav, setActiveNav] = useOutletContext()
	useEffect(() => {
        setActiveNav('annual')
    }, [setActiveNav])
    
    return(
        <div className="profile__wrap">
        </div>
    )
  }