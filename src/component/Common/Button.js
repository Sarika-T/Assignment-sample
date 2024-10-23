import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AddIcon } from '../../assests/icon';
import ListIcon from '@mui/icons-material/List';

export default function Buttons(props) {
    const{name, variant, color, startIcon, className, sx} = props
    return (
        <Stack direction="row" spacing={2} className="stack-mui">
            <Button className={className} sx={sx} variant={variant} color={color} startIcon={startIcon}>
                {name}
            </Button>
        </Stack>
  );
}

// padding-right: 0;
//     font-size: 12px;
//     padding-bottom: 0;
//     width: 100%;
//     text-align: end;
//     justify-content: end;