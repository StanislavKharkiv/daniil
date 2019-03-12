import React from 'react'

function Date(props) {
    // const minDate = -490;
    // const maxDate = 2019;
    function width(date){
        const years = 2509;
        let date1 = +date + 490;
        let percent = Math.round(date1 * 100 / years);
        return percent
    }
    let styleWidth = width(parseInt(props.date));
    let style = {width: styleWidth + '%'}
    return (
        <div className="date" style = {style}>
            <div className="date-now">
                <span>{(props.date.charAt(0) === '-') ? props.date.slice(1) : props.date}</span>
            </div>
        </div>
    )
}

export default Date;