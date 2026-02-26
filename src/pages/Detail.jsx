import React from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import { cards } from "../data/card";
import styled from "@emotion/styled";

const Page = styled.section`
	min-height: calc(100vh - 56px - 56px);
	display: flex;
	justify-content: center;
	padding: 90px 20px 90px;
	background: ${({ theme }) => theme.colors.background};
`;

const Card = styled.article`
	width: min(820px, 100%);
	background: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 12px;
	padding: 36px 40px 34px;

	box-shadow:
		0 12px 26px rgba(0, 0, 0, 0.06),
		0 1px 3px rgba(0, 0, 0, 0.06);
`;

const Top = styled.div`
	padding-bottom: 10px;
`;

const Title = styled.h1`
	margin: 0 0 8px;
	font-size: 22px;
	font-weight: 800;
	color: ${({ theme }) => theme.colors.primary};
	letter-spacing: -0.02em;
`;

const SubTitle = styled.p`
	margin: 0;
	font-size: 13px;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

const Divider = styled.hr`
	border: none;
	height: 1px;
	background: ${({ theme }) => theme.colors.border};
	margin: 18px 0 22px;
`;

const Section = styled.section`
	margin-bottom: 40px;
	margin-top: 40px;
`;

const SectionTitle = styled.h2`
	margin: 0 0 10px;
	font-size: 14px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.text};
	display: flex;
	align-items: center;
	gap: 8px;

	&::before {
		content: "";
		width: 3px;
		height: 14px;
		border-radius: 999px;
		background: ${({ theme }) => theme.colors.primary};
		display: inline-block;
	}
`;

const Paragraph = styled.p`
	margin: 0;
	font-size: 13px;
	line-height: 1.7;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

const CodeBlock = styled.pre`
	margin: 0;
	padding: 16px 18px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.background};
	overflow: auto;

	code {
		font-family:
			ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
			"Courier New", monospace;
		font-size: 13px;
		line-height: 1.6;
		color: ${({ theme }) => theme.colors.text};
		white-space: pre;
	}
`;

const Actions = styled.div`
	margin-top: 24px;
	display: flex;
	gap: 12px;
`;

const PrimaryLink = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	height: 40px;
	padding: 0 16px;
	border-radius: 10px;
	text-decoration: none;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.background};
	font-weight: 700;
	font-size: 13px;

	border: 1px solid ${({ theme }) => theme.colors.border};
	box-shadow: 0 10px 18px rgba(166, 115, 255, 0.18);

	&:hover {
		background: ${({ theme }) => theme.colors.secondary};
	}
`;

const GhostButton = styled.button`
	height: 40px;
	padding: 0 16px;
	border-radius: 10px;

	background: transparent;
	border: 1px solid ${({ theme }) => theme.colors.border};
	color: ${({ theme }) => theme.colors.text};
	font-weight: 700;
	font-size: 13px;

	cursor: pointer;

	&:hover {
		border-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export default function Detail() {
	const navigate = useNavigate();

	const { key } = useParams();

	const content = cards.find((data) => data.key === key);

	return (
		<>
			<Page>
				<Card>
					<Top>
						<Title>{content.title}</Title>
						<SubTitle>{content.desc}</SubTitle>
					</Top>

					<Divider />

					<Section>
						<SectionTitle>상세 설명</SectionTitle>
						<Paragraph>{content.details}</Paragraph>
					</Section>

					<Section>
						<SectionTitle>사용 예시</SectionTitle>
						<CodeBlock>
							<code>{content.syntax}</code>
						</CodeBlock>
					</Section>

					<Actions>
						<PrimaryLink
							href={content.link}
							target="_blank"
							rel="noreferrer noopener"
						>
							📄 공식 문서 확인하기
						</PrimaryLink>

						<GhostButton type="button" onClick={() => navigate(-1)}>
							목록으로 돌아가기
						</GhostButton>
					</Actions>
				</Card>
			</Page>
		</>
	);
}
