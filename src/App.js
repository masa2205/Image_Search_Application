import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: "22648734-01451cea09d68fd778dab26ea",
        q: term,
      };
      const response = await axios.get("https://pixabay.com/api/", { params });
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert("お探しの画像はありません");
      }
    } catch {
      window.alert("写真の取得に失敗しました");
    }
  };
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
