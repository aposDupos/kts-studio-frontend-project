import React from "react";
import "../assets/styles/components/_gitRepoTile.scss"
import {Star} from "./Icons/Star";

export const GitRepoTile = () => {
    return (
        <div className={"git-repo-tile"}>
            <div className="git-repo-tile-avatar"/>
            <div className="git-repo-tile-info">
                <h4 className="git-repo-tile-info__top">kts-school-frontend</h4>
                <a href={"/"} className="git-repo-tile-info__mid">ktsstudio</a>
                <div className="git-repo-tile-info__btm">
                    <div className="git-repo-tile-info__rate"><Star/> 123</div>
                    <div className="git-repo-tile-info__date">Updated 21 Jul</div>
                </div>
            </div>
        </div>
    )
}