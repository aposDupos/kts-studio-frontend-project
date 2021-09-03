import React from "react";
import {Search} from "./Icons/Search";
import "../assets/styles/components/input.scss"

export const Input = () => {
    return (
        <div className={"input"}>
            <label className="input__search"><input type="text" placeholder={"Введите название организации"}/></label>
            <button className="input__button"><Search/></button>
        </div>
    )
}