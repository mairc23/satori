import './menu.css';
import logo from '../../assets/images/logo.png'
import discorg from '../../assets/icons/discorg.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import snapchat from '../../assets/icons/snapchat.svg'
import twitter from '../../assets/icons/twitter.svg'
import yt from '../../assets/icons/yt.svg'

function Menu() {
    return (
        <menu>
            <div className='header'>
                <div className="toolbar">
                    <div className="page-width">
                        <ul className="flex toolbar-list">
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={discorg} alt="" className="svg" /></a>
                            </li>
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={facebook} alt="" className="svg" /></a>
                            </li>
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={instagram} alt="" className="svg" /></a>
                            </li>
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={snapchat} alt="" className="svg" /></a>
                            </li>
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={twitter} alt="" className="svg" /></a>
                            </li>
                            <li className="toolbar-item">
                                <a href="#" className="link"><img src={yt} alt="" className="svg" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-header">
                    <div className="page-width">
                        <div className="flex center logo">
                            <a href="" className="logo-button">
                                <div className="cover-logo"><img src={logo} alt="logo" className="img-logo" /></div>
                            </a>
                        </div>
                        <nav className="flex center main-navigation">
                            <ul className="flex list">
                                <li className="list-item"><a href='#' className="list-button"><span>store</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>bands</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>tours</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>videos</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>news</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>about</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </menu>
    );
}

export default Menu;