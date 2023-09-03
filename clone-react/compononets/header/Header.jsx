import './Header.css'
import image from '/src/assets/react1.png'
import ButtonH from '../button/Button';



function Header ({isActive}) {
 
    return (
        <div className='header'>
            <img className='reactImage'  src= {image} ></img>
            <h1 className='h1Header'>React</h1>
            <h4 className='h4Header'>La biblioteca para interfaces de usuario web y nativas</h4>
            <ButtonH isActive={isActive} />
        </div>

    )
}

export default Header;