import { AddIcon, SettingsIcon } from "../../assests/icon";
import Buttons from "../Common/Button";



export default function Projects() {
    return(
        <div className="events-page">
            <div className="events-page-header">
                <span className="events-page-header-title">Projects</span>
            </div>
            <div className="events-page-content-box">
                <div className="contacts-page-content">
                    <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">A Training Project</div>
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
                        <div className="events-page-content-title">Adoption Applications</div>
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
                        <div className="events-page-content-title">Brimingham Youth</div>
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
                        <div className="events-page-content-title">Events Projects</div>
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
                        <div className="events-page-content-title">Announcments Projects</div>
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
                    sx={{border: '0', textTransform: 'capitalize'}}
                />
            </div>
        </div>
    )
}