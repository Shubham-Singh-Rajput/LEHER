import Icon from '../Spotify'
import './Style.css'
import MenuEntry from './../MenuEntry/index';
import Playlist from './../Playlist/Playlist';


const Sidebar=()=>{
    return (
        <>
        <div className='sidebar'>
            <Icon></Icon>
            <MenuEntry />
            <Playlist/>
          
        </div>
        </>
    )
}
export default Sidebar