// import React, {Component} from 'react'
// import {
//   AppRegistry,
//   StyleSheet,
//   TextInput,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableHighlight,
//   ListView
// } from 'react-native';


// class RefreshableList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refreshing: false,
//     };

//     this._onRefresh = this._onRefresh.bind(this)
//   }

//   _onRefresh() {
//     this.setState({refreshing: true});
//     fetchData().then(() => {
//       this.setState({refreshing: false});
//     });
//   }

//       // </ListView>
//   render() {
//     return (
//       <ListView
//         refreshControl={
//           <RefreshControl
//             refreshing={this.state.refreshing}
//             onRefresh={this._onRefresh.bind(this)}
//           />
//         }
      
//       />
   
//     );
//   }

// }



// export default RefreshableList