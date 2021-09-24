import React from 'react';

import { addNote } from '../services/api'

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
        title: '',
        content: '',
    };
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  //`permet de ne pas couper la chaine de caractere et mettre des + pour y insérer des variables
  handleSubmit = async (e) => {
      e.preventDefault() //empêcher le comportement naturel du naviguateur
    console.log(`formulaire soumis ! ${this.state.title} ${this.state.content}`) 
    await addNote(this.state)
}

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Titre :
                    <input name='title' onChange={this.handleChange} value={this.state.title}/>
                </label>
                <label>
                    Contenu :
                    <textarea name='content' onChange={this.handleChange} value={this.state.content}/>
                </label>
                <input type='submit' />
            </form>
        </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default NoteForm;
