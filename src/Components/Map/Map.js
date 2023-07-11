import React from "react";
import GoogleMap from 'google-map-react';
// import shouldPureComponentUpdate from 'react-pure-render/function'

import Marker from "./Marker/Marker";



const Maps = () => {
  // let shouldComponentUpdate;
  // shouldComponentUpdate = shouldPureComponentUpdate;
  return(
      <>
        <div style={{ height: '350px', width: '100%' }}>
          <GoogleMap
              // apiKey={{ key: "AIzaSyCugq8pQeC6PZ7u524fAN1rBxbI9RIcJ30"}}
              center={[19.043225, -98.213675] }
              // center={[59.938043, 30.337157] }
              // zoom={15}
              zoom={9}
          >
            <Marker lat={19.1139963} lng={-98.1661818} text={'A'} style={{ zIndex: 1 }}/>

          </GoogleMap>
        </div>
      </>
  )
}

export default Maps;

/*
 * Base Google Map example
 */
// // import React, {PropTypes, Component} from 'react/addons';
// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
// import shouldPureComponentUpdate from 'react-pure-render/function';
//
// import GoogleMap from 'google-map-react';
// // import MyGreatPlace from './my_great_place.jsx';
// import Marker from "./Marker/Marker";
//
// export default class Maps extends Component {
//   static propTypes = {
//     center: PropTypes.array,
//     zoom: PropTypes.number,
//     greatPlaceCoords: PropTypes.any
//   };
//
//   static defaultProps = {
//     center: [59.938043, 30.337157],
//     zoom: 9,
//     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
//   };
//
//   shouldComponentUpdate = shouldPureComponentUpdate;
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//         <GoogleMap
//             // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
//             center={this.props.center}
//             zoom={this.props.zoom}>
//           <Marker lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
//           {/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />*/}
//           {/*<MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />*/}
//           <Marker {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
//         </GoogleMap>
//     );
//   }
// }