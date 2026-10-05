import { ReactNode } from 'react'
import {
	TextProps as RNTextProps,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles.button'

type ButtonProps = TouchableOpacityProps & {
	children: ReactNode
	size: 'small' | 'medium' | 'large'
	onPress: () => void
	disabled?: boolean
	style?: RNTextProps['style']
	type?: 'default' | 'second'
}

export default function Button({ children, size, onPress, type }: ButtonProps) {
	return (
		<TouchableOpacity
			style={[
				styles[size],
				type === 'second' && { backgroundColor: '#2A2A2A' },
			]}
			onPress={onPress}
		>
			<Text
				style={[
					{ fontSize: 20, fontWeight: '600', lineHeight: 24 },
					type === 'second' && { color: '#fff' },
				]}
			>
				{children}
			</Text>
		</TouchableOpacity>
	)
}
