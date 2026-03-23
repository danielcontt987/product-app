import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useThemeColor } from '../hooks/use-theme-color'

interface Props {
    options: string[],
    selectedOptions: string[],
    onSelect: (options: string) => void
}


const ThemedBottonGroup = ({options, selectedOptions, onSelect}:Props) => {

    const primaryColor  = useThemeColor({}, 'primary')

  return (
    <View style={styles.container}>
        {
            options.map(option => (
                    <TouchableOpacity 
                        key={option}
                        style={[
                            styles.boton,
                            selectedOptions.includes(option) && {
                                backgroundColor: primaryColor
                            }
                        ]}
                        onPress={() => onSelect(option)}
                    >
                    <Text
                        adjustsFontSizeToFit
                        numberOfLines={1} 
                        style={[
                            styles.botonText,
                            selectedOptions.includes(option) && styles.selectedBotonText
                        ]}>
                        {option[0].toUpperCase() + option.slice(1)}
                    </Text>
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default ThemedBottonGroup


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    boton: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    botonText: {
        fontSize: 16,
    },

    selectedBotonText:{
        color: '#fff'
    }
})