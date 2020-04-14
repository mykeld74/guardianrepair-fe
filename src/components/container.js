import Styled from "styled-components"

const Container = Styled.div`
  box-sizing: border-box;
  width: calc(100% - 20px);
  max-width: 960px;
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  h1{
    font-size: calc(1.2rem + 2vw);
    padding: 0;
    margin: 4vh auto;
    a{
      color: #ED2028;
      text-decoration: none;
    }
  }
`

export default Container
