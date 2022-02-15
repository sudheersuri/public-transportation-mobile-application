import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation , useRoute} from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo';
export const ScheduleScreen = () => {

  const nav = useNavigation();
  const route = useRoute();
  const params = route.params;
  const DATA = [
    {
      id: 1,
      departuretime: "10:00",
      arrivaltime:"10:30",
      name:"Lorem MRT Station",
      price:"5.0",
      onPressHandler:()=>{
        nav.navigate("payment",{price:"5.0"});
      }
    },
    {
      id: 2,
      departuretime: "10:00",
      arrivaltime:"10:30",
      name:"Dolor MRT Station",
      price:"5.0",
      onPressHandler:()=>{
        nav.navigate("payment",{price:"5.0"});
      }
    }
  ];
  const scheduleItem = ({item}) => {
    return (<View style={{marginBottom:10,borderBottomWidth:2,marginHorizontal:5,borderBottomStartRadius:30,borderBottomEndRadius:10,borderBottomColor:"#EBE7E6"}}>
              <View style={{flexDirection:"row",marginHorizontal:26,marginBottom:10,justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                  <Ionicons name="timer-outline" size={15} color="#000"  />
                  <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.departuretime}</Text>
                  <Ionicons name="swap-horizontal-outline" size={15} color="#000"  />
                  <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.arrivaltime}</Text>
                </View>
                <View>
                  <Text style={{fontWeight:"bold",marginRight:16}}>$ {item.price}</Text>
                </View>
              </View>
              <View style={{flexDirection:"row",marginHorizontal:26,marginBottom:15,justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                  <Ionicons name="location-outline" size={15} color="#000"  />
                  <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.name}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={item.onPressHandler} style={{backgroundColor:params.backgroundColor,paddingHorizontal:8,borderRadius:5}}>
                  <Text style={{color:"#fff",fontWeight:"bold"}}>Select</Text>
                  </TouchableOpacity>
                </View>
              </View> 
           </View>
           );
  };
  return (
          <View style={[styles.container,{backgroundColor:params.backgroundColor}]}>
              <View style={[styles.topview,{backgroundColor:params.backgroundColor,marginBottom:20}]}>
                 <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>{params.title}</Text>
                  <Image
                      source={params.imagesrc}>
                  </Image>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:30,padding:10,borderRadius:10,flexDirection:"row",justifyContent:"space-between"}}>
                <FromTo backgroundColor={params.backgroundColor} />
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20}}>Choose Schedule</Text>
                <View>
                    <FlatList
                    data={DATA}
                    renderItem={scheduleItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
                </View>
          </View>);
}

const styles = StyleSheet.create({
  topview:{
    marginTop:60,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  bottomview:{
    flex:2,
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    marginTop:20,
    borderTopRightRadius:50,
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
  },
});