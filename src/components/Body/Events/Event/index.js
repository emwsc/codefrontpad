import React, { useState } from "react";
import { toReadableDate, sanitaze } from "./utils";

import {
  StyledButtons,
  StyledOpenEvent,
  StyledEventTitle,
  StyledEventDescription,
  StyledDetails,
  StyledShowDetails
} from "./styled";

const Event = ({ event }) => {
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  const onExpandClick = () => setIsDetailsExpanded(!isDetailsExpanded);

  return (
    <React.Fragment>
      <StyledEventTitle href={event.url} target="_blank">
        {event.name}
      </StyledEventTitle>
      <div>{toReadableDate(event.starts_at)}</div>
      <StyledEventDescription>
        <div>{event.description_short}</div>
        {event.description_html && (
          <React.Fragment>
            <StyledDetails
              dangerouslySetInnerHTML={sanitaze(event.description_html)}
              isDetailsExpanded={isDetailsExpanded}
            />
            <StyledButtons>
              <StyledShowDetails
                onClick={onExpandClick}
                title="Показать подробное описание события"
              >
                <i className="fas fa-info" />
                {isDetailsExpanded ? "Скрыть детали" : "Показать детали"}
              </StyledShowDetails>
              <StyledOpenEvent href={event.url} target="_blank">
                <i className="fas fa-external-link-square-alt" />
                Открыть событие
              </StyledOpenEvent>
            </StyledButtons>
          </React.Fragment>
        )}
      </StyledEventDescription>
    </React.Fragment>
  );
};

export default Event;
