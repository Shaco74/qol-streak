import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { useState } from "react";

type FrequencyType = "daily" | "weekly" | "monthly";

type StreakeType = { name: string; frequency: FrequencyType; streak: number };

export function StreakSection() {
  const initialStreaks: StreakeType[] = [
    {
      name: "Joggen gehen",
      frequency: "daily",
      streak: 3,
    },
    {
      name: "Abendworkout",
      frequency: "daily",
      streak: 0,
    },
    {
      name: "Programmieren",
      frequency: "daily",
      streak: 1,
    },
    {
      name: "Etwas lesen",
      frequency: "weekly",
      streak: 0,
    },
  ];

  const [streaks, setStreaks] = useState<StreakeType[]>(initialStreaks);

  return (
    <>
      <h1>Streaks</h1>
      <Grid container rowGap={2}>
        <StreakList streaks={initialStreaks} />
      </Grid>
    </>
  );
}

function StreakList({ streaks }: { streaks: StreakeType[] }) {
  const generateRows = (streaks: StreakeType[]) => {
    return streaks.map((streak) => {
      return <StreakRow key={streak.name} streak={streak} />;
    });
  };
  return <>{generateRows(streaks)}</>;
}

function StreakRow({ streak }: { streak: StreakeType }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <EditLayout streak={streak} toggleEdit={setIsEdit} />
      ) : (
        <Box style={{ background: "#eeee", width: "100%", height: "100%" }}>
          <Grid
            style={{
              height: "100%",
              width: "100%",
              color: "black",
              padding: "2rem",
              fontSize: "1.2rem",
            }}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 4px;",
              margin: "0px",
            }}
            container
            spacing={2}
            alignItems={"center"}
          >
            <Grid
              item
              xs={6}
              lg={5}
              xl={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  overflowWrap: "break-word",
                }}
              >
                <span>Name</span>
                <b>{streak.name}</b>
              </span>
            </Grid>
            <Grid
              item
              xs={6}
              lg={3}
              xl={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span>Frequency</span>
                <b>{streak.frequency}</b>
              </span>
            </Grid>
            <Grid
              item
              xs={6}
              xl={2}
              lg={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span>Streak</span>
                <b>{streak.streak}</b>
              </span>
            </Grid>
            <Grid
              item
              xs={6}
              xl={1}
              lg={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                size="large"
                style={{
                  maxWidth: "100px",
                  maxHeight: "50px",
                  minWidth: "30px",
                  minHeight: "30px",
                  fontSize: "1.2rem",
                }}
                variant="contained"
                color="secondary"
                onClick={() => setIsEdit(true)}
              >
                edit
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
function EditLayout({
  streak,
  toggleEdit,
}: {
  streak: StreakeType;
  toggleEdit: any;
}) {
  const [frequency, setfrequency] = useState(streak.frequency);
  const handleChange = (
    event: SelectChangeEvent<"daily" | "weekly" | "monthly">
  ) => {
    if (
      event.target.value === "daily" ||
      event.target.value === "weekly" ||
      event.target.value === "monthly"
    ) {
      setfrequency(event.target.value);
    }
  };
  return (
    <>
      <Box style={{ background: "#ffa8a8", width: "100%", height: "100%" }}>
        <Grid
          style={{
            width: "100%",
            height: "100%",
            color: "black",
            padding: "2rem",
            fontSize: "1.2rem",
          }}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 4px;",
            margin: "0px",
          }}
          container
          spacing={2}
          rowGap={2}
          alignItems={"center"}
        >
          <Grid
            item
            xs={6}
            lg={5}
            xl={6}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <TextField
              fullWidth
              label="Name"
              InputProps={{
                classes: {
                  input: "Testclass",
                },
              }}
              defaultValue={streak.name}
            />
          </Grid>
          <Grid
            item
            xs={6}
            lg={3}
            xl={3}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <FormControl fullWidth>
              <InputLabel>Frequency</InputLabel>
              <Select
                fullWidth
                value={frequency}
                label="Frequency"
                style={{ fontSize: "1.2rem" }}
                defaultValue={streak.frequency}
                inputProps={{
                  classes: {
                    input: "Testclass",
                  },
                }}
                onChange={(e) => handleChange(e)}
                sx={{
                  textAlign: "center",
                }}
              >
                <MenuItem value={"daily"}>Daily</MenuItem>
                <MenuItem value={"weekly"}>Weekly</MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={8}
            xl={2}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              style={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                alignItems: "stretch",
                color: "#ffff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <Button color="error" variant="contained">
                <b>reset (hold)</b>
              </Button>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {streak.streak}
              </span>
              <Button color="success" variant="contained">
                <b>increment</b>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            xl={1}
            lg={1}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              size="medium"
              style={{
                maxWidth: "100px",
                maxHeight: "50px",
                minWidth: "30px",
                minHeight: "30px",
                fontSize: "1.2rem",
              }}
              variant="contained"
              color="primary"
              onClick={() => toggleEdit(false)}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Box>
      <style global jsx>{`
        .MuiMenuItem-root {
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
