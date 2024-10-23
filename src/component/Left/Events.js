import { SettingsIcon } from "../../assests/icon";
import Buttons from "../Common/Button";
import './Left.scss';

export default function Events() {
    return(
        <div className="events-page">
            <div className="events-page-header">
                <span className="events-page-header-title">Events</span>
            </div>
            <div className="events-page-content-box">
                <div className="events-page-content">
                    <div className="events-page-content-left">
                        <div className="events-page-content-title">Indoor Cricket</div>
                        <div className="events-page-content-time">10:00 21/11/23 - 13:00 21/11/23</div>
                        <div className="events-page-content-details">1 Manager, 2 Workers,2 Guests</div>
                    </div>
                    <div className="events-page-content-right">
                        <SettingsIcon />
                    </div>
                </div>
                <div className="events-page-content">
                    <div className="events-page-content-left">
                        <div className="events-page-content-title">Indoor Cricket</div>
                        <div className="events-page-content-time">10:00 21/11/23 - 13:00 21/11/23</div>
                        <div className="events-page-content-details">1 Manager, 2 Workers,2 Guests</div>
                    </div>
                    <div className="events-page-content-right">
                        <SettingsIcon />
                    </div>
                </div>
                <div className="events-page-content">
                    <div className="events-page-content-left">
                        <div className="events-page-content-title">Indoor Cricket</div>
                        <div className="events-page-content-time">10:00 21/11/23 - 13:00 21/11/23</div>
                        <div className="events-page-content-details">1 Manager, 2 Workers,2 Guests</div>
                    </div>
                    <div className="events-page-content-right">
                        <SettingsIcon />
                    </div>
                </div>
                <div className="events-page-content">
                    <div className="events-page-content-left">
                        <div className="events-page-content-title">Indoor Cricket</div>
                        <div className="events-page-content-time">10:00 21/11/23 - 13:00 21/11/23</div>
                        <div className="events-page-content-details">1 Manager, 2 Workers,2 Guests</div>
                    </div>
                    <div className="events-page-content-right">
                        <SettingsIcon />
                    </div>
                </div>
            </div>
            <div className="events-page-content-button">
                <Buttons
                    name= 'Past Events'
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{border: '0', textTransform: 'capitalize', backgroundColor: 'deeppink'}}
                />
                <Buttons
                    name= 'Upcoming Events'
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{border: '0', textTransform: 'capitalize', backgroundColor: 'purple'}}
                />
            </div>
        </div>
    )
}