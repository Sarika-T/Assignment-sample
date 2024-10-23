import Bottom from "../Bottom/Bottom";
import Content from "../Content/Content";
import Header from "../Header/Header";
import './MainPage.scss';



export default function MainPage() {
    return(
        <div className="mainpage-page">
            <div className="mainpage-page-header"><Header /></div>
            <div className="mainpage-page-content"><Content /></div>
            <div className="mainpage-page-bottom"><Bottom /></div>
        </div>
    )
}