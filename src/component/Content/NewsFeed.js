import { borderRadius, textTransform, width } from "@mui/system";
import SerachBar from "../Common/SearchBar";
import Buttons from "../Common/Button";
import { DownArrow, HeartIcon, SettingsIcon } from "../../assests/icon";
import { useState } from "react";
import BasicModal from "../Common/Model";

export default function NewsFeed() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    console.log(open,"open")
    return(
        <div className="newsfeed-page">
            <div className="newsfeed-page-content">
                <div className="newsfeed-page-content-search">
                    <SerachBar 
                        placeholder = 'Sportykids Admin share some progress'
                        width= '85%'
                    />
                    <Buttons 
                       name = 'Post'
                       variant = 'contained'
                       color = 'error'
                       className = 'button-style'
                    />
                </div>
                <div className="newsfeed-page-content-filter">
                <Buttons
                    name= 'Story Filter'
                    variant="outlined"
                    color="primary"
                    className= "button-style"
                    fullWidth
                    sx={{border: '0', textTransform: 'none'}}
                />
                <DownArrow /> 
                </div>
                <div className="newsfeed-page-content-newsfeed-page">
                    <div className="newsfeed-page-content-newsfeed">
                        <div className="newsfeed-page-content-newsfeed-title">
                            <span className="newsfeed-page-content-newsfeed-title-name">Newsfeed</span>
                        </div>
                        <div className="newsfeed-page-content-newsfeed-content">
                            <div className="newsfeed-page-content-newsfeed-content-top">
                                <div className="newsfeed-page-content-newsfeed-content-top-left">
                                    <img className="newsfeed-page-content-newsfeed-content-top-left-image" alt="profile" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"/>
                                    <div className="newsfeed-page-content-newsfeed-content-top-left-details">
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-name">Demo Sports Coach User</span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post"></span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post">Posted at 11:15 on 21st Nov 2023</span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post"></span>
                                        <Buttons
                                        className= "button"
                                        name= 'Update'
                                        variant= 'contained'
                                        sx={{backgroundColor: 'deeppink', borderRadius: '10px', height: '20px', textTransform: 'capitalize'}} 
                                        />
                                    </div>
                                </div>
                                <div className="newsfeed-page-content-newsfeed-content-top-right">
                                    <SettingsIcon />
                                    <span className="newsfeed-page-content-newsfeed-content-top-right-edit">Posted about 8 hours ago</span>
                                </div>
                            </div>
                            <div className="newsfeed-page-content-newsfeed-content-middle">New Update by Demo Sports Coach User working on the Sample Project for We are the SportyKids.</div>
                            <div className="newsfeed-page-content-newsfeed-content-bottom">
                                <div className="newsfeed-page-content-newsfeed-content-bottom-like">
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-like-left"><HeartIcon /></div>
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-like-right">0 comments 0 Favurites</div>
                                </div>
                                <div className="newsfeed-page-content-newsfeed-content-bottom-comment">
                                    {/* <div className="newsfeed-page-content-newsfeed-content-bottom-comment-left"> */}
                                        <img alt="logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576" />
                                    {/* </div> */}
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-comment-middle">
                                    <SerachBar 
                                        placeholder = 'Write a comment...'
                                        width= '85%'
                                    />
                                    <Buttons 
                                        name = 'Post'
                                        variant = 'contained'
                                        color = 'error'
                                        className = 'button-style'
                                    />
                                    </div>
                                    {/* <div className="newsfeed-page-content-newsfeed-content-bottom-comment-right"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsfeed-page-content-newsfeed">
                        <div className="newsfeed-page-content-newsfeed-content">
                            <div className="newsfeed-page-content-newsfeed-content-top">
                                <div className="newsfeed-page-content-newsfeed-content-top-left">
                                    <img className="newsfeed-page-content-newsfeed-content-top-left-image" alt="profile" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"/>
                                    <div className="newsfeed-page-content-newsfeed-content-top-left-details">
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-name">Demo Sports Coach User</span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post"></span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post">Posted at 11:15 on 21st Nov 2023</span>
                                        <span className="newsfeed-page-content-newsfeed-content-top-left-details-post"></span>
                                        <Buttons
                                        className= "button"
                                        name= 'Update'
                                        variant= 'contained'
                                        sx={{backgroundColor: 'deeppink', borderRadius: '10px', height: '20px', textTransform: 'capitalize'}} 
                                        />
                                    </div>
                                </div>
                                <div className="newsfeed-page-content-newsfeed-content-top-right">
                                    <SettingsIcon />
                                    <span className="newsfeed-page-content-newsfeed-content-top-right-edit">Posted about 8 hours ago</span>
                                </div>
                            </div>
                            <div className="newsfeed-page-content-newsfeed-content-middle">New Update by Demo Sports Coach User working on the Sample Project for We are the SportyKids.</div>
                            <div className="newsfeed-page-content-newsfeed-content-middle-button">
                                <Buttons
                                    className= "button"
                                    name= 'Expand More'
                                    variant= 'contained'
                                    sx={{backgroundColor: 'darkgreen', textTransform: 'capitalize'}}
                                    onClick={handleOpen}
                                />
                                <BasicModal open={open} handleClose={handleClose} />
                            </div>
                            <div className="newsfeed-page-content-newsfeed-content-bottom">
                                <div className="newsfeed-page-content-newsfeed-content-bottom-like">
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-like-left"><HeartIcon /></div>
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-like-right">0 comments 0 Favurites</div>
                                </div>
                                <div className="newsfeed-page-content-newsfeed-content-bottom-comment">
                                    {/* <div className="newsfeed-page-content-newsfeed-content-bottom-comment-left"> */}
                                        <img alt="logo" src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/6399d1ace29cfd8861ace1ad/logo.jpg?d=1671027520576" />
                                    {/* </div> */}
                                    <div className="newsfeed-page-content-newsfeed-content-bottom-comment-middle">
                                    <SerachBar 
                                        placeholder = 'Write a comment...'
                                        width= '85%'
                                    />
                                    <Buttons 
                                        name = 'Post'
                                        variant = 'contained'
                                        color = 'error'
                                        className = 'button-style'
                                    />
                                    </div>
                                    {/* <div className="newsfeed-page-content-newsfeed-content-bottom-comment-right"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsfeed-page-content-load">
                    <Buttons 
                       name = 'Load More'
                       variant = 'contained'
                       className = 'button-style'
                       sx={{backgroundColor: 'darkgreen', textTransform: 'none'}}
                    />
                </div>
            </div>
        </div>
    )
}