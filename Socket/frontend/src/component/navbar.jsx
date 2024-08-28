import { Link } from "react-router-dom"

const Navbar = () => {

    return <div style={{display:"flex", gap: "1rem"}}>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/test1"}>Test 1</Link>
    </div>
}

export default Navbar;