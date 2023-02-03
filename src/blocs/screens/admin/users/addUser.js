

import '../admin.scss'
import '../../profile/profile.scss'

import { CustomSelect } from '../../../customSelect/customSelect'


export const AddUser = (props) => {
    
    const {setShowAddProfile} = props
    
    return(
        <>
            <div className="overlay">
                <div className="overlay__window">
                    <div className="close"></div>
                    <div className="overlay__heading"> <p>Новый сотрудник</p>
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Полное имя</div>
                        <input
                            placeholder='ФИО'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Должность</div>
                        <input
                            placeholder='должность'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    
                    <div className="flow__destination">
                        <div className="flow__label">Отдел</div>
                        <input
                            placeholder='название отдела'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Управление</div>
                        <input
                            placeholder='название управления'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Руководитель</div>
                        <CustomSelect
                            options = {[]}
                            width = {'60%'}
                            height = {'20px'}
                            fontSize = {'10px'}
                            selected = {''}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Номер телефона</div>
                        <input
                            placeholder='номер'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>

                    <div className="flow__destination">
                        <div className="flow__label">Email</div>
                        <input
                            placeholder='почта'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    <div className="flow__destination">
                        <div className="flow__label">Пароль</div>
                        <input
                            placeholder='почта'
                            style ={{width: '60%', height: '30px'}}
                        />
                    </div>
                    
                    <div className="flow__btn-wrap">
                        <button className="btn btn_white flow__btn ">Добавить</button>
                        <button className="btn flow__btn" onClick={()=>setShowAddProfile(false)}>Отменить</button>
                    </div>
                </div>
            </div>

        </>
    )
}

