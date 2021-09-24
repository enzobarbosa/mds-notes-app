import React from "react";

import './Note.css'

class Note extends React.Component {
    render() {
        if (!this.props.note){
            return(
                <p>Pas de données</p>
            )
        }
        return(
            <div className="note">
                    <h2>{this.props.note.title}</h2>
                    <p>{this.props.note.content}</p>
            </div>
        )
    }
}

export default Note