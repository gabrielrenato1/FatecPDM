const Feedback = ({textOk, onClickOK, textNOK, onClickNOK}) => {

    return (
        <div className="d-flex justify-content-evenly mt-2">
            <button className="btn btn-primary" onClick={onClickOK}>
                {textOk}
            </button>

            <button className="btn btn-danger" onClick={onClickNOK}>
                {textNOK}
            </button>
        </div>

    )

}

export default Feedback