import Geocode from "react-geocode";

const useGeocode = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  if (apiKey) Geocode.setApiKey(apiKey);

  Geocode.setLanguage("pl");

  Geocode.setRegion("pl");

  Geocode.setLocationType("ROOFTOP");

  return Geocode;
};

export default useGeocode;
