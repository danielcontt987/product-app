import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { useThemeColor } from "../hooks/use-theme-color";

interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap
    children: string
}

const ThemedBotton = ({ children, icon, ...rest }: Props) => {

    const bgColor = useThemeColor({}, 'primary')

    return (
        <Pressable
            {...rest}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? bgColor + '90' : bgColor,
                },
                styles.button
            ]}
        >

            <Text style={styles.text}>{children}</Text>

            {icon && (
                <Ionicons
                    name={icon}
                    size={20}
                    color="white"
                    style={styles.icon}
                />
            )}

        </Pressable>
    )
}

export default ThemedBotton

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 15,
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        color: "white",
        fontSize: 16
    },

    icon: {
        marginLeft: 8
    }
})
