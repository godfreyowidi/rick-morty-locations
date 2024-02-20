import React, { useState, useEffect } from 'react';

interface NotesFormProps {
  characterId: string;
  onSave: (note: string) => void;
  onClose: () => void;
}

const NotesForm: React.FC<NotesFormProps> = ({ characterId, onSave, onClose }) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem(`notes_${characterId}`);
    setNote(savedNote || '');
  }, [characterId]);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleNoteSave = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem(`notes_${characterId}`, note);
    onSave(note);
    onClose();
  };

  return (
    <form onSubmit={handleNoteSave} className="bg-white p-4 rounded-lg shadow-xl space-y-4">
  <label htmlFor="note-input" className="block text-gray-700 text-sm font-bold mb-2">
    Notes:
  </label>
  <textarea
    id="note-input"
    value={note}
    onChange={handleNoteChange}
    placeholder="Enter your note here..."
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    rows={4}
  />
  <div className="flex flex-col space-y-2">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Save Note
    </button>
    <button type="button" onClick={onClose} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      Close
    </button>
  </div>
</form>
  );
};

export default NotesForm;