import React from "react";
import styled from "@emotion/styled";

const FooterBar = styled.footer`
	background: ${({ theme }) => theme.colors.background};
	border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 18px 20px;
	color: ${({ theme }) => theme.colors.textSecondary};
	text-align: center;
`;

export default function Footer() {
	return (
		<FooterBar>
			<FooterInner>
				<small>&copy; 2026 나만의 리액트 블로그. All rights reserved.</small>
			</FooterInner>
		</FooterBar>
	);
}
