import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group"

export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group-item-action ">
        {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >

                <li className="list-group-item list-group-item-secondary note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.date}</small>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}
                        >
                            &#10006;
                        </button>
                    </div>
                </li>

            </CSSTransition>

        ))}

    </TransitionGroup>
)
