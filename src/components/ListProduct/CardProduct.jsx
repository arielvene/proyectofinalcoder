import {View , Text , Button,StyleSheet } from "react-native"

const CardProduct = ({item,onModal}) => {
    return <View style={styles.cardProduct}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Button title="DEL" onPress={() => onModal(item)}/>
            </View> 
}
const styles = StyleSheet.create({
    cardProduct: {
      flexDirection: "row",
      padding: 10,
      margin: 10,
      justifyContent: "space-around",
      alignItems: "center",
      borderWidth: 4,
      borderRadius: 15,
      borderColor: "#000000", 
      backgroundColor: "rgba(255, 0, 0, 0.5)", 
      position: "relative", 
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    detail: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "#FF0000", 
      position: "absolute",
      top: -10,
      right: -10,
      borderWidth: 2,
      borderColor: "#000000", 
    },
  });
  
  export default CardProduct;