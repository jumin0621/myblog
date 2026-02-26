import React, { useState } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useAlertStore from "../store/useAlertStore";
import useAuthStore from "../store/useAuthStore";

const Page = styled.section`
	min-height: calc(100vh - 56px - 56px);
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 110px 20px 80px;

	/* 라이트에선 밝고, 다크에선 어둡게 자연스럽게 */
	background: ${({ theme }) => theme.colors.background};
`;

const Card = styled.form`
	width: 380px;
	background: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 10px;

	padding: 48px 44px 38px;

	box-shadow:
		0 10px 22px rgba(0, 0, 0, 0.06),
		0 1px 3px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
	margin: 0 0 34px;
	text-align: center;
	font-size: 28px;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.primary};
`;

const Field = styled.div`
	margin-bottom: 18px;
`;

const Label = styled.label`
	display: block;
	margin: 0 0 8px;
	font-size: 12px;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
	width: 100%;
	height: 44px;
	border-radius: 8px;

	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};

	padding: 0 14px;
	font-size: 14px;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.textSecondary};
		opacity: 0.9;
	}

	&:focus {
		border-color: ${({ theme }) => theme.colors.secondary};
		box-shadow: 0 0 0 4px rgba(166, 115, 255, 0.15);
	}
`;

const Submit = styled.button`
	width: 100%;
	height: 46px;
	margin-top: 12px;

	border: none;
	border-radius: 8px;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 600;
	cursor: pointer;

	box-shadow: 0 10px 18px rgba(166, 115, 255, 0.25);

	&:hover {
		background: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		transform: translateY(1px);
	}
`;

export default function Login() {
	const email = useInput("");
	const password = useInput("");
	const navigate = useNavigate();
	const login = useAuthStore((state) => state.login);
	const showAlert = useAlertStore((state) => state.showAlert);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email.value || !password.value) {
			showAlert(`이메일과 비밀번호를 입력해주세요`);
			return;
		}

		const isSucces = login(email.value, password.value);

		if (isSucces) {
			showAlert(`환영합니다. ${email.value}님`);
			navigate("/");
		} else {
			showAlert(`이메일 또는 비밀번호가 일치하지 않습니다.`);
			email.reset();
			password.reset();
		}
	};

	return (
		<Page>
			<Card onSubmit={handleSubmit}>
				<Title>로그인</Title>

				<Field>
					<Label htmlFor="email">이메일</Label>
					<Input
						id="email"
						type="email"
						placeholder="example@email.com"
						{...email}
						autoComplete="email"
					/>
				</Field>

				<Field>
					<Label htmlFor="password">비밀번호</Label>
					<Input
						id="password"
						type="password"
						placeholder="********"
						{...password}
						autoComplete="current-password"
					/>
				</Field>

				<Submit type="submit">로그인</Submit>
			</Card>
		</Page>
	);
}
