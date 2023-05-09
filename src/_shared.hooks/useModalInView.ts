import { useState } from 'react';
import { Maybe } from 'src/_shared/types';

function useModalInView<ModalInView>() {
	const [modalInView, setModalInView] = useState<Maybe<ModalInView>>(null);

	function onSetModalInView(_modalInView: ModalInView) {
		return () => setModalInView(_modalInView);
	}

	function closeModalInView() {
		setModalInView(null);
	}

	return { modalInView, onSetModalInView, closeModalInView };
}

export default useModalInView;
