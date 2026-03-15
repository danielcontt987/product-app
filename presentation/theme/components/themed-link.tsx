import { Link, LinkProps } from 'expo-router'
import { Text } from 'react-native'
import { useThemeColor } from '../hooks/use-theme-color'

interface Props extends LinkProps {
    children: string
}

const ThemedLink = ({ children, ...rest }: Props) => {
    const textColor = useThemeColor({}, 'primary');
    return (
        <Link {...rest}>
            <Text style={{
                color: textColor
      }}>{children}</Text>
        </Link>
    )
}

export default ThemedLink
