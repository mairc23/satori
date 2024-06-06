import Slider from "../components/Slider/Slider";
import Galery from "../components/Galery/Galery";
import { fetchLocalData } from "../services/apiService";
import { useEffect, useState } from "react";

function Home() {

  const [bands,setBands] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect (() => {
    const getBands = async () => {
      const data = await fetchLocalData();
      setBands(data);
    }
    getBands();
  },[])

  useEffect(() => {
    if (bands.length > 0) {
      const albums = getLastaReleases();
      setAlbums(albums);
    }
  }, [bands]);

  const getLastaReleases = () => {
    return bands.flatMap(band => band.albums).filter(album => album.id != 'al-' && album.year >= 2015).sort(() => Math.random() - 0.5).slice(0,10);
  }

  return (
    <>
      <Slider />
      <div className="page-width">
        <Galery title="last releases" bands={bands} albums={albums} type="grid-s"/>
      </div>
    </>
  );
}
export default Home;