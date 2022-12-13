import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const Root = styled("div")(({ theme }) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Item = styled("div")(({ theme }) => ({
  item: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  progress: {
    width: "100%",
  },
}));

const milestones = [
  {
    id: 1,
    title: "Milestone 1",
    completionDate: "January 1, 2021",
    description: "This is the description of milestone 1",
    progress: 100,
  },
  {
    id: 2,
    title: "Milestone 2",
    completionDate: "February 1, 2021",
    description: "This is the description of milestone 2",
    progress: 50,
  },
  {
    id: 3,
    title: "Milestone 3",
    completionDate: "March 1, 2021",
    description: "This is the description of milestone 3",
    progress: 10,
  },

  // ...
];

const Roadmap = () => {
  return (
    <Root>
      {milestones.map((item) => (
        <Item key={item.title}>
          <LinearProgress variant="determinate" value={item.progress} />
          <Typography variant="body2">{item.title}</Typography>
        </Item>
      ))}
    </Root>
  );
};

export default Roadmap;
