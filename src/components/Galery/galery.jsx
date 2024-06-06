import { useEffect, useState } from 'react'
import styles from "./galery.module.css";
import ItemGallery from '../ItemGallery/ItemGalery';

function Galery({title,bands,albums,type}) {

    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
      if (albums.length > 0) checkImages();
    }, [albums]);

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

    const checkImage = (url, callback) => {
      const img = new Image();
      img.onload = () => callback(true);
      img.onerror = () => callback(false);
      img.src = url;
    };

    const getNameBandByAlbumId = (album_) => {
      const band = bands.find(band => band.albums.some(album => album.id === album_.id));
      return band ? band.name : "Unknown Band";
    }

    return (
      <div className={styles.releases}>
        <div className="container-releases">
          <div className={styles.title}><span>{title}</span></div>
          <div className={type === "grid-s" ? "grid-overflow" : ""}>
            <div className={`grid ${type === "grid-s" ? "colums-6 " : "colums-4"}`}>
              {albums.map(album => [
                <ItemGallery key={album.id} album={album} bandName={getNameBandByAlbumId(album)} loadedImages={loadedImages}/>
              ])}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Galery;