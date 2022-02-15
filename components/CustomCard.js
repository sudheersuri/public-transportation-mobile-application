import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';

export const CustomCard = (props) => {
  return (
          <View style={[props.elevated && styles.container,props.style]}>
             {props.children}
          </View>);
}

const styles = StyleSheet.create({
  container:{
    shadowColor: '#BEBEBE',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 5,
  }
});