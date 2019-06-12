import React from "react";
import Event from "./Event";

import { StyledGrid, StyledTableHeader } from "./styled";

const Events = ({ events }) => {
  return (
    <React.Fragment>
      {events && events.length > 0 && (
        <React.Fragment>
          <StyledGrid>
            <StyledTableHeader>Название</StyledTableHeader>
            <StyledTableHeader>Дата</StyledTableHeader>
          </StyledGrid>
          <StyledGrid>
            {events.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </StyledGrid>
        </React.Fragment>
      )}
      {!events ||
        (events.length === 0 && (
          <div>
            На данный момент нет запланированных событий. Попробуйте попозже.
          </div>
        ))}
    </React.Fragment>
  );
};

export default Events;
