import Sidebar from '../../components/sidebar/Sidebar';
import NewDonor from '../../components/singleDonor/NewDonor';
import './single.css';

function Single() {
  return (
    <div className='single'>
      <NewDonor/>
      <Sidebar/>
    </div>
  );
}

export default Single;
