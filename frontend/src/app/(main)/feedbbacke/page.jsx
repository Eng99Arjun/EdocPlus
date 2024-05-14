"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";


const FeedBackForm = () => {

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState([]);

  const router = useRouter();

  const FeedBackForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
      rating: "",
    },
    onSubmit: (values, { resetForm }) => {
      values.rating = rating;
      console.log(values);
      resetForm();

      fetch("http://localhost:5000/feedback/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            toast.success("Feedback Added successfully");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    },
  });

  const getFeedback = async () => {
    const res = await fetch("http://localhost:5000/feedback/getall")
    console.log(res.status);
    const data = await res.json()
    console.log(data);
    setFeedback(data);
  }

  useEffect(() => {
    getFeedback()
  }, [])

  return (

    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Give Us Your Feedback
            </h2>
            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <form
            onSubmit={FeedBackForm.handleSubmit}
            class="mx-auto grid max-w-screen-md gap-4"
          >
            <div>
              <label
                for="first-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={FeedBackForm.values.username}
                onChange={FeedBackForm.handleChange}
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {FeedBackForm.touched.username && (
                <span className="text-red">{FeedBackForm.errors.username}</span>
              )}
            </div>

            <div>
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={FeedBackForm.values.email}
                onChange={FeedBackForm.handleChange}
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
              {FeedBackForm.touched.email && (
                <span className="text-red">{FeedBackForm.errors.email}</span>
              )}
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                value={FeedBackForm.values.message}
                onChange={FeedBackForm.handleChange}
                class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300"
              >
                {FeedBackForm.touched.message && (
                  <span className="text-red">
                    {FeedBackForm.errors.message}
                  </span>
                )}
              </textarea>
            </div>

            <div className="bg-white py-6 flex justify-start">
              <ReactStars
                rating={rating}
                onChange={setRating}
                size={48}
                activeColor="#ffd700"
              />
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button
                type="submit"
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-screen-md px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            User's Review
          </h2>
          <div className="divide-y">
            {/* review - start */}

            {
              feedback.map((feed) => {
                return (
                  <div className="flex flex-col gap-3 py-4 md:py-8">
                    <div>
                      <span className="block text-sm font-bold">{feed.username}</span>
                      <span className="block text-sm text-gray-500">
                        {feed.createdAt}
                      </span>
                    </div>

                    <div className="-ml-1 flex gap-0.5">

                      <ReactStars
                        count={feed.rating}
                        size={30}
                        color={'#ffd700'}
                      />
                    </div>

                    <p className="text-gray-600">
                      {feed.message}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackForm;