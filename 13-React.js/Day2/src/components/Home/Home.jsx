import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from "../../store/slices/language";

function Home() {
    const language = useSelector((state) => state.language.language);

    const dispatch = useDispatch();
    
    function handleChange(){
        dispatch(changeLanguage(language == 'English' ? 'Arabic' : 'English'))
    }
    return <div>
        Home {language}
        <button className="btn btn-primary" onClick={() => {handleChange()}}>Change</button>
    </div>;
}

export default Home
