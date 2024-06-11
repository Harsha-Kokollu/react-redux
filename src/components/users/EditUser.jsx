import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../../store/reducer/userReducer'

const EditUser = () => {
  const { id } = useParams()
  const dispatch = useDispatch() // for updating redux store
  const navigate = useNavigate()
  const users = useSelector((state) => state.users)
  const editUser = users.filter((user) => user.id == id)
  const { name, email } = editUser[0]
  const [getName, setName] = useState(name)
  const [getEmail, setEmail] = useState(email)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      updateUser({
        id: id,
        name: getName,
        email: getEmail,
      })
    )
    navigate('/')
  }

  return (
    <div>
      <div className="mt-3 mb-3">Update User</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={getName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>

          <input
            type="text"
            className="form-control"
            id="email"
            value={getEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
