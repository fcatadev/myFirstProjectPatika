import React from "react";
import { Image, Text, View, FlatList } from "react-native";
import styles from "./ProductsInfo.style"
import product_data from "../../products_data.json"

const ProductsInfo = () => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2} 
                keyExtractor={item => item.id.toString()}
                data={product_data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.product_container}>
                            <Image style={styles.product_img} source={{ uri: item.imgURL }} resizeMode="contain" />
                            <Text style={styles.product_title}>{item.title}</Text>
                            <Text style={styles.product_price}>{item.price}</Text>
                            <Text style={styles.product_inStock}>
                                {item.inStock == false ? "STOKTA YOK" : "" }
                            </Text>
                        </View>
                    )
                }}
            />
            <Text></Text>
            <Text></Text>
        </View>
    )
}

export default ProductsInfo;