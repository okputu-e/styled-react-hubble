import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import { Globals } from "./components/styled/Globals.styled";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#010101",
    body: "#fff",
    footer: "#000",
  },
  breakpoints: {
    mobile: "768px",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <>
        <Header />
        <Container>
          {content.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
