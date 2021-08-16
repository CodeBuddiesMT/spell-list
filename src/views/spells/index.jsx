import styled from "styled-components";

const request = require("request");
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6d6d6d;
`;
const Spells = (props) => {
  // obviously uses local host right now. Will want to update this with an .env variable when we deploy
  request("http://localhost:5000/spells", { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  });

  return <Container>Spells!</Container>;
};

export default Spells;
