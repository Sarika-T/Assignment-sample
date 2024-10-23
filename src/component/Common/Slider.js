import React, { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)(({ theme }) => ({
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
        background: `linear-gradient(to right, ${theme.palette.primary.main} ${50}%, ${theme.palette.grey[400]} ${50}%)`,
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: `2px solid ${theme.palette.primary.main}`,
        '&:hover': {
            boxShadow: 'inherit',
        },
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
}));

const SliderBar = () => {
    const [value, setValue] = useState(5); // Default rating value

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 300, mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
                Rate this item (1 to 10):
            </Typography>
            <CustomSlider
                value={value}
                min={1}
                max={10}
                step={1}
                onChange={handleChange}
                valueLabelDisplay="on"
                marks
            />
            <Typography sx={{ mt: 2 }}>Your rating: {value}</Typography>
        </Box>
    );
};

export default SliderBar;
