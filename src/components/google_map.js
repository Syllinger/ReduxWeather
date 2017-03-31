import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    const cityLoc = {lat: this.props.lat, lng: this.props.lon};
    const cityName = this.props.name;

    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: cityLoc,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      draggable: false,
      clickableIcons: false,
      disableDoubleClickZoom: true,
      scrollwheel: false
    });

/*    const infoWindow = new google.maps.infoWindow({
      content: '<center><h1>${cityName}</h1></center>'
    });

    const marker = new google.maps.Marker({
      position: cityLoc,
      map: map,
      title: cityName
    });

    marker.addListener('click', () => infoWindow.open(map,marker));*/
  }
  
  render() {
    return <div ref="map" />
  }
}

export default GoogleMap;