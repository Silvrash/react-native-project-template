import dayjs from 'dayjs';

export default function formatDateTime(dateTime: string) {
	return dayjs(dateTime).format('DD-MM-YYYY hh:mm a');
}
