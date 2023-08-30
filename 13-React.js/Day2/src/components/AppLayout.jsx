import { Outlet } from "react-router-dom"
import Header from "./Navbar/Header"
import { useSelector } from "react-redux"

function AppLayout() {
    const language = useSelector(state => state.language.language);
    return (
      <div dir={`${(language == 'English') ? 'ltr' : 'rtl'}`}>
        <Header />
        <Outlet />
      </div>
    );
}

export default AppLayout
