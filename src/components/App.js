import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
          {[...Array(7)].map((_, i) => <div key={i}>This is an example!</div>)}
      </Container>
      <Container header="Example header" textPosition="center">
          {[1, 2, 3, 4].map(i => (
              <img
                  alt="turtle"
                  src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
              />
          ))}
      </Container>
    </div>
  );
}

export default App;
