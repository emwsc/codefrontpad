import React, { useReducer } from "react";
import Events from "./Events";
import Spinner from "./Spinner";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";
import { useOnLoad } from "./utils";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useOnLoad(dispatch);
  return (
    <React.Fragment>
      {state.isLoading && <Spinner />}
      {!state.isLoading && <Events events={state.events} />}
    </React.Fragment>
  );
};

export default Body;
