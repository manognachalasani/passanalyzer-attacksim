import PasswordAnalyzer from "../components/PasswordAnalyzer.jsx";
import "../styles/theme.css";
export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Password Attack Analyzer</h1>

      <PasswordAnalyzer />
    </div>
  );
}