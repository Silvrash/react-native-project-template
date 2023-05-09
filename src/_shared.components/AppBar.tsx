import { Ionicons } from '@native-base/icons';
import { Divider, Flex, Heading, Icon, IconButton, Spacer } from 'native-base';
import React, { Children } from 'react';
import { ConditionRenderComponent } from './ConditionRender';

export interface AppBarProps extends React.PropsWithChildren {
	title: React.ReactElement | string | number;
	headerLeft?: JSX.Element;
	headerRight?: JSX.Element;
	hideDivider?: boolean;
	goBack?: () => void;
	safeAreaTop?: boolean;
}

const AppBar: React.FC<AppBarProps> = props => {
	const {
		children,
		title,
		goBack,
		hideDivider = true,
		headerRight,
		headerLeft,
		safeAreaTop,
	} = props;
	return (
		<>
			<Flex
				direction="row"
				px="6"
				py="2"
				h={'12'}
				alignItems="center"
				bgColor="transparent"
				safeAreaTop={safeAreaTop}
			>
				<ConditionRenderComponent renderIf={!!goBack}>
					<IconButton
						icon={<Icon as={Ionicons} name="arrow-back" size="lg" />}
						rounded="full"
						size="sm"
						colorScheme="gray"
						testID="back-button"
						onPress={goBack}
					/>
					<Spacer />
				</ConditionRenderComponent>
				{headerLeft}

				<Heading fontSize="lg">{title}</Heading>
				<Spacer />
				{headerRight ?? <Spacer />}
			</Flex>
			{Children.toArray(children)}
			{!hideDivider && <Divider testID="divider" />}
		</>
	);
};

export default AppBar;
