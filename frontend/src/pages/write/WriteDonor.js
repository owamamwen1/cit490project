import './writeDonor.css';

function WriteDonor() {
  return (
    <div className='write'>
        <form className='writeForm'>
            <img className='writeImg' src='https://a.cdn-hotels.com/gdcs/production64/d1332/5c4a0830-86d7-41fb-9277-0b68d09b7fa8.jpg' alt=''/>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'><i className='writeIcon fas fa-plus'></i></label>
                <input className='fileOutpit' type='file' name='' id='fileInput'/>
                <input type='text' placeholder='title' className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Please describe the food...' type='text' className='writeInput writeText'></textarea>
            </div>
            <div className='writeFormGroup'>
            <button className='writeSubmit' type='submit'>Publish</button>
            </div>
        </form>
    </div>
  );
}

export default WriteDonor;
