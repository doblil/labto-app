import { useDispatch } from 'react-redux'
import { sMessageCh } from '../../../../redux/store/sMessageSlice';
import './add.scss'

export const InputFile = (props) => {
    const dispatch = useDispatch();
    const {passportFile, setPassportFile, maxSize = 5242880} = props



    const handleAddFile = (e) => {
        if (e.target.files[0].size > maxSize){
            setPassportFile(null)
            return dispatch(sMessageCh(`Размер файла не должен превышать ${(Math.round(maxSize/1024/1024*10))/10} МВ`))   
        }
        setPassportFile(e.target.files)
    }

    return(
        <label className="add__document_form">
        <input type="file" accept=".pdf,.jpg" onChange={handleAddFile}/>
            {!passportFile && <p className="add__file">Выбрать файл <br/> (до {(Math.round(maxSize/1024/1024*10))/10}МВ) </p>}
            {passportFile && 
            <>
                <p className="add__file">{passportFile[0].name}</p>
            </>}
        </label>
    )
}