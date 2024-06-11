import React, { useState } from 'react';
import { addUser } from '../../store/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {
  const dispatch = useDispatch(); // for add data into store
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const INITIAL_DATA = {
    name: '',
    email: '',
  };
  const [form, setForm] = useState({ ...INITIAL_DATA });
  const changeHandler = (e) => {
    e = setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let idGenerate = { id: 1 };
    if (users && users.length > 0) {
      idGenerate = { id: users[users.length - 1].id + 1 };
    }

    dispatch(addUser({ ...idGenerate, ...form }));
    navigate('/');
  };
  return (
    <div>
      <div className="mt-3 mb-3">Create User</div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>

        <input
          type="text"
          className="form-control"
          id="email"
          onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateUsers;
