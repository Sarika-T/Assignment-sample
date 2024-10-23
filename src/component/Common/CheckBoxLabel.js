import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckBoxLabel() {
  return (
    <div sx={{width: '20%'}}>
      <Checkbox {...label} />
    </div>
  );
}
