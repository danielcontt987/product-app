import { Ionicons } from "@expo/vector-icons";
import { Modal, ModalProps, StyleSheet, View } from 'react-native';

interface Props extends ModalProps {
    visible: boolean,
    icon?: keyof typeof Ionicons.glyphMap,
    color?: string
}

const ModalToast = ({icon, visible, children, color }: Props) => {

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <View style={{ alignItems: "center", marginBottom: 10 }}>
                        <Ionicons
                            name={icon}
                            size={60}
                            color={color}
                        />
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default ModalToast


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 10,
        width: "85%",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    text: {
        marginBottom: 16,
        fontFamily: "KanitRegular",
    },
    button: {
        backgroundColor: "#3b82f6",
        padding: 12,
        borderRadius: 12,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});