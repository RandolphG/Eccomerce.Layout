import styled from "styled-components";
/* colors */
const colorPageBackground = "#f5f5f5";
const colorAppBackground = "#ffffff";
const colorProductBackground = "#6bfec8";
const colorTextOffBlack = "#444444";
const colorTextGrey = "#8b8b8b";
const colorRatingFalse = "#dddddd";
const colorShareGrey = "#bbbbbb";
const colorRatingTrue = "#fe6067";
const colorDiscountPrice = "#fe6067";

const colorRadioGreen = "#59e8c8";
const colorRadioYellow = "#ffee71";
const colorRadioPurple = "#6654af";
const colorRadioBlack = "#343434";
const colorRadioGrey = "#dfdfdf";

/* icons */
const iconStarSolid = "\f005";
const iconShareAlt = "\f1e0";
const iconShoppingCart = "\f07a";

/* grid container */
export const GridContainer = styled.div`
  cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/820793/cursor-auto.png),
    auto;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-auto-columns: 1fr;
  grid-auto-rows: 5rem 1fr 5rem;
`;

/* header section */
export const Header = styled.div`
  display: flex;

  padding-left: 1rem;
  align-items: center;
  grid-area: header;
  color: wheat;
  background: #203040;
  body,
  input,
  select,
  textarea {
    font-size: 1.6rem;
    font-family: "Fira Code Medium";
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: deeppink;
    }
  }
`;

/* main section */
export const Main = styled.div`
  grid-area: main;
`;

/* footer */
export const Footer = styled.div`
  grid-area: footer;
  background: #203040;
  color: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* content */
export const Content = styled.div`
  display: grid;
  grid-template-columns: auto;
  .main {
  }
`;

/* products*/
export const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  list-style-type: none;
  a {
    text-decoration: none;
  }
`;

/* product panel*/
export const Product = styled.li`
  background: white;
  border-radius: 4px;
  height: auto;
  margin: 1rem;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 2px 2px 6px 3px rgb(0, 0, 0, 0.45);
`;

/* images */
export const Image = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
`;

/* product title */
export const Title = styled.p`
  text-align: center;
  color: black;
  font-weight: 600;
`;

/* price*/
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div,
  button {
    font-size: 1rem;
    text-align: center;
  }
`;

/* add button */
export const AddButton = styled.button`
  border-radius: 5px;
  color: white;
  background: blue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProductInfoBar = styled.div`
  display: flex;
  flex-direction: row;
`;

/* filter results */
export const FilterResults = styled.div``;

/* filter sort*/
export const FilterSort = styled.div``;

/* filter size*/
export const FilterSize = styled.div``;

/* ------------------------------------------> Cart <---*/
export const CartItems = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
`;

/* sidebar */
export const SidebarNav = styled.div`
  .settings {
    height: 73px;
    float: right;
    width: 250px;
    margin: 0px;
    text-align: center;
  }
  /* ScrollBar  */
  .scrollbar {
    height: 90%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .scrollbar:hover {
    height: 90%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  /* Scrollbar Style */
  #style-1::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  #style-1::-webkit-scrollbar {
    width: 5px;
    background-color: #f7f7f7;
  }
  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bfbfbf;
  }
  /* Scrollbar End */
  .main-menu:hover,
  nav.main-menu.expanded {
    width: 250px;
    overflow: hidden;
    opacity: 1;
  }
  .main-menu {
    background: #f7f7f7;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    right: 0;
    width: 55px;
    overflow: hidden;
    -webkit-transition: width 0.2s linear;
    transition: width 0.2s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
    opacity: 1;
  }
  .main-menu > ul {
    margin: 7px 0;
  }
  .main-menu li {
    position: relative;
    display: block;
    width: 250px;
  }
  .main-menu li > a {
    position: relative;
    width: 255px;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #8a8a8a;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all 0.14s linear;
    transition: all 0.14s linear;
    border-top: 1px solid #f2f2f2;
    text-shadow: 1px 1px 1px #fff;
  }
  /* Logo Hover Property */
  .settings:hover,
  settings:focus {
    background: black;
    transition: all 0.2s ease-in-out;
  }
  .settings:active,
  settings:focus {
    background: black;
    transition: all 0.1s ease-in-out;
  }
  a:hover,
  a:focus {
    text-decoration: none;
    border-left: 0px solid #f7f7f7;
  }
  nav {
    -webkit-user-select: none;
    user-select: none;
  }
  nav ul,
  nav li {
    outline: 0;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  /* Darker element side menu Start*/
  .darkerli {
    background-color: #ededed;
    text-transform: capitalize;
  }
  .darkerlishadow {
    background-color: #ededed;
    box-shadow: inset 0px 5px 5px -4px rgba(50, 50, 50, 0.55);
  }
`;
