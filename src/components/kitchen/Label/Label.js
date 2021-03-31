import React from 'react';
import Style from './Style.css';

export default function Label({label}) {
    return (
        <>
            <label className="form-label">{label}</label>
        </>
    )
}
