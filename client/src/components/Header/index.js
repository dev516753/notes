import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to='/'>Заметки</Link>
      <Link to="/signup">Зарегистрироваться</Link>
      <Link to="/signin">Войти</Link>
      <Link to='/signout'>Выйти</Link>
    </div>
  )
}

export default Header