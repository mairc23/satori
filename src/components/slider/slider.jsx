import styles from "./slider.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchLocalData } from "../../services/apiService";


function Slider() {
    
    const [bandName,setBandsName] = useState([]);
    const [bandCover,setBandsCover] = useState([]);
    const [error,setError] = useState(null);

    const cover_ = useRef([]);
    const name_ = useRef([]);

    useEffect (() => {
      const getBands = async () => {
        try {
            const bands = await fetchLocalData();
            setBandsName(bands.map((band) => band.name).slice(0, 6));
            setBandsCover(bands.map((band) => band.coverLive).slice(0, 6));
        } catch (error) {
            setError(error)
        }
      };
      getBands();
    },[])
    if(error) return ( <span>Error: {error.message}</span> );

    const BandName = ({bandName,index}) => {
      return (<a key={index} href="#"><span>{bandName}</span></a>)
    }

    const clickXD = (index) => {
      name_.current[index].classList.toggle(styles.nActive);
      cover_.current[index].classList.toggle(styles.active);
      cover_.current[index].classList.toggle(styles.filterBrightness);
    }

    const addToRefsName = (el, index) => {
      if (el && !name_.current.includes(el)) name_.current[index] = el;
    };

    const addToRefsCover = (el, index) => {
      if (el && !cover_.current.includes(el)) cover_.current[index] = el;
    };

    return (
      <div className={styles.container}>
        <div className={styles.containerSlider}>
          <div className={styles.slider}>
            {bandCover.map((cover, indexCover) => [
              <div key={indexCover} ref={(el) => addToRefsCover(el, indexCover)} className={`${styles.cover} ${styles.filterBrightness}`}>
                <img className={styles.imagen} src={cover}/>
              </div>,
            ])}
          </div>
          <div className={styles.sliderButtons}>
            {bandName.map((name, indexName) => [
              <div key={indexName} ref={(el) => addToRefsName(el, indexName)} className={styles.name} onClick={() => clickXD(indexName)} ><span>{name}</span></div>
            ])}
          </div>
        </div>
      </div>
    );
    
}

export default Slider;