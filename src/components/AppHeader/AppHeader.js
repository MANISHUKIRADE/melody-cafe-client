import SearchBar from '../Search/Search';
import LogoName  from '../LogoName/LogoName';
import Profile from '../Profile/Profile';
import SubscriptionButton from '../SubcriptionButton/SubscriptionButton';
import './AppHeader.scss';

export default function AppHeader(){
    return <>
    <div className='AppHeader'>
    <LogoName />
    <SearchBar/>
    <SubscriptionButton />
    <Profile />
    </div>
    </>
}