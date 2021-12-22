import React from 'react';
import {Text, View} from 'react-native';

const App = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNova-Regular'}}>
      The Muslim Life Regular
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNova-Bold'}}>
      The Muslim Life Bold
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Regular'}}>
      The Muslim Life Alt Regular
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Bold'}}>
      The Muslim Life Alt Bold
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'ProximaNovaA-Light'}}>
      The Muslim Life Alt Light
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'NotoNastaliqUrdu-Bold'}}>
      مسلم زندگئ
    </Text>
    <Text style={{fontSize: 24, fontFamily: 'NotoNastaliqUrdu-Regular'}}>
      مسلم زندگئ
    </Text>
  </View>
);

export default App;
