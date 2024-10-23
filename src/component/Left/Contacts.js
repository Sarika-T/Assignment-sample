import { AddIcon, FilterIcon } from "../../assests/icon";
import Buttons from "../Common/Button";


export default function Contacts() {
    return(
        <div className="events-page">
            <div className="contacts-page-header">
                <span className="contacts-page-header-title">Contacts</span>
                <FilterIcon />
                <img className="contacts-page-image" alt="Logo" src="https://www.freeiconspng.com/uploads/blue-question-mark-icon-1.png"/>
            </div>
            <div className="events-page-content-box">
                <div className="contacts-page-content">
                    <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">Adriana Jones</div>
                        <div className="events-page-content-time">Your last update was 1 day ago</div>
                    </div>
                </div>
                <div className="contacts-page-content">
                <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">Adolescent Welbeing Scale respondent 9</div>
                        <div className="events-page-content-time">Your last update was 21 days ago</div>
                    </div>
                </div>
                <div className="contacts-page-content">
                <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">Becky</div>
                        <div className="events-page-content-time">Your last update was 11 days ago</div>
                    </div>
                </div>
                <div className="contacts-page-content">
                <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">Edward Bella livingstone</div>
                        <div className="events-page-content-time">Your last update wa 22 days ago</div>
                    </div>
                </div>
                <div className="contacts-page-content">
                <div className="contacts-page-content-left">
                        <img  className='contacts-image' alt="Profile Logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                    </div>
                    <div className="contacts-page-content-right">
                        <div className="events-page-content-title">Vampire</div>
                        <div className="events-page-content-time">Your last update wa 2 days ago</div>
                    </div>
                </div>
            </div>
            <div className="events-page-content-button">
                <Buttons
                    name= 'New Contacts'
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<AddIcon />}
                    sx={{border: '0', textTransform: 'capitalize', backgroundColor: 'deeppink'}}
                />
            </div>
        </div>
    )
}