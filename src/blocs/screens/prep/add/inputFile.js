import './add.scss'

export const InputFile = (props) => {
    
    const {passportFile, setPassportFile} = props


    return(
        <label className="add__document_form">
        <input type="file" onChange={(e)=>{setPassportFile(e.target.files)}}/>
            {!passportFile && <p className="add__file">Выбрать файл</p>}
            {passportFile && 
            <>
                <p className="add__file">{passportFile[0].name}</p>
            </>}
        </label>
    )
}