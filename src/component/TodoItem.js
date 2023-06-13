
import React from 'react'

import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md'

import './scss/TodoItem.scss';

const TodoItem = () => {
  return (
    <li className='todo-list-item'>
        <div className='check-circle active'>
            <MdDone />
        </div>
        <span className='text finish'>할 일 어쩌고~~~</span>
        <div className='remove'>
            <MdDelete />
        </div>
    </li>
  )
}

export default TodoItem