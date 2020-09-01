import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  color: steelblue;
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);
