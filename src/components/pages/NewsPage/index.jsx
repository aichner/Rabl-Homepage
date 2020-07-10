//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow } from "mdbreact";

//> Additional Components
import { NewsPost } from "../../molecules";

//> SCSS
import "./newspage.scss";
//#endregion

//#region > Data
const posts = [
  {
    title: "Hello there",
    author: "Michael",
    timestamp: 1594097874599,
    content:
      "Lorem Ipsum better hope that there are no 'tapes' of our conversations before he starts leaking to the press! Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.",
  },
  {
    title: "Hello there2",
    author: "Michael",
    timestamp: 1594197875599,
    content:
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? I know words. I have the best words. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful.",
  },
  {
    title: "Hello there3",
    author: "Michael",
    timestamp: 1594297876599,
    content:
      "I know words. I have the best words. Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't.",
  },
];
//#endregion

//#region > Components
class NewsPage extends React.Component {
  render() {
    return (
      <div id="newspage">
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Neuigkeiten
          </h2>
          <MDBRow>
            {posts
              .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
              .map((p, i) => (
                <NewsPost key={i} data={p}></NewsPost>
              ))}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default NewsPage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
