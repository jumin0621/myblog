import useAlertStore from "../../store/useAlertStore";
import styled from "@emotion/styled";
import { useShallow } from "zustand/react/shallow";
import { createPortal } from "react-dom";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	backdrop-filter: blur(5px);
	animation: fadeIn 0.3s ease;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const AlertBox = styled.div`
	background: ${(props) => props.theme.colors.surface};
	color: ${(props) => props.theme.colors.text};
	padding: 24px;
	border-radius: 12px;
	box-shadow:
		0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	min-width: 300px;
	max-width: 90%;
	text-align: center;
	border: 1px solid ${(props) => props.theme.colors.border};

	transform: scale(1);
	animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	@keyframes scaleIn {
		from {
			transform: scale(0.9);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

const Message = styled.p`
	margin-bottom: 24px;
	color: ${(props) => props.theme.colors.text};
	font-size: 1.1rem;
`;

const Button = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	color: white;
	border: none;
	padding: 10px 24px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	transition: all 0.2s;

	&:hover {
		background-color: ${(props) => props.theme.colors.secondary};
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(1px);
	}
`;

export default function GlobalAlert() {
	const { isOpen, message, closeAlert } = useAlertStore(
		useShallow((state) => ({
			isOpen: state.isOpen,
			message: state.message,
			closeAlert: state.closeAlert,
		})),
	);

	if (!isOpen) return null;

	const modalRoot = document.getElementById("modal-root");
	if (!modalRoot) return null;

	return createPortal(
		<Overlay>
			<AlertBox>
				<Message>{message}</Message>
				<Button onClick={closeAlert}>확인</Button>
			</AlertBox>
		</Overlay>,
		modalRoot,
	);
}
