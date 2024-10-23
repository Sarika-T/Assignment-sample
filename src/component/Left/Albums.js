import { useState } from "react";
import { AddIcon, SettingsIcon } from "../../assests/icon";
import Buttons from "../Common/Button";
import BasicModal from "../Common/Model";


export default function Albums() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div className="events-page">
            <div className="events-page-header">
                <span className="events-page-header-title">Albums</span>
            </div>
                <div className="events-page-content-box">
                    <div className="contacts-page-content">
                        <div className="contacts-page-content-left">
                            <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                        </div>
                        <div className="contacts-page-content-right">
                            <div className="events-page-content-title">All Hubs</div>
                        </div>
                        <div className="events-page-content-right">
                            <SettingsIcon />
                        </div>
                    </div>
                    <div className="contacts-page-content">
                        <div className="contacts-page-content-left">
                            <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                        </div>
                        <div className="contacts-page-content-right">
                            <div className="events-page-content-title">Bradford</div>
                        </div>
                        <div className="events-page-content-right">
                            <SettingsIcon />
                        </div>
                    </div>
                    <div className="contacts-page-content">
                        <div className="contacts-page-content-left">
                            <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                        </div>
                        <div className="contacts-page-content-right">
                            <div className="events-page-content-title">Funders</div>
                        </div>
                        <div className="events-page-content-right">
                            <SettingsIcon />
                        </div>
                    </div>
                    <div className="contacts-page-content">
                        <div className="contacts-page-content-left">
                            <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                        </div>
                        <div className="contacts-page-content-right">
                            <div className="events-page-content-title">Beginning</div>
                        </div>
                        <div className="events-page-content-right">
                            <SettingsIcon />
                        </div>
                    </div>
                    <div className="contacts-page-content">
                        <div className="contacts-page-content-left">
                            <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                        </div>
                        <div className="contacts-page-content-right">
                            <div className="events-page-content-title">Success</div>
                        </div>
                        <div className="events-page-content-right">
                            <SettingsIcon />
                        </div>
                    </div>
                </div>
                <div className="events-page-content-button">
                    <Buttons
                        name= 'New Project'
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon = {<AddIcon />}
                        onClick={handleOpen}
                        sx={{border: '0', textTransform: 'capitalize'}}
                    />
                    <BasicModal open={open} handleClose={handleClose} />
                </div>
        </div>
    )
}