import React from 'react'

const Steps = () => {
    return ( 
        <div className="steps">
            <div className="item step1 done">
                <p>Step 1</p>
                <p>Transaction Info</p>
                <div className="progress done"></div>
            </div>
            <div className="item step2">
                <p>Step 2</p>
                <p>Recipient info</p>
                <div className="progress"></div>
            </div>
            <div className="item step3">
                <p>Step 3</p>
                <p>Make payment</p>
                <div className="progress"></div>
            </div>
        </div>
    )
}

export default Steps