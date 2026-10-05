import { ReactNode } from 'react'
import { TextProps as RNTextProps, Text as TextComponent } from 'react-native'
import { styles } from './styles.text'

type TextProps = {
	children: ReactNode
	type: 'p' | 'subtitle' | 'title'
	style?: RNTextProps['style']
	typeText?: 'light' | 'dark'
}

export default function Text({ children, type, style, typeText }: TextProps) {
	return (
		<TextComponent
			style={[styles[type], style, typeText === 'light' && { color: '#fff' }]}
		>
			{children}
		</TextComponent>
	)
}
