import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


export const ReportDepartment = (props) => {

    return(
        <div className="report">
        <div className="filter"style={{padding:'15px', paddingBottom:'0px', position:'relative', width:'100%'}}>
            <h5 style={{marginBottom:'30px'}}>Задайте период и интересующее управление</h5>

            <div className="filter__wrap" style={{marginBottom:'5px'}}>
                <div className="filter__inputs" >
                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                        <div className="filter__label">От</div>
                        <input type="date" className="filter__input" style={{height:'33px'}}/>
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}}>
                        <div className="filter__label">До</div>
                        <input type="date" className="filter__input" style={{height:'33px'}}/>
                    </div>

                    <div className="filter__inner" style={{marginBottom:'10px', marginRight:'20px'}} >
                        <div className="filter__label">Управление</div>
                        <select defaultValue='g'style={{width:'255px', height:'33px'}}>
                            <option  value={'g'}>Управление проекта 1</option>
                            <option  value={'mg'}>Управление проекта 2</option>
                            <option  value={'kg'}>Управление проекта 3</option>
                            <option  value={'l'}>Управление проекта 4</option>
                            <option  value={'ml'}>Управление проекта 5</option>
                            <option  value={'pcs'}>Управление проекта 6</option>
                        </select>
                    </div>
                </div>
                <button className="btn" style={{height:'33px'}}>Создать отчет</button>  
            </div>

            <div className="filter__wrap" style={{marginTop:'5px', marginBottom:'10px', marginRight:'120px'}}>
                <div className="filter__item filter__item_active"  style={{marginTop:'5px'}}>Реактивы</div>
                <div className="filter__item"  style={{marginTop:'5px'}}>Стандарты</div>
                <div className="filter__item"  style={{marginTop:'5px'}}>Субстанции</div>
                <div className="filter__item"  style={{marginTop:'5px'}}>ВЭЖХ/ГХ</div>
            </div>
            <div className="filter__print">Распечатать</div>
        </div>

        <div className="history overflow overflow__mt50"  style={{height: '60vh'}}>
             <table table className="table__wrap"> 
                  <thead>     
                      <tr>
                        <th>№</th>
                        <th>дата</th>
                        <th>Пользователь</th>
                        <th style={{minWidth:'120px'}}>Анализ</th>
                        <th>Вещество</th>
                        <th>Количество</th>
                        <th>Стоимость</th>
                      </tr>
                  </thead>
                <tbody>
                    <tr>
                        <td>45</td>
                        <td>2023.01.31 01:11</td>
                        <td>Федорко Илья Николаевич</td>
                        <td style={{minWidth:'120px'}}>Определение энантиомеров на приборе для определения угла оптического вращения</td>
                        <td>Набор стандарт титров СТ-12-5 рН 9,23</td>
                        <td>40</td>
                        <td>1000 руб</td>
                    </tr>

                  </tbody>
                
              </table>
        </div>
    </div>
    )
  }