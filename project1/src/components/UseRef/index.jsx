
import React, { Fragment, useRef } from 'react'

const Useref = () => {


    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "helow do";
        focusPoint.current.focus();
    };

    return (
        <Fragment>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
        </Fragment>
    );
 
}

export default Useref

 
