import React from "react";
import Note from "./Note";
import './Note.css'

class NoteList extends React.Component {
    render() {
        if (!this.props.notes || this.props.notes.length < 1) {
            return (
                <p>Aucune note</p>
            )
        }
        return(
            <div className="notes">
                {this.props.notes.map((note) => {
                    return <Note key={note._id} note={note} />
                })}
            </div>
        )

    }
}

export default NoteList