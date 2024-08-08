import styled from "styled-components";

export const HomeWrapper = styled.div`
	/* App.css */
	.App {
		display: flex;
		flex-direction: row;
	}

	.content {
		margin-left: 250px; /* Align content next to the sidebar */
		padding: 20px;
		width: calc(100% - 250px); /* Calculate remaining width */
		height: 100vh;
		overflow-y: auto; /* Enable vertical scrolling */
	}
`;
