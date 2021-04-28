import React, { useState } from 'react'


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false)


    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    };

    const expandIt = () => {
        setExpand(true);
    }

    return (
        <div className="main-note">
            <form >
                {expand ?
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" /> : null}
                <textarea id="" cols="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." onClick={expandIt}></textarea>
                {expand ?
                    <button onClick={addEvent} className="plus-sign" type="button"> +</button> : null}
            </form>

        </div>
    )
}

export default CreateNote
