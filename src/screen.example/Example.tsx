import { Button, Center, Flex, Text } from 'native-base';
import AppBar from 'src/_shared.components/AppBar';
import { decrement, increment, selectCount } from 'src/_shared.redux/reducers/countSlice';
import { useAppDispatch, useAppSelector } from 'src/_shared.redux/types';

const Example = () => {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();

	return (
		<Flex flex="1" bgColor={'#FAFAFA'} safeAreaTop>
			<AppBar title="Example" />
			<Center flex="1">
				<Text>{count}</Text>
				<Button.Group mt="2">
					<Button size="xs" onPress={() => dispatch(increment())}>
						+
					</Button>
					<Button size="xs" onPress={() => dispatch(decrement())}>
						-
					</Button>
				</Button.Group>
			</Center>
		</Flex>
	);
};

export default Example;
