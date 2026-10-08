import { TokenStorage } from '@/services/secureStore'
import { Redirect } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Index() {
	const [token, setToken] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const checkToken = async () => {
			const responseToken = await TokenStorage.getToken()
			setToken(responseToken)
			console.log(responseToken)
			setIsLoading(false)
		}

		checkToken()
	}, [])

	if (isLoading) {
		return (
			<View
				style={{
					width: '100%',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator />
			</View>
		)
	}

	if (token) {
		return <Redirect href='/(app)/(tabs)' />
	} else {
		return <Redirect href='/(auth)' />
	}
}
