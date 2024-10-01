import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <AppBar />
      {children}
      <Toaster />
    </div>
  );
}
