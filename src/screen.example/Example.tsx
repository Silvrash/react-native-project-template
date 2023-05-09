import { Flex } from 'native-base';
import AppBar from 'src/_shared.components/AppBar';

const Example = () => {
	return (
		<Flex flex="1" bgColor={'#FAFAFA'} safeAreaTop>
			<AppBar title="Example" />
		</Flex>
	);
};

export default Example;
