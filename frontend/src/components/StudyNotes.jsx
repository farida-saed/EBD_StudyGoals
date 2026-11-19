import { useState } from "react";

function StudyNotes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h2>Study Notes</h2>
      <p>Organize your study notes in one place.</p>

      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Write your notes here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={addNote}>Add Note</button>

      <h3>My Notes</h3>

      {notes.length === 0 ? (
        <p>No notes added yet.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default StudyNotes;
