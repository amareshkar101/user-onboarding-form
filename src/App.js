import LinearStepper from "./pages/LinearStepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#664de5",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LinearStepper />
      </ThemeProvider>
    </div>
  );
}

export default App;
