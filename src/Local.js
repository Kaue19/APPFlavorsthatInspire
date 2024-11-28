import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as Location from 'expo-location';
import * as Geocoding from 'expo-location';
import { useState, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Local() {
  const [localizacao, setLocalizacao] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const mapRef = useRef();

  async function PegarLocalizacao() {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const posicao = await Location.getCurrentPositionAsync({});
      setLocalizacao(posicao);
    }
  }

  async function PesquisarLocal() {
    if (searchQuery.trim() === '') return;

    try {
      const resultado = await Geocoding.geocodeAsync(searchQuery);
      if (resultado.length > 0) {
        const { latitude, longitude } = resultado[0];
        setSearchResult({ latitude, longitude });


        mapRef.current?.animateCamera({
          center: { latitude, longitude },
          zoom: 15,
        });
      } else {
        alert('Local não encontrado!');
      }
    } catch (error) {
      console.error('Erro ao pesquisar local:', error);
      alert('Erro ao realizar a pesquisa.');
    }
  }

  useEffect(() => {
    PegarLocalizacao();

    Location.watchPositionAsync(
      {
        accuracy: Location.LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocalizacao(response);
        mapRef.current?.animateCamera({
          center: response.coords,
        });
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Pesquisar..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={PesquisarLocal}
        />
        <MaterialCommunityIcons
          name="map-search"
          color={'black'}
          size={20}
          style={styles.searchIcon}
          onPress={PesquisarLocal}
        />
      </View>

      {localizacao && (
        <MapView
          style={styles.map}
          ref={mapRef}
          initialRegion={{
            latitude: localizacao?.coords.latitude,
            longitude: localizacao?.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: localizacao?.coords.latitude,
              longitude: localizacao?.coords.longitude,
            }}
            title="Minha Localização"
          />

          {searchResult && (
            <Marker
              coordinate={{
                latitude: searchResult.latitude,
                longitude: searchResult.longitude,
              }}
              title="Local Pesquisado"
              pinColor="blue"
            />
          )}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
  },
  map: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: -25,
  },
});
