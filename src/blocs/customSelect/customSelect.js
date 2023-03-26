import React, { useRef, useEffect} from 'react';
import  Select from 'react-select' 

export const CustomSelect = (props) => {
 
    const {options, width, height, fontSize, input, handleChange, initialise, setInitialise, selected} = props;
    const selectRef = useRef(null);


    const initialiseSelect = () => {
        selectRef.current.clearValue();
        setInitialise(false)
    }
    useEffect(() => {
        if(initialise){
            initialiseSelect()
        }
    })

    const selectStyles = {

        container: (baseStyles) => ({
            ...baseStyles,
            width: `${width}`, //250
            borderRadius: '6px'
            
          }),

        input: (baseStyles) => ({
            ...baseStyles,
            display: `${input}`,
            padding: '0',
            boxShadow: 'none',
            height: `${height}`,
            fontSize: `${fontSize}`,
            input: {
                boxShadow: 'none',
                border: 'none',
                fontSize: 'inherit',
                height: `${height}`,
            },
            placeholder:{
                height: `${height}`
            }
        }),

        control: (baseStyles) => ({
            ...baseStyles,
            borderColor: '#00a0a0',
            boxShadow: `inset 0px 0px 4px #a6a6a6`,
            height: `${height}`
        }),

        indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            display: 'none'
        }),
        indicatorsContainer: (baseStyles) => ({
            ...baseStyles,
            cursor: 'pointer'
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            fontSize: `${fontSize}`,
            fontWeight: '700'
        }),
        valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: '0px 3px'
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: `${fontSize}`,
            padding: ' 10px 5px',
            color: state.isSelected ? 'white' : 'black'
        }),
        placeholder: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: `${fontSize}`
        }),
    }
    return(
        <Select
            value={options.filter((option) => option?.value === selected || option?.label === selected )[0]}
            ref={selectRef}
            placeholder = {'Выберите...'}
            onChange = {handleChange}
            options={options}
            theme={(theme) => ({
                ...theme,
                borderRadius: 6,
                colors: {
                ...theme.colors,
                primary25: '#dedede',
                primary50: '#dedede',
                primary: '#00a0a0',

                },
            })}
            styles={selectStyles}
        />
    )
}