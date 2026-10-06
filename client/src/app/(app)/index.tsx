import { TokenStorage } from '@/services/secureStore'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
	const handleLogout = async () => {
		await TokenStorage.removeToken()
		router.replace('/(auth)/login')
	}
	return (
		<View style={{ marginTop: 100 }}>
			<Text>index</Text>
			<TouchableOpacity onPress={handleLogout}>
				<Text>fdsfd</Text>
			</TouchableOpacity>
		</View>
	)
}
