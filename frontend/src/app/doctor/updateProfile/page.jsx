"use client";
import React, { useState } from "react";
import { useFormik } from "formik";


const Profile = () => {
  // const [selFile, setSelFile] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [passwordHidden, setPasswordHidden] = useState(true);



  const userForm = useFormik({
    initialValues: currentUser,
    onSubmit: async (data) => {
      console.log(data);
      const res = await fetch(url + "/user/update/" + currentUser._id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      const userdata = (await res.json()).result;
      console.log(userdata);
      setCurrentUser(userdata);
      sessionStorage.setItem("user", JSON.stringify(userdata));
    },

  })

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };

  const deleteAccount = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      // fetchPlanningServices();
      // alert.success('User Deleted Successfully');

    }
  }



  return (
    <>

      <div className="container-fluid h-auto  bg-gray-300 w-full">
        <div className="grid grid-cols-2 ">
          <div className="h-3/4 p-24">
      <div className=" mx-auto rounded bg-white ">
              <img
                height={200}
                className="border-rounded mx-w-full  h-auto w-24 rounded-full d-block m-auto"
                src={
                  currentUser.avatar &&
                  ${'http://localhost:5000'}/${currentUser.avatar}
                }
                alt="loading.."
              />
              {/* <hr className="mt-2 mb-2" /> */}
              <div>
                <div className="text-center my-4">
                  <label
                    className="btn bg-white hover:bg-slate-200 w-100 mt-3"
                    htmlFor="upload-image"
                  >
                    {" "}
                    <i className="fas fa-pen"></i>&nbsp;Edit{" "}
                  </label>
                  <input
                    type="file"
                    hidden
                    onChange={uploadProfileImage}
                    id="upload-image"
                  />
                </div>
                <p className="text-center text-2xl text-dark">
                  <span className="mb-2">{currentUser.username}</span>
                </p>
                <p className="text-center text-xl text-gray-500"> <span className="fw-bold">{currentUser.email}</span></p>
                <p className="text-xl text-center"> <span className="text-black font-semibold ">User Id:</span><span>{currentUser._id}</span></p>
                <ul className="list-group list-group-flush text-center">

                  <li className="list-group-item d-flex justify-content-between mb-4 align-items-center px-0">
                    <span className="me-3">Password</span>
                    {passwordHidden ? (
                      <span className="fw-bold">**</span>
                    ) : (
                      <span className="fw-bold">{currentUser.password}</span>
                    )}
                    <button
                      className="btn bg-white hover:bg-slate-200"
                      onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                      {passwordHidden ? "Show" : "Hide"}
                    </button>
                  </li>

                </ul>
                <button
                  type="button "
                  className="btn mb-4 w-56 mx-auto block  bg-red-500 hover:bg-red-700 text-white "
                  onClick={() => deleteAccount(currentUser._id)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>

<div className="px-24 mt-12">
<form>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="mb-3">
              <label className="form-label fw-bold mb-3" htmlFor="form7Example1">
               Username
              </label>
              <input
                type="text"
                id="username"
                onChange={userForm.handleChange}
                value={userForm.values.username}
                className="w-full py-2 rounded-lg px-2"
              />

            </div>
          </div>
         
        </div>

     
        {/* Email input */}
        <div className=" mb-4">
          <label className="form-label fw-bold" htmlFor="form7Example5">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={userForm.handleChange}
            value={userForm.values.email}
            className="w-full py-2 rounded-lg px-2"
          />

        </div>
        {/* Number input */}
        <label className="form-label fw-bold" htmlFor="form7Example6">
          Phone
        </label>
        <div className="form-outline mb-4">
          <input
            type="number"
            id="contact"
            onChange={userForm.handleChange}
            value={userForm.values.contact}
            className="w-full py-2 rounded-lg px-2"
          />
        </div>
        {/* Message input */}
        <label className="form-label fw-bold" htmlFor="form7Example7">
          Additional information
        </label>
        <div className="form-outline mb-4">
          <textarea
            className="w-full py-2 rounded-lg px-2"
            id="form7Example7"
            rows={4}
            defaultValue={""}
          />
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-2">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue=""
            id="form7Example8"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="form7Example8">
            Create an account?
          </label>
        </div>
      </form>
</div>

        </div>
      </div>





     


    </>
  );
};



export default Profile;