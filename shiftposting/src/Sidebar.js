import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ChatIcon from '@mui/icons-material/Chat';
import './css/navigation.css'

export default function Sidebar(){
    return(
        <div className='side-nav'>
          <CurrencyExchangeIcon/>
          <AccountCircleIcon/>
          <HistoryEduIcon/>
          <ChatIcon/>
        </div>
    )
}