import './style.css'
const MenuEntry=()=>{
    return(
        <>
        <div className='menu'>
            <img className='icons' src='/images/Home.svg' alt='icons'></img>
            <div className='menuname'>
            Accueil
            </div>
            <img className='disableicon' src='/images/Search.svg' alt='icons'></img>
            <div className='disableText'>
            Rechercher
            </div>
            <img className='bibo' src='/images/Biblo.svg' alt='icons'></img>
            <div className='Bibliothèque'>
            Bibliothèque
            </div>
            </div>
        </>
    )
}
export default MenuEntry