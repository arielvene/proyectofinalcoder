import {View , TextInput , Button ,StyleSheet} from "react-native"

const AddProduct = ({valueTitle,valuePrice,onChangeTitle,onChangePrice,addProduct}) => {

    return     <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.input}
                    placeholder="Nombre"
                    value={valueTitle}
                    onChangeText={(t)=> onChangeTitle(t)}
                    />
                    <TextInput 
                    style={styles.input}
                    placeholder="Precio"
                    value={valuePrice}
                    onChangeText={(t)=> onChangePrice(t)}
                    />
                    <Button title="ADD" onPress={addProduct} />
                </View>
}
const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "column",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginBottom: 40,
      backgroundColor: "rgba(255, 0, 0, 0.5)", 
      borderRadius: 15,
      borderWidth: 4,
      borderColor: "#000000", 
    },
    inputBox: {
      width: "80%",
      marginBottom: 15,
    },
    input: {
      borderWidth: 2,
      borderColor: "#000000", 
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 8,
      fontSize: 18,
      color: "#333",
    },
    buttonBox: {
      width: "40%",
    },
    detail: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "#FF0000", 
      position: "absolute",
      top: -10,
      right: -10,
      zIndex: 1,
    },
  });
  
  export default AddProduct;