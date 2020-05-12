import React from "react";
import { Content, Footer, GridContainer, Header, Main } from "./styles/Styles";
import Items from "./components/products";
import Filter from "./components/filter";
import { Cart } from "./components/cart";
import SideBar from "./components/SideBar";
function App() {
  return (
    <GridContainer>
      <Header>
        <a href="/">PIZZA</a>
      </Header>
      <Main>
        <Content>
          <div className="main">
            <Filter />
            <Items />
          </div>
          <div className="sidebar">
            <SideBar />
          </div>
        </Content>
      </Main>
      <Footer>FOOTER</Footer>
    </GridContainer>
  );
}

export default App;
