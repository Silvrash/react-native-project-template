import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	getLocation,
	getRefereeCode,
	getToken,
	getTotalActiveOrders,
	setLocation,
	setRefereeCode,
	setToken,
	setTotalActiveOrders,
} from '../localStorage';

describe('localStorage', () => {
	it('should setToken', async () => {
		await setToken('someToken');
		expect(AsyncStorage.setItem).toBeCalledWith('authToken', 'someToken');
	});

	it('should getToken', async () => {
		await getToken();
		expect(AsyncStorage.getItem).toBeCalledWith('authToken');
	});

	it('should setLocation', async () => {
		await setLocation([1, 2]);
		expect(AsyncStorage.setItem).toBeCalledWith('location', '1,2');
	});

	it('should getLocation', async () => {
		await getLocation();
		expect(AsyncStorage.getItem).toBeCalledWith('location');
	});

	it('should setRefereeCode', async () => {
		await setRefereeCode('code');
		expect(AsyncStorage.setItem).toBeCalledWith('refereeCode', 'code');
	});

	it('should getRefereeCode', async () => {
		jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce('code');
		const result = await getRefereeCode();
		expect(result).toBe('code');
		expect(AsyncStorage.getItem).toBeCalledWith('refereeCode');

		jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(null);
		const result2 = await getRefereeCode();
		expect(result2).toBe(null);
		expect(AsyncStorage.getItem).toBeCalledWith('refereeCode');
	});

	it('should setTotalActiveOrders', async () => {
		await setTotalActiveOrders(1);
		expect(AsyncStorage.setItem).toBeCalledWith('totalActiveOrders', '1');
	});

	it('should getTotalActiveOrders', async () => {
		jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce('2');
		const result = await getTotalActiveOrders();
		expect(result).toBe(2);
		expect(AsyncStorage.getItem).toBeCalledWith('totalActiveOrders');

		jest.spyOn(AsyncStorage, 'getItem').mockResolvedValueOnce(null);
		const result2 = await getTotalActiveOrders();
		expect(result2).toBe(0);
		expect(AsyncStorage.getItem).toBeCalledWith('totalActiveOrders');
	});
});
