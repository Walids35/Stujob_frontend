import ProgressBar from 'react-bootstrap/ProgressBar';
import "../Styling/App.scss"

function SkillCard (){
    return (
        <>
           <h6>Angular</h6>
           <ProgressBar variant="danger" now={40} />

           <h6 className='mt-3'>Bootstrap</h6>
           <ProgressBar variant="success" now={60} />

           <h6 className='mt-3'>Python</h6>
           <ProgressBar variant="warning" now={20} />
           
        </>
    )
}export default SkillCard;