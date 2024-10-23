import { textTransform } from "@mui/system";
import Buttons from "../Common/Button";
import { AddIcon } from "../../assests/icon";
import Slider from "../Common/Slider";
import SliderBar from "../Common/Slider";


export default function Progress() {
    return(
        <div className="progress-page">
            <div className="progress-page-header">
                <span className="progress-page-header-title">Personal Progress</span>
                <div className="progress-page-header-button">
                <Buttons
                    name= 'Go to board'
                    variant="outlined"
                    color="primary"
                    fullWidth // Makes the button take the full width of the container
                    sx={{border: '0', textTransform: 'none'}}
                />
                </div>
            </div>
            <div className="progress-page-content">
                <div className="progress-page-content-left">
                    <img className="progress-page-content-left-image" alt="logo" src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg"/>
                </div>
                <div className="progress-page-content-middle">
                    <span className="progress-page-content-middle-text">I feel very lonely</span>
                    <span className="progress-page-content-middle-bar"></span>
                </div>
                <div className="progress-page-content-right"><AddIcon /></div>
            </div>
            <div className="progress-page-content">
                <div className="progress-page-content-left">
                    <img className="progress-page-content-left-image" alt="logo" src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg"/>
                </div>
                <div className="progress-page-content-middle">
                    <span className="progress-page-content-middle-text">I like going out</span>
                    <span className="progress-page-content-middle-bar3"></span>
                </div>
                <div className="progress-page-content-right"><AddIcon /></div>
            </div>
            <div className="progress-page-content">
                <div className="progress-page-content-left">
                    <img className="progress-page-content-left-image" alt="logo" src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg"/>
                </div>
                <div className="progress-page-content-middle">
                    <span className="progress-page-content-middle-text">i have lots of energy</span>
                    <span className="progress-page-content-middle-bar2"></span>
                </div>
                <div className="progress-page-content-right"><AddIcon /></div>
            </div>
        </div>
    )
}