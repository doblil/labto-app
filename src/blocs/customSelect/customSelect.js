import React from 'react';
import  Select from 'react-select' 

export const CustomSelect = (props) => {
    
    const {options, width, height, fontSize, input} = props;

    
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
            input: {
                boxShadow: 'none',
                border: 'none',
                fontSize: 'inherit',
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
        option: (baseStyles) => ({
            ...baseStyles,
            fontSize: `${fontSize}`,
            padding: ' 10px 5px',
            color: 'black'
        }),
    }
    
    return(
        <Select
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