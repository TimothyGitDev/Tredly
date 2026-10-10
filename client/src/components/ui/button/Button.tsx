import { ReactNode } from 'react'
import {
	ActivityIndicator,
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
	loading?: boolean
}

export default function Button({
	children,
	disabled,
	size = 'medium',
	onPress,
	type = 'default',
	loading,
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
			disabled={disabled || loading}
			{...props}
		>
			{loading ? (
				<ActivityIndicator />
			) : (
				<Text
					style={[
						{ fontSize: 18, fontWeight: '600', lineHeight: 24 },
						type === 'second' && { color: '#fff' },
						disabled && { color: '#9C9C9C' },
					]}
				>
					{children}
				</Text>
			)}
		</TouchableOpacity>
	)
}
