import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { cards } from "../data/card";

const Page = styled.div`
	background: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	min-height: calc(100vh - 56px);
	padding: 40px 0 60px;
`;

const Container = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`;

const HeroCard = styled.section`
	min-height: 260px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.surface};
	border-radius: 18px;
	padding: 48px 24px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: center;
`;

const HeroTitle = styled.h1`
	margin: 0 0 12px;
	font-size: 40px;
	line-height: 1.15;
	color: ${({ theme }) => theme.colors.primary};
`;

const HeroDesc = styled.p`
	margin: 0 0 22px;
	max-width: 640px;
	color: ${({ theme }) => theme.colors.textSecondary};
	line-height: 1.6;
`;

const HeroButton = styled.button`
	height: 44px;
	padding: 0 18px;
	border-radius: 999px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.background};
	cursor: pointer;

	&:hover {
		background: ${({ theme }) => theme.colors.secondary};
	}
`;

const SectionTitle = styled.h2`
	margin: 44px 0 18px;
	text-align: center;
	font-size: 22px;
`;

const Grid = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 18px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 560px) {
		grid-template-columns: 1fr;
	}
`;

const TopicCard = styled.li`
	height: 161px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.surface};
	border-radius: 14px;
	padding: 18px;
	cursor: pointer;

	&:hover {
		border-color: ${({ theme }) => theme.colors.secondary};
	}
`;

const TopicTitle = styled.h3`
	margin: 0 0 8px;
	font-size: 24px;
`;

const TopicDesc = styled.p`
	margin: 0;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 16px;
	line-height: 1.5;
`;

export default function Home() {
	const navigate = useNavigate();

	return (
		<Page>
			<Container>
				<HeroCard>
					<HeroTitle>리액트로 만드는 나만의 공간</HeroTitle>
					<HeroDesc>
						공부한 내용을 기록하고 일상을 공유하는 블로그입니다. 리액트의 다양한
						기능을 직접 구현해보며 만들었습니다.
					</HeroDesc>

					<HeroButton type="button" onClick={() => navigate("/write")}>
						글쓰기 시작
					</HeroButton>
				</HeroCard>

				<SectionTitle>배운 내용</SectionTitle>
				<Grid>
					{cards.map((c) => (
						<TopicCard
							key={c.key}
							role="button"
							onClick={() => navigate(`/detail/${c.key}`)}
						>
							<TopicTitle>{c.title}</TopicTitle>
							<TopicDesc>{c.desc}</TopicDesc>
						</TopicCard>
					))}
				</Grid>
			</Container>
		</Page>
	);
}
