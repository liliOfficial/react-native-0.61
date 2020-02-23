import React  from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { toastPopup } from './src/actions';

import Navigation from './src/components/navigation';
import { Toast } from './src/components/common/toast';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

function App(props) {
  const { toastMessage } = props;

  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <Toast background='#e62429' message={toastMessage} autoClose={3000} />
    </View>
  );
}

const mapStateToProps = state => {
  const { toastMessage } = state.toast;
  return { toastMessage };
}

export default connect(mapStateToProps, { toastPopup })(App);
