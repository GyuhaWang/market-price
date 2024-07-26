import React from 'react';

const Dialog = ({
	isOpen,
	closeModal,
	content,
}: {
	isOpen: boolean;
	closeModal: () => void;
	content: string;
}) => {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<span
					className="close"
					onClick={closeModal}>
					&times;
				</span>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Dialog;
