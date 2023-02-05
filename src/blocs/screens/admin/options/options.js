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
            <h6>В этом разделе можно добавить или удалить определенные данные, которые используются в сервисе. Любые изменения отображаются у абсолютно всех пользователей</h6>

            <div className="options__wrapper overflow">
                <div className="options__section">
                    <div className="options__title">Типы стандартов</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            <div className="options__item">
                                <div className="options__name">USP Rs</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">USP Rs</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">USP Rs jdfhg hfj dh</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">USP Rs</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">USP Rs</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                        </div>

                        <div className="options__add">
                            <input type="text" />
                            <button className="btn">+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Производители</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            <div className="options__item">
                                <div className="options__name">Нева реактив</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">Мерк</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">Сигма-Олдридж</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                        </div>
                        <div className="options__add">
                            <input type="text" />
                            <button className="btn">+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Должности</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            <div className="options__item">
                                <div className="options__name">Самый главный мой любимый человек</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">Илюша</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">Федорко</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                        </div>
                        <div className="options__add">
                            <input type="text" />
                            <button className="btn">+</button>
                        </div>
                    </div>
                </div>

                <div className="options__section">
                    <div className="options__title">Отделы</div>
                    <div className="options__window overflow overflow__mb35">
                        <div className="options__list">
                            <div className="options__item">
                                <div className="options__name">Управление по новым продуктам</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">По борьбе с организованной рес тупностью</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                            <div className="options__item">
                                <div className="options__name">Федорко</div>
                                <div className="options__delete"><img src="icons/trash_white.svg" alt="trash" /></div>
                            </div>
                        </div>
                        <div className="options__add">
                            <input type="text" />
                            <button className="btn">+</button>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
  }