import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style = {styles.backgroundStyle}>
        <Feather name = "search" style = {styles.iconStyle} />
        <TextInput
            placeholder = "Search"
            autoCapitalize="none"
            autoCorrect = {false}
            style = {styles.inputStyle}
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
        />
    </View>;
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#F0EEEE",
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 15,
        alignSelf: "center"
    }
});

export default SearchBar;