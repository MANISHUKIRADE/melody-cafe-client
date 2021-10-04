import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Search.scss';

export default function SerachBar() {
  return (
    <Paper className='SearchCss'
      component="form"
      sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 250 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search songs' }}
      />
      <IconButton type="submit" sx={{ p: '1%' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
