import styled, { createGlobalStyle } from "styled-components";

export const Hover = styled.span`
	.active {
		box-shadow: black 3px 2px 5px;
		transition: all ease-in-out 200ms;
	}
	.onHover {
		&:hover {
			box-shadow: black 3px 2px 5px;
			transition: all ease-in-out 200ms;
		}
	}
`;
export const Showcase = styled.div`
	background: linear-gradient(#000000a5, #000000ca),
		url(${({ bg_image: image }) => image}) no-repeat center center;
	background-size: 100%, cover;
	height: 500px;
`;
export const GlobalStyle = createGlobalStyle`
:root {
    ///////* COLOR  *///////

    /* --white: white;
    --bodyColor: #f0f0e8;
    --containerColor: #242321;
    --containerColor2: #f3e8d4
    --brownishGold: #eb9747;
    --whitishBrown: #f3e8d4;
    --orange: #d68c4d;
    --faluRed: #802514;
    --dark: #201818;
    --brownOrange: #b14927;
    --sealBrown: #271109; */

    ///////* FONT SIZE  *///////
    --fontSuperBig: 2.5rem;
    --fontVeryBig: 2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  .fontMegaBig {
    font-size: 3.5;
  }
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin-auto{
  margin-left: 0;
  margin-right: 0;
  margin: auto;
}

* {
    box-sizing: border-box;
    padding: 0;
    /* font-family: "Noto Sans", "Poppins", sans-serif; */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  #overlay-wrapper{
    position: relative;
    height: 400px
  }
  #overlay-wrapper > .overlay {
    background-color: rgb(1, 43, 1);
    height: 300px;
    opacity: 0.5;
    height: 100%;
    /* z-index: 12; */
  }
  #overlay-wrapper > img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -12
  }

  #overlay-wrapper > .text{
    position: absolute;
    bottom: 10px;
    color: white;
    /* height: 100%; */
    width: 100%;
  }

  #section-2{
  }
`;
