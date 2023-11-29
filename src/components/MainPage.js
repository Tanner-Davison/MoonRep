import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Moon from "./imgs/Moon.jpeg";
import Sunset from "./imgs/Sunset.jpg";
const MainPage = () => {
	const [showThis, setShowThis] = useState(Moon);
	const handleBackgroundTransition = () => {
		setShowThis(showThis === Moon ? Sunset : Moon);
	};
	return (
		<TotalPageWrapper backgroundImage={showThis}>
			<Welcome>
				<h1>Welcome</h1>
                <button onClick={handleBackgroundTransition} >
                    {showThis === Moon &&
                       ( <span> bring out the sun</span> )
                    }
                    {
                        showThis !== Moon && (
                    
                    <span>Bring back the moon </span>
                        )
                    }
                </button>
            </Welcome>
		</TotalPageWrapper>
	);
};

export default MainPage;

const TotalPageWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-image: url(${(props) => props.backgroundImage});
	background-size: cover;

	h1 {
		color: white;
	}
`;
const Welcome = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding-right: 100px;
	top: -20px;
`;
