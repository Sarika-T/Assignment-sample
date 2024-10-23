import { AddIcon, NotificationIcon } from '../../assests/icon';
import Buttons from '../Common/Button';
import DropDown from '../Common/DropDown';
import SerachBar from '../Common/SearchBar';
import ListIcon from '@mui/icons-material/List';
import './Header.scss';
import NewsFeed from '../Content/NewsFeed';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return(
        <div className="header-page">
            <div className="header-page-left">
                <div className='header-page-left-logo' onClick={ () => navigate(-1)}>
                    <img alt='Makerble Logo' src='https://d3p03xrqe2ja84.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png' />
                </div>
                <div className='header-page-left-dropdown'>
                    <DropDown />
                </div>
                <div className='header-page-left-logo' onClick={() =>navigate(<NewsFeed />) }>
                    Home
                </div>
                <div className='header-page-left-logo' onClick={() => navigate('/explore')}>
                    Explore
                </div>
            </div>
            <div className='header-page-middle'> 
                <SerachBar 
                    placeholder = 'Search for contacts and projects'
                    width= '50%'
                />
            </div>
            <div className="header-page-right">
                <div className='header-page-right-icons' onClick={()=> navigate('/notifications')}>
                    <img alt='Help' src='https://www.freeiconspng.com/uploads/blue-question-mark-icon-1.png'/>
                    <NotificationIcon />
                    <img alt='mailIcon' src='https://www.shutterstock.com/image-vector/email-envelope-icon-vector-illustration-260nw-1672898794.jpg' />
                    <img alt='power icon' src='https://www.kindpng.com/picc/m/712-7128642_lightning-energy-power-icon-png-transparent-png.png' style={{width:'10%'}}/>
                </div>
                <div className='header-page-right-admin'>
                    <img alt='Profile Icon' src= 'https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576' />
                    <span className='header-page-right-admin-title'>Sportykids Admin</span>
                </div>
                <div className='header-page-right-options'>
                    <Buttons
                       className= 'button-style'
                       name = 'Create'
                       variant = 'contained'
                       color = 'error'
                       startIcon= {<AddIcon className='icon-style'/>}
                       onClick={()=> navigate('/create')}
                    />
                    <Buttons
                       className= 'button-style'
                       name = 'More'
                       variant = 'outlined'
                       color = 'black'
                       startIcon= {<ListIcon className='icon-style'/>}
                       onClick={()=> navigate('/more')}
                    />
                </div>
            </div>
        </div>
    )
}