import { FlatList, IScrollViewProps } from 'native-base';
import React from 'react';

const ScrollView = ({ children, ...props }: IScrollViewProps) => {
	return (
		<FlatList
			{...props}
			data={[]}
			keyExtractor={(_e, i) => 'dom' + i.toString()}
			ListEmptyComponent={null}
			renderItem={null}
			ListHeaderComponent={() => <>{children}</>}
		/>
	);
};

export default ScrollView;
