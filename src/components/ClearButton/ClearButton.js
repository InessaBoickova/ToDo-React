import './ClearButton.sass'


function ClearButton (props){
    return (
        <div className="clear">
            <div className="clear_count">
                You have padding {props.length} task
            </div>
            <button className="clear_btn"> Clear All </button>
        </div>
    )
}

export default ClearButton;