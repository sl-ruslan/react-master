import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {TransitionGroup} from "react-transition-group";
import {FaTrashAlt} from 'react-icons/fa'

export function Navbar()  {
  let [cartOpen, setСartOpen] = useState(false)

  return (
      <TransitionGroup component="ul"
                       className="navbar-one navbar-dark navbar-expand-lg bg-primary">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><strong> Головна</strong></button>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link " to="/about">
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><strong> Інформація</strong></button>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link " to="/addnotes">
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><strong> Нотатки</strong></button>
            </NavLink>
          </li>
        </ul>
        <div>
          <ul className="navbar-nav">
            <li>
              <NavLink className="nav-link" to="/registration">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Реєстрація</button>
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/login">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Увійти</button>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/dump">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Корзина</button>
              </NavLink>
            </li>
              <FaTrashAlt onClick={() => setСartOpen(cartOpen =!cartOpen)} className={`dump-cart-button ${cartOpen && 'active'}`} />

              {cartOpen && (
                  <div className="cart-dump">
                  </div>
              )}
          </ul>
        </div>

      </TransitionGroup>
  )
}