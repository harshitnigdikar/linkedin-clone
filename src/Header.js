import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className = 'header'>

            <div className = "header__left">
                <img src = "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt= ""/>

                <div className = "header__search">
                    <SearchIcon/>
                    <input type = "text" />
                </div>

            </div>

            <div className = "header__right">    
            </div>
            
        </div>
    )
}

export default Header
