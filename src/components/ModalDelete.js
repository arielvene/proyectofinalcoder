import {Modal,View,Text,Button , StyleSheet} from "react-native"

const ModalDelete = ({product,visible,onModal,onDelete}) =>{

    return  <Modal
                visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿esta seguro que quiere borrar?</Text>
                        <Text style={styles.modalText}>{product.title}</Text>
                        <Button title="Confirmo" onPress={onDelete} />
                        <Button title="Cerrar" onPress={()=> onModal(false)}/>
                    </View>        
                </View>
            </Modal>
}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    modalContent: {
      width: "80%",
      borderWidth: 2,
      padding: 10,
      gap: 10,
      borderRadius: 15,
      borderColor: "#000000", 
      backgroundColor: "rgba(255, 0, 0, 0.5)", 
      position: "relative", 
    },
    modalText: {
      textAlign: "center",
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
  
  export default ModalDelete;