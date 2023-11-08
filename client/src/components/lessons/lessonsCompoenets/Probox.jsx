import React, { useState } from "react";
import styled from "styled-components";
import NoneImage from "./NoneImage.svg";
import heart from "./CHeart.svg";
import Eheart from "./EHeart.svg";
import ProboxReview from "./ProboxReview";

const Probox = () => {
  const [displayHeart, setDisplayHeart] = useState("heart");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMakeReviewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledProbox>
      <div>
        <IconWrap>
          <NonImageStyled src={NoneImage} alt="None" />
        </IconWrap>
      </div>
      <TextBox>
        <h3>Pro name</h3>
        <span>Pro detail golf course</span>
        <CHeart>
          {displayHeart === "heart" && (
            <img
              src={heart}
              alt="None"
              onClick={() => setDisplayHeart("Eheart")}
            />
          )}
          {displayHeart === "Eheart" && (
            <img
              src={Eheart}
              alt="None"
              onClick={() => setDisplayHeart("heart")}
            />
          )}
        </CHeart>
        <div>
          <span>Date</span> <br />
          <span>Time</span>
        </div>
        <br />
        <BtnBox>
        <button>View Details</button>
          <button onClick={handleMakeReviewClick}>Make a Review</button>
        </BtnBox>
      </TextBox>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <span onClick={handleCloseModal}>X</span>
            <ProboxReview />
          </ModalContent>
        </Modal>
      )}
    </StyledProbox>
  );
};

export default Probox;

const StyledProbox = styled.div`
background-color: #e2e7e0;
display: grid;
grid-template-columns: 55px 1fr;
padding: 1em;
border-radius: 1em;
margin: 1em;
width: 350px;
`;

const IconWrap = styled.div`
  margin: 5px;
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  align-self: center;
`;



const NonImageStyled = styled.img`
  display: block;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 20px;
`;


const CHeart = styled.div`
  position: absolute;
  justify-self: right;
  margin-left: 12em;
  margin-top: -2.5em;
`;



const BtnBox = styled.div`
  display: flex;
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% transparency */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox = styled.div`
  margin: 10px;
`;
