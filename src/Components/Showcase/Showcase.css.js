import styled from "styled-components";

export const ShowcaseWrapper = styled.div`
	/* background: linear-gradient(#000000b8, #000000dd), */
	background: url(${({ bg_image: image }) => image}) no-repeat center center;
	background-size: 100%, cover;
	min-height: ${({ height }) => height || "90vh"};
	@media (max-width: 578px) {
		height: ${({ height }) => height || "70vh"};
	}
`;
