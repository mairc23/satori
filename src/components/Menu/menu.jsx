import './menu.css';

import discorg from '../../assets/icons/discorg.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import snapchat from '../../assets/icons/snapchat.svg'
import twitter from '../../assets/icons/twitter.svg'
import yt from '../../assets/icons/yt.svg'
import { fetchLocalData } from '../../services/apiService'
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; // Si usas react-router para la navegación


function Menu() {
  const [bandsName, setBandsName] = useState([]);
  const [error, setError] = useState(null);

  const music = ["Album", "Single", "EP"];
  const apparel = ["T-Shirts", "Longsleeves", "Outerwear"];
  const accessories = [];
  
  const headerRef = useRef(null);
  const pageHeaderRef = useRef(null);
  
  useEffect(() => {
      const getBandsName = async () => {
          try {
              const bands = await fetchLocalData();
              setBandsName(bands.map(band => band.name));
          } catch (error) {
              setError(error);
          }
          
      };
      getBandsName();
  }, []);
  if (error) return <div>Error: {error.message}</div>;

    useEffect(() => {
        const manejarScroll = () => {
            const scrollYPos = window.scrollY;
            const debeAplicarClases = scrollYPos > 190;

            pageHeaderRef.current.classList.toggle('page-header--stuck', debeAplicarClases);
            headerRef.current.classList.toggle("header-botton", debeAplicarClases);
            setTimeout(() => {
                pageHeaderRef.current.classList.toggle('page-header--opening', debeAplicarClases);
            }, 100);
        };
        window.addEventListener('scroll', manejarScroll);
        return () => window.removeEventListener('scroll', manejarScroll);
    }, []);

    const splitSectionBands = () => {
        const sectionsBands = [];
        if (!bandsName || !Array.isArray(bandsName)) return sectionsBands;
        sectionsBands.push(bandsName.slice(0, 10));
        sectionsBands.push(bandsName.slice(10, 20));
        sectionsBands.push(bandsName.slice(20, 30));
        sectionsBands.push(bandsName.slice(30, 40));
        while (sectionsBands.length < 4) sectionsBands.push([]);
        return sectionsBands;
    };

    const BandName = ({bandName,index}) => {
        return (<a key={index} href="#"><span>{bandName}</span></a>)
    };

    const SectionsBands = ({section,index}) => {
        return (
            <div key={index} className="flex direction-column section">
                {
                section.map((name, indexName) => { 
                    return(<BandName key={indexName} bandName={name} index={indexName}></BandName>) 
                })
                }
            </div>
        )
    };

    return (
        <main>
            <div ref={headerRef} className='header'>
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
                <div  ref={pageHeaderRef} className="page-header">
                    <div className="page-width">
                        <div className="flex center logo">
                            <a href="/" className="logo-button">
                                <div className="cover-logo"><img src="/assets/images/logo.png" alt="logo" className="img-logo" /></div>
                            </a>
                        </div>
                        <nav className="flex center main-navigation">
                            <ul className="flex list">
                                <li className="list-item hover-item">
                                    <div className="folder">
                                        <a href='/Merch' className="list-button"><span>store</span></a>
                                        <div className="folder-child">
                                            <div className="page-width"></div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item hover-item">
                                    <div className="folder">
                                        <a href='/Bands' className="list-button"><span>bands</span></a>
                                        <div className="folder-child">
                                            <div className="page-width">
                                                <div className="flex container-sections">
                                                    {
                                                    splitSectionBands().map((section, indexSection) => {
                                                        return (<SectionsBands key={indexSection} section={section} index={indexSection}></SectionsBands>)
                                                    })
                                                    }
                                                    <div className="flex direction-column section">
                                                        <div className="flex">
                                                            <a href=""><span>View All Bands</span></a>
                                                            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24">
                                                                <path
                                                                    d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item"><a href='/Tours' className="list-button"><span>tours</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>videos</span></a></li>
                                <li className="list-item"><a href='#' className="list-button"><span>news</span></a></li>
                                <li className="list-item"><a href='/About' className="list-button"><span>about</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet/>
        </main>
    )
}

export default Menu;