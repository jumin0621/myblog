import React, { useState } from "react";
import styled from "@emotion/styled";

const Page = styled.section`
	min-height: calc(100vh - 56px - 56px);
	display: flex;
	justify-content: center;

	padding: 80px 20px 90px;
	background: ${({ theme }) => theme.colors.background};
`;

const Card = styled.form`
	width: min(920px, 100%);
	background: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 10px;

	padding: 40px 44px 34px;

	box-shadow:
		0 10px 22px rgba(0, 0, 0, 0.06),
		0 1px 3px rgba(0, 0, 0, 0.06);
`;

const Heading = styled.h1`
	margin: 0 0 28px;
	font-size: 22px;
	font-weight: 800;
	letter-spacing: -0.02em;
	color: ${({ theme }) => theme.colors.primary};
`;

const Field = styled.div`
	margin-bottom: 20px;
`;

const Label = styled.label`
	display: block;
	margin: 0 0 10px;
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
		box-shadow: 0 0 0 4px rgba(166, 115, 255, 0.12);
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	min-height: 320px;
	resize: none;

	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};

	padding: 14px;
	font-size: 14px;
	line-height: 1.6;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.textSecondary};
		opacity: 0.9;
	}

	&:focus {
		border-color: ${({ theme }) => theme.colors.secondary};
		box-shadow: 0 0 0 4px rgba(166, 115, 255, 0.12);
	}
`;

const Actions = styled.div`
	margin-top: 18px;
	display: flex;
	justify-content: flex-end;
`;

const SaveButton = styled.button`
	height: 38px;
	padding: 0 18px;
	border-radius: 8px;
	border: none;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 600;
	cursor: pointer;

	box-shadow: 0 10px 18px rgba(166, 115, 255, 0.22);

	&:hover {
		background: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		transform: translateY(1px);
	}
`;

export default function Write() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		console.log({ title, content });
	};

	return (
		<Page>
			<Card onSubmit={onSubmit}>
				<Heading>새 글 작성</Heading>

				<Field>
					<Label htmlFor="title">제목</Label>
					<Input
						id="title"
						type="text"
						placeholder="제목을 입력하세요"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Field>

				<Field>
					<Label htmlFor="content">내용</Label>
					<Textarea
						id="content"
						placeholder="내용을 자유롭게 작성해보세요..."
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</Field>

				<Actions>
					<SaveButton type="submit">저장하기</SaveButton>
				</Actions>
			</Card>
		</Page>
	);
}
