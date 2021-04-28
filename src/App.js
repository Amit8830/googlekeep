import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App = () => {
  const [addItem, setItem] = useState([]);

  const addNote = (note) => {
    // alert("i am clicked")
    setItem((prevData) => {
      return [...prevData, note];
    })

  };

  const onDelete = (id) => {
    setItem((olddata) => 
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
 };


  return (
    <div>
      <Header />
      <CreateNote
        passNote={addNote}
      />

      {addItem.map((val, index) => {
        return (<Note
          key={index}
          id={index}
          title={val.content}
          content={val.content}
          deleteItem={onDelete}

        />
        );
      })}
      <Footer />

    </div>
  );
};

export default App;
