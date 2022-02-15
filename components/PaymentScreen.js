import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import {FromTo} from './FromTo';
import SvgQRCode from 'react-native-qrcode-svg';

export const PaymentScreen = () => {
  
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>Ticket</Text>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
                  <FromTo />
                  <View style={{flexDirection:"row",marginTop:10}}>
                    <View>
                      <View style={{flexDirection:"row",marginTop:15,alignItems:"center"}}>
                        <Ionicons name="timer-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>10:00</Text>
                        <Ionicons style={{marginLeft:5}} style={{opacity:0.2,marginLeft:10}} name="train" size={15} color="#000"  />
                        <Text style={{marginLeft:5,fontWeight:"bold"}}>10:30</Text>
                      </View>
                      <View style={{flexDirection:"row",marginTop:15}}>
                        <Ionicons name="location-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>Lorem MRT Station</Text>
                      </View>
                      <View style={{flexDirection:"row",marginTop:15}}>
                        <Ionicons name="timer-outline" size={15} color="#000"  />
                        <Text style={{marginLeft:10,fontWeight:"bold"}}>$ 5.0</Text>
                      </View>
                    </View>
                    <View style={{ width:50,height:50,marginLeft:10,marginTop:10}}>
                    <SvgQRCode value="http://example.com" />
                    </View>
                  </View>
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:16,fontWeight:"bold",fontSize:20}}>Payment</Text>
                <Text style={{marginHorizontal:26,fontWeight:"bold",fontSize:15,marginVertical:10}}>Enter Amount</Text>
                <TextInput value="$     5.0" style={{backgroundColor:"#EBE7E6",padding:8,marginHorizontal:23,marginVertical:5,borderRadius:8,fontWeight:"bold"}}/>
                <View>
                </View>
                <View>
                  <View style={{flexDirection:"row", marginTop:20,paddingBottom:10,borderBottomWidth:2,justifyContent:"space-between",alignItems:"center",marginHorizontal:23,borderBottomColor:"#EBE7E6"}}>
                    <TouchableOpacity style={{width:125,backgroundColor:"#6BC5E8",borderRadius:8}}>
                      <Text style={{color:"#fff",paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Credit Card</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold"}}>Balance : $84</Text>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",marginHorizontal:26}}>
                    <TouchableOpacity style={{width:125,marginTop:10, backgroundColor:"#EBE7E6",borderRadius:8}}>
                      <Text style={{paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>E-wallet</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold"}}>Balance : $84</Text>
                  </View>
                </View>
                <TouchableOpacity style={{padding:7,margin:26,borderRadius:12,backgroundColor:PRIMARYCOLOR}}>
                  <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold",color:"#fff"}}>Buy Ticket</Text>
                </TouchableOpacity>
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
  welcomemessage:{
    color:"#fff",
    fontSize:35,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:40,
    borderRadius:10,
    marginBottom:65
  },
  circle:{
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:"#fff"
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bottomview:{
    flex:2,
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
  },
});