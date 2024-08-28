import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Test1 from "../pages/test1";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/test1" element={<Test1/>} />
    </Routes>
}

export default AllRoutes;