import React, {useContext, useState} from 'react'
import Calendar from 'react-calendar';
import journalContext from '../context/journal/journalContext';
import JournalItem from './JournalItem';

const Journal = ({number=null, }) => {
  const {notes,setnotes, deleteNote } = useContext(journalContext)
  
  
  const [value, onChange] = useState(new Date());

  const pnl = (note) => {
      if (note.pnl > 0 ) {
        return 'success'
      }
      else if (note.pnl < 0){
        return 'danger'
      }
      else {
        return 'white'
      }
  }

  return (
    <div className="row mx-1 my-3" >
      {notes.map((stock) => {
        return <JournalItem key={stock._id} item={stock} color={pnl(stock)} setnotes={setnotes} deleteNote={deleteNote} />
      })}

    </div>
  )
}

   


export default Journal
