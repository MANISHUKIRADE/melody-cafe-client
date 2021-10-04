import { useHistory } from 'react-router-dom';
import {Button} from '@mui/material';
import './SubscriptionButton.scss'
export default function SubscriptionButton(){
    const history = useHistory();
    const loginHandeler = function(){
        history.push('/login')
    }
    return <>
    <div className="subscriptionButton">
    <Button variant="text" onClick={loginHandeler}>Get +</Button>
    </div>
    </>
}