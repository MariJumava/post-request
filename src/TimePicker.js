import { render } from "@testing-library/react";
import { useState, useEffect } from "react";

const TimePicker = (props) => {

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {

        

    }, [hour, minute]);


        return (
            <div className='time-picker-container'>

            </div>
        )

}