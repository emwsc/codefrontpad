import React, { useReducer } from "react";
import Events from "./Events";
import Spinner from "./Spinner";
import Header from "./Header";
import Footer from "./Footer";
import Settings from "./Settings";

import { INITIAL_STATE } from "./constants";
import reducer from "./reducer";
import { useGetEvents } from "./utils";
import { StyledCodefrontpad } from "./styled";
import { addKeyword, removeKeyword, setIsSettingsVisible } from "./actions";

const Body = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useGetEvents(dispatch, state.keywords);

  const changeSettingsVisibility = isSettingsVisibile =>
    dispatch(setIsSettingsVisible(isSettingsVisibile));

  const { isSettingsVisibile } = state;
  const isSpinnerVisible = state.isLoading && !isSettingsVisibile;
  const isEventsVisibile = !state.isLoading && !isSettingsVisibile;

  return (
    <StyledCodefrontpad>
      <Header
        changeSettingsVisibility={changeSettingsVisibility}
        isSettingsVisibile={isSettingsVisibile}
      />
      {isSpinnerVisible && <Spinner />}
      {isEventsVisibile && <Events events={state.events} />}
      {isSettingsVisibile && (
        <Settings
          keywords={state.keywords}
          addKeyword={keyword => dispatch(addKeyword(keyword))}
          removeKeyword={keyword => dispatch(removeKeyword(keyword))}
        />
      )}
      <Footer />
    </StyledCodefrontpad>
  );
};

export default Body;
