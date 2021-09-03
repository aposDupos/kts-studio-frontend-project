import React from "react";
import {Input} from "../components/Input";
import {GitRepoTile} from "../components/GitRepoTile";

export const Main = () => {
    return (
        <div className={"container"}>
            <Input/>
            <div className="GitRepoTiles">
            <GitRepoTile/>
            <GitRepoTile/>
            <GitRepoTile/>
            </div>
        </div>
    )
}