import styled from "styled-components";
import Animal1 from "assets/dashboard/Animal1.png";
import Animal2 from "assets/dashboard/Animal2.png";
import Animal3 from "assets/dashboard/Animal3.png";

const NewAnimalWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1.6rem;
  gap: 1.6rem;
  width: 100%;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const NewAnimalCard = styled("div")`
  text-align: left;
  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));
  border-radius: 0.6rem;
  margin: 1.5rem 0;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.2);
  img {
    width: 100%;
    border-radius: 0.6rem 0.6rem 0 0;
  }
  .text-wrapper {
    padding: 0.4rem 1.2rem 0.8rem;
    .animal-name {
      ${({ theme }) => theme.text16Semi}
      color: ${({ theme }) => theme.colorsGray.darkGray2};
    }
    div {
      display: flex;
      justify-content: space-between;
      p {
        ${({ theme }) => theme.text14Regular}
        color: ${({ theme }) => theme.colorsGray.midGray2};
      }
    }
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`;

// eslint-disable-next-line arrow-body-style
const AnimalCards = () => {
  return (
    <NewAnimalWrapper>
      <NewAnimalCard>
        <img src={Animal1} alt="cat" />
        <div className="text-wrapper">
          <p className="animal-name">Ninka</p>
          <div>
            <p>Kot</p>
            <p>06.08.2022</p>
          </div>
        </div>
      </NewAnimalCard>
      <NewAnimalCard>
        <img src={Animal2} alt="cat" />
        <div className="text-wrapper">
          <p className="animal-name">Bella</p>
          <div>
            <p>Pies</p>
            <p>06.08.2022</p>
          </div>
        </div>
      </NewAnimalCard>
      <NewAnimalCard>
        <img src={Animal3} alt="cat" />
        <div className="text-wrapper">
          <p className="animal-name">Candy</p>
          <div>
            <p>Kot</p>
            <p>06.08.2022</p>
          </div>
        </div>
      </NewAnimalCard>
    </NewAnimalWrapper>
  );
};

export default AnimalCards;
