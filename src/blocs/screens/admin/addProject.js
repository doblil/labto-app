

import './admin.scss'
import './../profile/profile.scss'

import { CustomSelect } from '../../customSelect/customSelect'


export const addProject = (props) => {
    
    // const [activeNav, setActiveNav] = useOutletContext()
	// useEffect(() => {
    //     setActiveNav('addprofile')
    // }, [setActiveNav])
    
    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close"></div>
                    <div className="overlay__heading"> <p>Новый проект</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Полное название</div>
                        <input
                            placeholder='Название'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Код</div>
                        <input
                            placeholder='00000'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Описание</div>
                        <input
                            placeholder='Описание проекта'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Руководитель</div>
                        <CustomSelect
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Номер телефона (автоматически)</div>
                        <input
                            placeholder='номер'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Email (автоматически)</div>
                        <input
                            placeholder='почта'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn ">Добавить</button>
                        <button className="btn flow__btn">Отменить</button>
                    </div>
                </div>
            </div>

        </>
    )
}

