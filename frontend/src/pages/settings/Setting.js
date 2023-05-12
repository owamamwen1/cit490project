import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';

function Setting() {
  return (
    <div className='setting'>
        <div className='settingWrapper'>
            <div className='settingTitle'>
                <span className='settingUpdateTitle'>Update Your Account</span>
                <span className='settingDeleteTitle'>Delete Account</span>
            </div>  
            <form className='settingForm'>
                <label>Profile Picture</label>
                <div className='settingPic'>
                    <img src='https://avatars.githubusercontent.com/u/24244287?v=4' alt=''/>
                    <label htmlFor='fileInput'>
                        <i className='settingPicIcon far fa-user circle'></i>
                    </label>
                    <input type='file' id='fileInput' className='settingFileOutpit'/>
                </div>
                <label>UserName</label>
                <input type='text' placeholder='Owamamwen'/>
                <label>Email</label>
                <input type='email' placeholder='owas@donor.com'/>
                <label>Password</label>
                <input type='password'/>
                <button className='settingSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  );
}

export default Setting;
