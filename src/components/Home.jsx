import React from 'react'
import { useSelector, useDispatch } from 'react-redux' // its used for get access form reducer
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/reducer/userReducer'
// import CheckboxesTags from './mui/Autocomplete'

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  console.log(users)
  const handleDelete = (e, id) => {
    e.preventDefault()
    dispatch(deleteUser({ id: id }))
  }
  return (
    <div>
      <div className="btn-create">
        <Link to="/create-user" className="btn btn-primary">
          Create
        </Link>
      </div>
      {/* <CheckboxesTags /> */}

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((user, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(e, user.id)}
                      className="btn btn-sm btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
