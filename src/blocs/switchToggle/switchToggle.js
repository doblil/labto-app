import './switchToggle.scss'


export const SwitchToggle = (props) => {
 
    const {onEnable, onDisable, checked} = props
    const handleChange = () => {
        if(!checked) return onEnable();
        return onDisable();
    }
    
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
    