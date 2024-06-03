import { useEffect, useState } from 'react'
import styles from "./galery.module.css";
import { fetchLocalData } from '../../services/apiService';

function Galery({title}) {

    const [albums,setAlbums] = useState([]);
    const [error,setError] = useState(null);
    const [bands, setBands] = useState([]);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect (() => {
        const getAlbums = async () => {
            try {
                const data = await fetchLocalData();
                setBands(data);
                setAlbums(data.flatMap(band => band.albums).filter(album => album.id != 'al-' && album.year >= 2015))
            } catch (error) {
                setError(error)
            }
        };
        getAlbums();
    },[])

    useEffect(() => {
      const checkImages = () => {
        albums.forEach((album) => {
          checkImage(album.cover, (isLoaded) => {
            setLoadedImages((prev) => ({
              ...prev,
              [album.id]: isLoaded,
            }));
          });
        });
      };
      if (albums.length > 0) checkImages();
    }, [albums]);

    const checkImage = (url, callback) => {
      const img = new Image();
      img.onload = () => callback(true);
      img.onerror = () => callback(false);
      img.src = url;
    };

    const getNameBandByAlbumId = (album) => {
      return bands.find((band) => band.albums.includes(album)).name;
    }

    return (
      <div className={styles.releases}>
        <div className="page-width">
          <div className="container-releases">
            <div className={styles.title}><span>{title}</span></div>
            <div className="grid-overflow">
              <div className="grid colums-6">
                {albums.map(album => [
                  <div key={album.id} className={styles.item}>
                    <a href="" className={styles.buttonItem}>
                      <div className={styles.tag}>
                        <div className={styles.band}>{getNameBandByAlbumId(album)}</div>
                        <div className={styles.name}><span>{album.name}</span></div>
                        <div className={styles.price}><span>$ {album.price}</span></div>
                      </div>
                      <div className={styles.cover}>
                        {loadedImages[album.id] ? (
                          <img src={album.cover} className={styles.coverImg} />
                        ) : (
                          <>
                          <img src="/assets/images/cd.png" className={styles.coverImg} />
                          <img src="/assets/images/tape.png" className={styles.tape} />
                          <div className={styles.text}>EMPTY</div>
                          </>
                        )}
                      </div>
                    </a>
                  </div>,
                ])}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Galery;