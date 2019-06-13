import React, { useReducer } from "react";
import Events from "./Events";
import Spinner from "./Spinner";
import Header from "./Header";
import Footer from "./Footer";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";
import { useOnLoad } from "./utils";
import { StyledCodefrontpad } from "./styled";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useOnLoad(dispatch);
  return (
    <StyledCodefrontpad>
      <Header />
      {state.isLoading && <Spinner />}
      {!state.isLoading && <Events events={state.events} />}
      <Footer />
    </StyledCodefrontpad>
  );
};

export default Body;
