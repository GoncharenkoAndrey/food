import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");
    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if(!result) {
        return null;
    }

    return (
        <View>
            <Text>{ result.name }</Text>
            <FlatList
                data = { result.photos }
                keyExtractor = {(photo) => photo}
                renderItem = {({item}) => {
                    return <Image source={{ uri: item}} style = {styles.image}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
});

export default withNavigation(ResultsShowScreen);