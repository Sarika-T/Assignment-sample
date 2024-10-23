import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NewsFeed from '../Content/NewsFeed';
import Events from '../Left/Events';
import Contacts from '../Left/Contacts';
import Projects from '../Left/Projects';
import Albums from '../Left/Albums';
import Organisation from '../Left/Organisation';

const drawerWidth = 250;

const colorMap = {
    0: 'deeppink',
    1: 'navy',
    2: 'purple',
    3: 'green',
    4: 'red'
};

const MyDrawer = () => {
    const [selectedOption, setSelectedOption] = useState('NewsFeed');

    const renderContent = () => {
        switch (selectedOption) {
            case 'NewsFeed':
                return <Typography variant='h6'><NewsFeed /></Typography>
            case 'Events':
                return <Typography variant="h6"><Events /></Typography>;
            case 'Contacts':
                return <Typography variant="h6"><Contacts /></Typography>;
            case 'Projects':
                return <Typography variant="h6"><Projects /></Typography>;
            case 'Albums':
                return <Typography variant="h6"><Albums /></Typography>;
            case 'Organisation/Followers':
                return <Typography variant="h6"><Organisation /></Typography>;
            default:
                return <Typography variant="h6">Select an option</Typography>;
        }
    };

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        overflowY: 'unset',
                        position: 'relative',
                        alignItems: 'center',
                        gap: '20px',
                        padding: '10px 0px',
                        width: '100%'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List className='drawer-list'>
                    {['Events', 'Contacts', 'Projects', 'Albums', 'Organisation/Followers'].map((text, index) => (
                        
                        <ListItem className="drawer-listitem" sx={{ color: colorMap[index] || 'black' }} key={text} disablePadding>
                            <ListItemButton className="drawer-listbutton" onClick={() => handleClick(text)}>
                                <ListItemText className="drawer-text" primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'lightgrey', p: 3 }}
            >
                {renderContent()}
            </Box>
        </Box>
    );
};

export default MyDrawer;
