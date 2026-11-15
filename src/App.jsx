import styled from "styled-components"
import {GlobalStyles,MyRoutes} from "./index"
import {Device} from "./styles/breakpoints"

function App() {
  
  return (
    <Container>
      <GlobalStyles />
      <section className="contentSidebar">Sidebar</section>
      <section className="contentMenuambur">Menu ambur</section>
      <section className="contentRouters"><MyRoutes/></section>
    </Container>
  )
}

const Container = styled.main `
  display:grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentSidebar{
    display: none;
    background-color: rgba(78, 45, 78, 0.5);
  }
  .contentMenuambur{
    position: absolute;
    background-color: rgba(13, 241, 215, 0.5);
  }
  .contentRouters{
    background-color: rgba(231, 13, 136, 0.5);
    grid-column: 1;
    width: 100%;
  }

  @media ${Device.tablet}{
    grid-template-columns:88px 1fr;
    .contentSidebar{
      display: initial;
    }

     .contentMenuambur{
    display: none;
    }

    .contentRouters{
      grid-column: 2;
    }
  }
   
`
export default App
