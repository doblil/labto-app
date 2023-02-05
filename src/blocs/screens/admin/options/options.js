import '../admin.scss'
import '../../profile/profile.scss'

import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


export const Options = (props) => {
    
    // const [activeNav, setActiveNav] = useOutletContext()
	// useEffect(() => {
    //     setActiveNav('options')
    // }, [setActiveNav])
    
    return(
        <>
            <h6>В этом разделе можно добавить или убрать типы стандартов, названия производителей</h6>
            <div className="options__title">Типы стандартов</div>
            <div className="options__list overflow">
                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                
                <div className="options__item">
                    <div className="options__name">USP Rshkjhjkhkjhjxdcvgbhnjkml,kmjnhbg</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>

                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>

                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                <div className="options__item">
                    <div className="options__name">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>
                <div className="options__item">
                    <div className="options">USP Rs</div>
                    <img src="icons/trash_white.svg" alt="trash" />
                </div>

            </div>
        </>
    )
  }