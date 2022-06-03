import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 8,
        flex: 5,
        maxWidth: "100%"
    },
    product_img: {
        height: Dimensions.get("window").height / 3.5,
        width: Dimensions.get("window").width / 2.5,
        margin: 10,
        borderRadius: 10,
        
    },
    product_container: {
        backgroundColor: "#ECEFF1",
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get("window").width / 2.2,
        flexDirection:"column",
        justifyContent:"space-between",
    },
    product_title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        margin: 8,
    },
    product_price: {
        fontSize: 15,
        margin: 8,
        fontWeight: "bold",
    },
    product_inStock: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold",
        margin: 8,
    },
})