import React from "react";
import Link from "./Link";
import List from "./List";
import Post from "./Post";
import { connect, Global, css, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Footer from "./components/footer";
import globalStyles from "./components/styles/global-styles";
import FontFaces from "./components/styles/font-faces";
import Header from "./components/header";
import Archive from "./components/archive";
import Loading from "./components/loading";
// import Post from "./components/post";
import SearchResults from "./components/search/search-results";
import SkipLink from "./components/styles/skip-link";
import MetaTitle from "./components/page-meta-title";
import PageError from "./components/page-error";

// const Header = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   h1 {
//     font-size: 3em;
//     text-align: center;
//   }
// `;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 16px;

  img {
    max-width: 100%;
  }
`;


const Root = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
  
    return (
      <>
        <Global
          styles={css`
            html {
              font-family: sans-serif;
            }
          `}
        />
        <Head>
        <title>WordCamp Sevilla 2019</title>
        <meta name="description" content="El tema de React de la primera WC para devs!" />
      </Head>
        <Header isPostType={data.isPostType}>
            <h1>WordCamp Sevilla 💃🏻</h1>
            <p>Estamos en {state.router.link}</p>
            {
            state.theme.isMenuOpen ? (
                <>
                <button onClick={actions.theme.closeMenu}>Close</button>
                <Menu>
                    <Link href="/">root /</Link>
                    <Link href="/page/2"> page 2</Link>
                </Menu>
                </>
            ) : (
                <button onClick={actions.theme.openMenu}>Menu</button>
            )
            }
            </Header>
        <hr />
        <Main>
          {data.isArchive && <List />}
          {data.isPost && <Post />}
          {data.isPage && <Post />}
        </Main>
      </>
    );
  };

export default connect(Root);