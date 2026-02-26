import { NavLink, useNavigate } from "react-router-dom";
import { useThemeContext } from "./ThemeWrapper";
import styled from "@emotion/styled";
import useAuthStore from "../../store/useAuthStore";

const HeaderBar = styled.header`
	position: sticky;
	top: 0;
	z-index: 10;
	background: ${({ theme }) => theme.colors.background};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderInner = styled.div`
	height: 56px;
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.strong`
	font-size: 24px;
	font-weight: 800;
	color: ${({ theme }) => theme.colors.primary};

	span {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 14px;
`;

const StyledLink = styled(NavLink)`
	color: ${({ theme }) => theme.colors.text};
	text-decoration: none;
	font-size: 14px;

	&.active {
		color: ${({ theme }) => theme.colors.secondary};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

const IconButton = styled.button`
	width: 34px;
	height: 34px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: ${({ theme }) => theme.colors.surface};
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
`;

const MoreButton = styled.button`
	height: 34px;
	padding: 0 12px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.border};
	background: transparent;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;

	&:hover {
		border-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export default function Header() {
	const { isDarkMode, toggleTheme } = useThemeContext();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const logout = useAuthStore((state) => state.logout);
	const navigate = useNavigate();
	return (
		<HeaderBar>
			<HeaderInner>
				<Logo>
					<NavLink to="/">
						My<span>Blog</span>
					</NavLink>
				</Logo>

				<Nav>
					<StyledLink to="/">홈</StyledLink>
					<StyledLink to="/write">글쓰기</StyledLink>
					{isLoggedIn ? (
						<StyledLink
							to={"/"}
							onClick={(e) => {
								e.preventDefault();
								logout();
								navigate("/");
							}}
						>
							로그아웃
						</StyledLink>
					) : (
						<StyledLink to={"/login"}>로그인</StyledLink>
					)}

					<IconButton type="button" onClick={toggleTheme}>
						{isDarkMode ? "🌙" : "☀️"}
					</IconButton>

					<MoreButton type="button">더보기</MoreButton>
				</Nav>
			</HeaderInner>
		</HeaderBar>
	);
}
