import  MapView, {PROVIDER_GOOGLE}  from 'react-native-maps';
import { Dimensions, StyleSheet,View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API } from './environment';
import { SafeAreaView } from 'react-native';

const{width,height} = Dimensions.get("window");
const ASPECT_RATIO=width/height;
const LATITUDE_DELTA=0.02;
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude:12.9200,
  longitude:77.6100,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}


export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION}/>
      <SafeAreaView style={styles.searchContainer}>
      <GooglePlacesAutocomplete styles={{textInput:styles.input}}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAP_API,
        language: 'en',
      }}  
    />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer:{
    position:"absolute",
    width: "90%",
    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    shadowRadius:5,
    elevation:5,
    padding:10,
    borderRadius:10
  },
  input:{

marginTop:"20%",
  }
});
