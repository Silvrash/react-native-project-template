import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setToken(token: string) {
	return AsyncStorage.setItem('authToken', token);
}

export async function getToken() {
	return AsyncStorage.getItem('authToken');
}

export async function setLocation(location: [number, number]) {
	return AsyncStorage.setItem('location', location.join(','));
}

export async function getLocation() {
	return AsyncStorage.getItem('location');
}

export async function setRefereeCode(refereeCode: string) {
	return AsyncStorage.setItem('refereeCode', refereeCode);
}

export async function getRefereeCode() {
	return AsyncStorage.getItem('refereeCode') ?? null;
}

export async function setTotalActiveOrders(total: number) {
	return AsyncStorage.setItem('totalActiveOrders', `${total}`);
}

export async function getTotalActiveOrders() {
	const total = await AsyncStorage.getItem('totalActiveOrders');
	return total ? parseInt(total) : 0;
}
