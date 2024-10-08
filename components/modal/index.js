import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard"

export function ModalPassword({password, handLeClose}){

    async function handlecopypassword(){
        await Clipboard.setStringAsync (password)
        alert("Senha copiada com sucesso!")
        
        handLeClose();

    }


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handlecopypassword}>
                        <Text style={styles.text}>
                            {password}
                        </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handLeClose}>
                        <Text style= {styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style= {styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>


            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title:{
        fontSize:20,
        fontWeight: "bold",
        color:"#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
       borderRadius: 8,
    },
    text:{
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: "center",
        margin:14,
        padding: 8,
    },
    buttonSave:{
        backgroundColor: "#FDB913",
        borderRadius: 8,
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: "bold",
    }

})