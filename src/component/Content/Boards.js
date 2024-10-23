import { Link } from "react-router-dom";
import { AddIcon } from "../../assests/icon";
import Buttons from "../Common/Button";
import { textTransform } from "@mui/system";


export default function Boards(){
    return(
        <div className="board-page">
            <div className="board-page-header">
                <span className="board-page-header-title">Boards</span>
                <div className="board-page-header-title-button">
                <Buttons
                    className= 'button-style'
                    name = 'New Board'
                    variant = 'contained'
                    startIcon= {<AddIcon className='icon-style'/>}
                />
                </div>
            </div>
            <div className="board-page-content">
                <img  className="board-page-content-image" alt="logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                <span className="board-page-content-name">All Hubs</span>
            </div>
            <div className="board-page-content">
                <img  className="board-page-content-image" alt="logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                <span className="board-page-content-name">Birmingham - Attendance Record</span>
            </div>
            <div className="board-page-content">
                <img  className="board-page-content-image" alt="logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576"/>
                <span className="board-page-content-name">Birmingham - Attendance Record</span>
            </div>
            <div className="board-page-content-button">
                <Buttons
                    name= 'Show all'
                    variant="outlined"
                    color="primary"
                    fullWidth // Makes the button take the full width of the container
                    sx={{border: '0', textTransform: 'capitalize'}}
                />
            </div>
            
        </div>
    )
}