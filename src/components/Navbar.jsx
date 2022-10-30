import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from './logo.jpeg'


import { SearchBar } from "./";

const Navbar = () => (


  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, }}>
    <img src={logo} height={45} />
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>

    </Link>
    <SearchBar />
  </Stack>

);

export default Navbar;
