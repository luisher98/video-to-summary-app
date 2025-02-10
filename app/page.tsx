import DarkModeSwitch from "./components/DarkModeSwitch";
import Footer from "./components/Footer";
import InputSelector from "./components/InputSelector";
import Summary from "./components/Summary";

import { VideoContextProvider } from "./context/VideoContext";

export const metadata = {
  title: "Tube Summary",
  description:
    "A text summary generator for youtube videos created by Luis Hernández",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Home() {
  return (
    <>
      <DarkModeSwitch />
      <VideoContextProvider>
        <InputSelector />
        <Summary />
      </VideoContextProvider>
      <Footer />
    </>
  );
}
