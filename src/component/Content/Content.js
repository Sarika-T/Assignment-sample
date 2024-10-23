import Tabs from '../Common/Tabs';
import Boards from './Boards';
import './Content.scss';
import Progress from './Progress';
import Tasks from './Tasks';

export default function Content() {
    return(
        <div className="content-page">
            <div className="content-page-left"><Tabs /></div>
            <div className="content-page-middle"></div>
            <div className="content-page-right">
                <div className='content-page-right-boards'><Boards /></div>
                <div className='content-page-right-progress'><Progress /></div>
                <div className='content-page-right-tasks'><Tasks /></div>
            </div>
        </div>
    )
}