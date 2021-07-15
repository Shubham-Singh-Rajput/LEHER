import Card from '../Card'
import './style.css'

const FullBody=()=>{

    return(
        <>
            <div className='container'>
                <img src='/images/circle2.svg' alt='images' className='circle2'></img>
                <img src='/images/Vector.svg' alt='images' className='vector'></img>
                <img src='/images/circle2.svg' alt='images' className='circle2 circle3'></img>
                <img src='/images/Vector.svg' alt='images' className='vector vector2'></img>
                <img src='/images/Normal.svg' alt='images' className='normal'></img>
                <div className='profileName'>Arthur Guillermin Ha...</div>
                <img src='/images/ProfilePic.svg' alt='images' className='profilepic'></img>
                <div className='firstPlaylist'>Écoutés récemment</div>
               <Card/>
                
                
            </div>
        </>
    )
}
export default FullBody