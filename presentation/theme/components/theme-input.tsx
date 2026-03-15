import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useThemeColor } from "../hooks/use-theme-color";

interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap
    iconShow?: keyof typeof Ionicons.glyphMap
}

const ThemeInput = ({ icon, iconShow, ...rest }: Props) => {

    const primaryColor = useThemeColor({}, 'primary')
    const textColor = useThemeColor({}, 'text')
    

    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputRef = useRef<TextInput>(null)

    return (
        <View style={{
            ...styles.border,
            borderColor: isActive ? primaryColor : '#ccc'
        }}
            onTouchStart={() => inputRef.current?.focus()}
        >
            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    color={textColor}
                    style={{ marginRight: 10 }}
                />
            )}
            <TextInput
                ref={inputRef}
                style={{ ...styles.input, color: textColor, marginRight: 10, flex: 1 }}   // IMPORTANTE
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                placeholderTextColor="#5c5c5c"
                {...rest}
                secureTextEntry={!showPassword}
            />

            {iconShow && (
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={24}
                        color={textColor}
                        style={{ marginLeft: 10 }}
                    />
                </Pressable>
            )}
        </View>
    )
}

export default ThemeInput

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        flex: 1, // empuja el icono a la derecha
        fontSize: 16
    }
})
