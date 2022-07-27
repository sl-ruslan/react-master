import React, { Fragment } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';

export const Review = () => {
    const notes = new Array(2)
    .fill('')
    .map((_, i) => ({ id: i, title: `Заметка ${i + 1}` }))

        return (
            <Fragment>
              <Form />
        
              <hr />
        
              <Notes notes={notes} />
            </Fragment>
          )
    
}
