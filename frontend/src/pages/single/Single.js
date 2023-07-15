import Sidebar from '../../components/sidebar/Sidebar';
import NewDonor from '../../components/singleDonor/NewDonor';
import TopBar from '../../components/topbar/Topbar';
import './single.css';

function Single() {
  return (
    <div>
    <TopBar/>
    <div className='single'>
      <NewDonor/>
      <Sidebar/>
    </div>
    </div>
  );
}

export default Single;
