import { useState, useContext } from "react";
import { alertContext } from "../alertContext";
import JournalContext from "./journalContext";

const JournalState = (props) => {
    const host = "https://tradingjournal-mern-app.herokuapp.com"
        
    const [notes, setnotes] = useState([]);
    const { showAlert } = useContext(alertContext)
    const [summary, setsummary] = useState([])


    
    
    // TODO: API CALL FOR GETTING ALL NOTES
    const getJournal= async () => {
        const response = await fetch(`${host}/api/journal/fetchallentries`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': localStorage.getItem('jwtToken')
            }
        });
        const json = await response.json()
        if (json.success) {
            let newNotes = [...json.res]
            newNotes = newNotes.reverse()
            setnotes(newNotes)
        }else {
            showAlert(json.error, 'danger')
        }
    }
    
    
    const addNote = async (ticker, body, pnl) => {
        // TODO: API CALL FOR ADDING A NOTE
        const response = await fetch(`${host}/api/journal/createntry`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify({ticker, body, pnl}) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        if(json.success){
            setnotes(notes.reverse().concat(json.res).reverse())
            showAlert("Added note successfully", "success")
        }else{
            showAlert(json.error , "danger")
        }
    }

    const deleteNote = async (id) => {
        // TODO: API CALL FOR DELETING A NOTE
        const response = await fetch(`${host}/api/journal/deletentry/${id}`, {
            method: 'DELETE', 
            headers: {
                headers: {
                    'Content-Type': 'application/json',
                    'jwt-token': localStorage.getItem('jwtToken')
                }
        }});
        const json = await response.json()

        // * UPDATE THE FRONTEND NOTES
        if (json.success) {
            let newNotes = notes.filter((note) =>  note._id!==id)
            setnotes(newNotes)
            showAlert("Deleted note successfully", "success")
        } else {
            showAlert(json.error, "danger")
        }
    }

    const editNote = async ( id , ticker , body, pnl ) => {
        // TODO: API CALL FOR EDITING A NOTE

        const response = await fetch(`${host}/api/journal/updatentry/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                'jwt-token': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify({ticker, body, pnl}) // body data type must match "Content-Type" header
        });
        const json =  await response.json()
        

        //* EDIT IN THE NOTES
        if (json.success) {
            const indexFind = notes.findIndex((note) => id === note._id)
            let newNotes = notes;
            newNotes[indexFind] = {
                _id: id,
                ticker: ticker,
                body: body,
                pnl: pnl
            }
            setnotes(newNotes)
            showAlert("Edited note successfully", "success")
        } else {
            showAlert(json.error, "danger")
        }
    }
    
    return (
        <JournalContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote, getJournal , summary, setsummary}}>
            {props.children}
        </JournalContext.Provider>
    )
}

export default JournalState;
