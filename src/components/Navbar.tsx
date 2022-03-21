import {
  AppBar,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //styles
  const classes = useStyles();
  //time
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //state
  const [position, setPosition] = useState<string>("Full-stack Developer");

  const onPositionChange = (event: SelectChangeEvent<string>) => {
    setPosition(event.target.value);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Movie</Typography>
          <Box textAlign="center">
            <WelcomeMessage
              position={position}
              country="VietNam"
            ></WelcomeMessage>
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-End Developer">
                    Front-End Developer
                  </MenuItem>
                  <MenuItem value="Back-End Developer">
                    Back-End Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
