import React from 'react';
import {View,TextInput,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Icon name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles =StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#DCDCDC',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

export default SearchBar;