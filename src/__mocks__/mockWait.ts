export async function mockWait(timeout: number) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, timeout);
	});
}
