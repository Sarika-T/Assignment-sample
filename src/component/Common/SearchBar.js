import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme, width }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '10px',
    width: width,
    border: '1px solid grey',
    textAlign: 'left',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: '0.5rem',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            // width: '20ch',
        },
    },
}));

export default function SerachBar(props) {
    const {placeholder, width, sx} = props;
    return(
        <Search width={width} sx={sx}>
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            <StyledInputBase
              className='search-input'
              placeholder= {placeholder}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    )
}