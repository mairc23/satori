import styles from './itemGallery.module.css'


function ItemGallery({album,bandName,loadedImages}) {
    return (
      <div className={styles.item}>
        <a href="" className={styles.buttonItem}>
          <div className={styles.tag}>
            <div className={styles.band}>{bandName}</div>
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
      </div>
    )
}

export default ItemGallery;