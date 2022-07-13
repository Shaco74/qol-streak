import { Box, Grid } from "@mui/material";
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
  ];

  const [streaks, setStreaks] = useState<StreakeType[]>(initialStreaks);

  return (
    <>
      <h2>Streaks</h2>
      <StreakList streaks={initialStreaks} />
    </>
  );
}

function StreakList({ streaks }: { streaks: StreakeType[] }) {
  const generateRows = (streaks: StreakeType[]) => {
    return streaks.map((streak) => {
      return <StreakRow key={streak.name} streak={streak} />;
    });
  };
  return (
    <>
      <h4>tabel</h4>
      {generateRows(streaks)}
    </>
  );
}

function StreakRow1({ streak }: { streak: StreakeType }) {
  return (
    <>
      <Box style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <span>{streak.name}</span>
        <span>{streak.frequency}</span>
        <span>{streak.streak}</span>
      </Box>
    </>
  );
}

function StreakRow({ streak }: { streak: StreakeType }) {
  return (
    <>
      <Box style={{ background: "#eeee", width: "100%", height: "100%" }}>
        <Grid style={{ color: "black" }} container spacing={2}>
          <Grid item xs={7}>
            <span>{streak.name}</span>
          </Grid>
          <Grid item xs={3}>
            <span>{streak.frequency}</span>
          </Grid>
          <Grid item xs={2}>
            <span>{streak.streak}</span>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
