import React from "react";
import { deleteNote, updateNote } from "../services/api";

import './Note.css'

class Note extends React.Component {

handleDelete = async () => {
    if(window.confirm('Voulez-vous vraiment supprimer ?')) {
        await deleteNote(this.props.note._id)
    }
}

handleEdit = async () => {
    this.props.setNoteToEdit(this.props.note)
    this.props.openModal()
}

toggleFavorite = async () => {
    const note = {
        ... this.props.note,
        isFavorite: !this.props.note.isFavorite
    }
    await updateNote(note)
}

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
                    <button onClick={this.handleEdit}>✏️</button>
                    <button onClick={this.handleDelete}>🗑️</button>
                    <button onClick={this.toggleFavorite}>{this.props.note.isFavorite ? '❤️' : '🤍'}</button>
            </div>
        )
    }
}

export default Note