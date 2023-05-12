import { defaultTo } from 'ramda';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Store } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import ConditionRender, { ConditionRenderComponent } from './_shared.components/ConditionRender';
import store, { persistor } from './_shared.redux/store';
import { ReduxState } from './_shared.redux/types';

interface ReduxWrapperProps extends React.PropsWithChildren {
	disablePersistence?: boolean;
	initialStore?: Store<ReduxState>;
}

const PersistedWrapper = ConditionRender(PersistGate);

const ReduxWrapper = ({ disablePersistence, initialStore, children }: ReduxWrapperProps) => {
	return (
		<ReduxProvider store={defaultTo(store, initialStore)}>
			<PersistedWrapper
				renderIf={!disablePersistence}
				loading={null}
				persistor={persistor}
				children={children}
			/>
			<ConditionRenderComponent renderIf={!!disablePersistence} children={children} />
		</ReduxProvider>
	);
};

export default ReduxWrapper;
