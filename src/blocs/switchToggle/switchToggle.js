import './switchToggle.scss'


export const SwitchToggle = (props) => {
    const {checked, handleChange} = props
    return(    
        <label class="switch">
            <input 
                type="checkbox"
                onChange={handleChange}
                checked = {checked}
            />
            <span class="slider round"></span>
        </label>
    )
}
    