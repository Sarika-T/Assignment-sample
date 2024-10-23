import { borderRadius } from "@mui/system";
import Buttons from "../Common/Button";
import SerachBar from "../Common/SearchBar";
import CheckBoxLabel from "../Common/CheckBoxLabel";
import { SettingsIcon } from "../../assests/icon";


export default function Tasks() {
    return(
        <div className="tasks-page">
            <div className="tasks-page-header">
                <span className="tasks-page-header-title">Tasks</span>
                <div className="tasks-page-header-middle">
                <Buttons
                    name= '4 To Do'
                    variant="contained"
                    color="black"
                    fullWidth
                    sx={{ border: '1px solid', textTransform: 'none'}}
                />
                <Buttons
                    name= '0 Done'
                    variant="contained"
                    fullWidth
                    sx={{border: '0', textTransform: 'none', backgroundColor: 'grey'}}
                />
                </div>
                <div className="tasks-page-header-button">
                <Buttons
                    name= 'Filters'
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{border: '0', textTransform: 'none'}}
                />
                </div>
            </div>
            <div className="tasks-page-content">
                <div className="tasks-page-content-search">
                    <SerachBar 
                        placeholder = 'Add your next task'
                        width= '55%'
                        sx= {{borderRadius: '10px'}}
                    />
                    <Buttons
                    name= 'Post'
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{border: '0', textTransform: 'none'}}
                    />
                </div>
                <div className="tasks-page-content-boxes">
                    <span className="tasks-page-content-boxes-text">text your ppl</span>
                    <CheckBoxLabel />
                    <SettingsIcon />
                </div>
                <div className="tasks-page-content-boxes2">
                    <span className="tasks-page-content-boxes-text">colleague to call about w..</span>
                    <CheckBoxLabel />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}