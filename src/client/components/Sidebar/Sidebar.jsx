import "./Sidebar.css";
import Head from "./Head";
import Search from "./Search";
import MainMenu from "./MainMenu";
import Settings from "./Settings";
import HelpCenter from "./HelpCenter";
import Logout from "./Logout";
import Navbar from "../Navbar/Navbar";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Head />
        <Search />
        <MainMenu />
        <Settings />
        <HelpCenter />
        <Logout />
      </div>
      <div className="main-content">
        <Navbar />
        <div className="content">
          Content
        </div>
      </div>
    </>
  );
}
