import Backdrop from './Backdrop'
import Button from './Button'
import classes from '../style.module.css'

const Confirmation = (props) => {

    return (
        <Backdrop onClick={props.cancel}>
            <div>
                <div className={classes.confirmation}>
                    <h2 >{props.title}</h2>
                    <div className={classes.btn_container}>
                        <Button onClick={props.confirm}>CONFIRM</Button>
                        <Button onClick={props.cancel}>CANCEL</Button>
                    </div>   
                </div>
            </div>
        </Backdrop>
    )
}

export default Confirmation