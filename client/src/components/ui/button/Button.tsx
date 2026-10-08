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

export default function Button({
	children,
	disabled,
	size = 'medium',
	onPress,
	type = 'default',
	...props
}: ButtonProps) {
	return (
		<TouchableOpacity
			style={[
				styles[size],
				disabled && { backgroundColor: '#161517' },
				type === 'second' && { backgroundColor: '#2A2A2A' },
			]}
			onPress={onPress}
			disabled={disabled}
			{...props}
		>
			<Text
				style={[
					{ fontSize: 18, fontWeight: '600', lineHeight: 24 },
					type === 'second' && { color: '#fff' },
					disabled && { color: '#9C9C9C' },
				]}
			>
				{children}
			</Text>
		</TouchableOpacity>
	)
}
