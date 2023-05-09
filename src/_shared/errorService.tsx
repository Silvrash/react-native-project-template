import { Toast } from 'native-base';

export function showError(message: string) {
	Toast.closeAll();
	Toast.show({
		duration: 10000,
		description: message,
	});
	return { error: true };
}

export function showInfo(message: string) {
	Toast.show({
		avoidKeyboard: true,
		duration: 50000,
		description: message,
	});
}
