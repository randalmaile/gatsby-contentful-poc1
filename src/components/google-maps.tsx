import React from 'react'
import styles from './google-maps.module.scss';
import GoogleMapReact from 'google-map-react';

const { GOOGLE_MAPS_API_KEY } = process.env

const defaultProps = {
	center: {
	  lat: 38.5820405,
	  lng: -122.4621946,
	},
	zoom: 14,
  }

  const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>

  const GoogleMap = () => (
	<div style={{ height: '500px', width: '100%', marginBottom: '60px' }}>
	  <GoogleMapReact
		bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
		defaultCenter={defaultProps.center}
		defaultZoom={defaultProps.zoom}
	  >
		<AnyReactComponent
		  lat={59.955413}
		  lng={30.337844}
		  text={'Kreyser Avrora'}
		/>
	  </GoogleMapReact>
	</div>
  )
  
  export default GoogleMap