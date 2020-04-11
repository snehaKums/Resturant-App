import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ShowScreen = ({navigation}) =>{
    const [result,setResult] = useState(null);
   const id = navigation.getParam('id');

   const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
   };
   
   useEffect(() => {
       getResult(id);
   },[]);
   
   if (!result){
       return null;
   }
    return(
        <View>
            <Text style={styles.resName}>Place: {result.name}</Text>
            <Text style={styles.text}>Phone No: {result.phone}</Text>
            <Text style={styles.text}>Address: {result.location.display_address} </Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem = {({item}) =>{
                return <Image style={styles.image} source= {{uri:item}} />
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    resName:{
        fontSize:18,
        fontWeight:'bold',
        margin:5
    },
    text:{
        fontSize:15,
        marginLeft:5
    },
    image:{
        height:150,
        width:200,
        margin:10
    }
});

export default ShowScreen;

