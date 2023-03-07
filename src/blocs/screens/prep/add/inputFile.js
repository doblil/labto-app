import { useDispatch } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice';
import './add.scss'

export const InputFile = (props) => {
    const dispatch = useDispatch();
    const {passportFile, setPassportFile} = props



    const handleAddFile = (e) => {
        if (e.target.files[0].size > 5242880){
            setPassportFile(null)
            return dispatch(sMessageCh('Размер файла не должен превышать 5 МВ'))   
        }
        setPassportFile(e.target.files)
    }

    return(
        <label className="add__document_form">
        <input type="file" accept=".pdf,.jpg" onChange={handleAddFile}/>
            {!passportFile && <p className="add__file">Выбрать файл <br/> (до 5МВ) </p>}
            {passportFile && 
            <>
                <p className="add__file">{passportFile[0].name}</p>
            </>}
        </label>
    )
}