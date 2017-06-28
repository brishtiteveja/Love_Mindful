/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      friends: 1098
    }
  }

  showBarCodeData() {
      data_in_barcode = ['family_name', 'first_name', 'issue_date', 'expiration_date', 
                         'date_of_birth', 'sex', 'address_street', 'address_city', 
                         'address_postal_code', 'country', 'eye_color', 'document_discriminator'
                        ];

      codes_for_data = ['DCS', 'DAC', 'DBD', 'DBA',
                        'DBB', 'DBC', 'DAG', 'DAI',
                        'DAK', 'DCG', 'DAY', 'DCF'
                        ];

      console.log("In Profile page.");
      console.log(this.props.userData);
  }

  render() {
    return (
      <View style={{flex:1}}>
      <Nav  type = "profile" onPress = {() => this.props.navigator.replace({id:'home'})} />
      <ScrollView style={styles.container}>
      <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:350, width:width}} />
       <View style={[styles.row, {marginTop:15}]}>
       <Text style = {{fontSize:19, fontWeight:'400'}}>Andy, </Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>29</Text>
       </View>
       <View style={styles.row}>
            <Text style={{color:'#444', fontSize:15}}>
            
                {
                      String(
                          (this.props.userData == null)? 
                                "" 
                                : 
                        "\n" + 
                            this.props.userData['first_name'] +
                        "\n" + 
                            this.props.userData['family_name'] +
                        "\n" + 
                            this.props.userData['date_of_birth'] +
                        "\n" + 
                            this.props.userData['issue_date'] +
                        "\n" + 
                            this.props.userData['address_street'] +
                        "\n" + 
                            this.props.userData['address_city'] +
                        "\n" + 
                            this.props.userData['country'] +
                        "\n"
                          
                      )
                
                }
            </Text>
            {this.showBarCodeData} 
       </View>
       <View style={styles.row}>
       <Text style={{color:'#777', fontSize:11}}>Less than a mile away</Text>
       </View>
       <View style={styles.description}>
       <Text style={{color:'#555'}}>Cool. </Text>
       </View>
       <View style ={styles.commons}>
       <Text style = {styles.title}>
      {this.state.friends} for Common Connections
       </Text>
       <Text style={{marginTop:10, fontSize:14, color:'#666', fontWeight:"400"}}>We compare your Facebook friends with those of your matches to display any common connections</Text>
       </View>
       <View style ={styles.commons}>
       <Text style = {styles.title}>
      Instagram Photos
       </Text>
       <ScrollView
       horizontal = {true}
       >
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       <View style ={{}}>
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
             <Image source ={require('../images/profile.jpg')} resizeMode="stretch" style={{height:100, width:100, margin:5}} />
       </View>
       </ScrollView>
       </View>
        </ScrollView>
        </View>
    )
}
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  title:{
    fontSize:14,
    fontWeight:'600',
    color:'#333'
  },
  commons:{
    padding:15
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
  },
  description:{
    padding:15,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e3e3e3',
    marginTop:10,
    marginBottom:10
  },
  buttonSmall:{
    width:50, 
    height:50, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }
 
});
