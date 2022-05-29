import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter((result) => result.price === price);
    }; 
    return <View style = {{ flex: 1 }}>
        <SearchBar
            term = { term }
            onTermChange = { setTerm }
            onTermSubmit = { () => searchApi(term) }
        />
        {errorMessage ? <Text>{ errorMessage }</Text> : null}
        <Text>We have found { results.length } results</Text>
        <ScrollView>
            <ResultsList
                title = "Cost effective"
                results = { filterResultsByPrice("$") } />
            <ResultsList
                title = "Bit pricier"
                results = { filterResultsByPrice("$$") }/>
            <ResultsList
                title = "Big spender"
                results = { filterResultsByPrice("$$$") } />
        </ScrollView>
    </View>;
};

const styles = StyleSheet.create({});

export default SearchScreen;