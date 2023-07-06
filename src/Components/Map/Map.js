import React from "react";
import GoogleMap from 'google-map-react';



const Maps = () => {
  return(
      <>
        <div style={{ height: '350px', width: '100%' }}>
          <GoogleMap
              // apiKey={{ key: "AIzaSyCugq8pQeC6PZ7u524fAN1rBxbI9RIcJ30"}}
              center={[19.043225, -98.213675] }
              zoom={15}
          >
          </GoogleMap>
        </div>
      </>
  )
}

export default Maps;