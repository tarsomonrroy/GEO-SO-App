import SearchSection from '../Components/Search/SearchSection';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';
import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px", // Ajuste conforme necessário
};

const initialCoordinates = {
  lat: -23.52201, // Latitude inicial (Fatec Zona Leste)
  lng: -46.476864, // Longitude inicial (Fatec Zona Leste)
};

function SearchPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBnQ_NYOQ3-6vsr-P_w7ipBkGfNTJ_cuUY", // Substitua pela sua chave válida
  });

  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [address, setAddress] = useState("");

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const handleSearch = async () => {
    if (!address.trim()) return;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyBnQ_NYOQ3-6vsr-P_w7ipBkGfNTJ_cuUY`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const location = data.results[0].geometry.location;
        setCoordinates({
          lat: location.lat,
          lng: location.lng,
        });
        map.panTo(location);
      } else {
        alert("Endereço não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <main>
        <SearchSection />
        <AltoContraste />
        {/* <DarkMode /> */}
      </main>
    <div>
      <h1>Localização</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Digite um endereço"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: "70%", padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
          Pesquisar
        </button>
      </div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={16} // Zoom ajustado para uma visão mais ampla
          onLoad={onLoad}
        >
          <Marker position={coordinates} />
        </GoogleMap>
      ) : (
        <div>Carregando mapa...</div>
      )}
    </div>
  );
}

export default SearchPage;