
import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            {...props}
            sx={{
                width:147,
                height: 4,
                color: "#00D63C",
                padding: '12px 0',
                '& .MuiSlider-rail': {
                    backgroundColor: '#00D63C',
                    height: 4,
                    border: 'none',
                    borderRadius: '10px',
                },
                '& .MuiSlider-thumb':{
                    width: 16,
                    height: 16,
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #00D63C',
                    borderShadow: 'none',
                    '&::before': {
                        boxShadow: 'none',
                    },
                    '&::after':{
                        width: 4,
                        height: 4,
                        backgroundColor: '#00D63C',
                        borderRadius: '50%',
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active':{
                        boxShadow: 'none',
                    }
                }


            }}
        />
    )
}

export default SuperRange
