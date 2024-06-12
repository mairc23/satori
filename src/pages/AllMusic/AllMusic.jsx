import { useEffect, useState } from "react";
import Galery from "../../components/Galery/Galery";
import styles from './AllMusic.module.css'
import { fetchLocalData } from "../../services/apiService";

function AllMusic() {

  const [bands, setBands] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getBands = async () => {
      const data = await fetchLocalData();
      setBands(data);
    };
    getBands();
  },[]);

  useEffect(() => {
    if (bands.length > 0) {
      const albums = getAllReleases();
      setAlbums(albums);
    }
  }, [bands]);

  const getAllReleases = () => {
    return bands.flatMap(band => band.albums).filter(album => album.id != 'al-').sort((album1,album2) => album2.year - album1.year);
  }

  const getNameBands = () => {
    return bands.filter(band => band.albums.length > 0).map(band => band.name)
  }

  return (
    <>
      <div className="page-width">
        <div className={`flex ${styles.containerReleases}`}>
          <div className={styles.containerFilter}>
            <div className={`${styles.filter} S{filterBand}`}>
              <div className={styles.selection}><span>BANDS</span></div>
              <div className={styles.buttonSelection}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </div>
              <div className={styles.folder}>
                <ul className={styles.list}>
                  {getNameBands().map((name,index) => [
                    <li key={index} className={styles.listItem}>
                      <div className={styles.chaingType}><span>{name}</span></div>
                    </li>
                  ])}
                </ul>
              </div>
            </div>
            <div className={`${styles.filter} S{filterYear}`}>
              <div className={styles.selection}><span>YEAR</span></div>
              <div className={styles.buttonSelection}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </div>
            </div>
            <div className={`${styles.filter} S{filterType}`}>
              <div className={styles.selection}><span>TYPE</span></div>
              <div className={styles.buttonSelection}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.containerAlbums}>
            <Galery title="music" bands={bands} albums={albums} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllMusic;