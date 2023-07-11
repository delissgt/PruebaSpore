import React from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './MarkerStyle.js';

const Marker = (props) => {
  // static propTypes = {
  //   text: PropTypes.string
  // };

  // static defaultProps = {};
  //
  // shouldComponentUpdate = shouldPureComponentUpdate;


    return (
        <div style={greatPlaceStyle}>
          {props.text}
        </div>
    );

}

export default Marker;



// import React, {Component} from 'react';
//
// import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';
//
// // import {greatPlaceStyle} from './my_great_place_styles.js';
// import {greatPlaceStyle} from './MarkerStyle';
//
// export default class Marker extends Component {
//     static propTypes = {
//         text: PropTypes.string
//     };
//
//     static defaultProps = {};
//
//     shouldComponentUpdate = shouldPureComponentUpdate;
//
//     render() {
//         return (
//             <div style={greatPlaceStyle}>
//                 {this.props.text}
//             </div>
//         );
//     }
// }