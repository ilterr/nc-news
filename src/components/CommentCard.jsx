import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

const CommentCard = ({ comment }) => {
  const timeDate = `Posted at ${comment.created_at.slice(
    12,
    16
  )} / ${comment.created_at.slice(0, 10)}`;

  return (
    <div>
      <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#424242" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>{comment.author}</Typography>
            <Typography>{timeDate}</Typography>{" "}
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#686868" }}>
          <Typography>{`${comment.body}`}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CommentCard;
