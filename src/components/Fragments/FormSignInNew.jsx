import React from 'react'
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
});

function FormSignInNew({ onSubmit }) {

  return (
    <>
      {/* form start */}
      <div className="mt-16">
        				<Formik
          initialValues={{
            email: "",
            password: "",
            status: false,
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await onSubmit(values.email, values.password);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          					{({ isSubmitting }) => (
            <div>
              {/* form disini */}
              						<Form>
             							{/* EMAIL */}
              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="email"
                      type="email"
                      label="Email Address"
                      placeholder="hello@example.com"
                    />
                  )}
                </Field>
                                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />  
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput
                      {...field}
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="●●●●●●●●●●●●●●"
                    />
                  )}
                </Field> 
                                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                /> 
              </div>

              {/* CHECKBOX */}
              <div className="mb-3">
                <Field name="status">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="status"
                      type="checkbox"
                      checked={field.value}
                      label="Keep me signed in"
                    />
                  )}
                </Field>
              </div>
              							{/* BUTTON */}
              <Button>{isSubmitting ? "Loading..." : "Login"}</Button>
            </Form>
            </div>
          )}
        </Formik>
   </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03 relative">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
      </div>
      {/* teks end */}

      {/* sign in with google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
  className="h-6 w-6 mr-2"

xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="800px"
height="800px"
viewBox="-0.5 0 48 48"
version="1.1"
>
  <path
    fill="#FFC107"
    d="M43.6 20.4H42V20H24v8h11.3C34.7 32.7 30.1 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.3 0 6.3 1.2 8.6 3.2l6-6C34.6 4.7 29.6 2 24 2 12.9 2 4 10.9 4 22s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.6-.4-3.6z"
  />
  <path
    fill="#FF3D00"
    d="M6.3 14.7l6.6 4.8C14.3 14.7 18.8 12 24 12c3.3 0 6.3 1.2 8.6 3.2l6-6C34.6 4.7 29.6 2 24 2 15.6 2 8.6 6.6 6.3 14.7z"
  />
  <path
    fill="#4CAF50"
    d="M24 42c5.9 0 10.9-2.3 14.6-6l-6-6c-2.1 1.6-4.8 2.6-7.6 2.6-5.9 0-10.8-3.9-12.5-9.2l-6.6 5C8.5 35.5 15.6 42 24 42z"
  />
  <path
    fill="#1976D2"
    d="M43.6 20.4H42V20H24v8h11.3c-.8 2.7-2.4 5-4.7 6.6l6 6C39.8 36.3 42 31.4 42 26c0-1.3-.1-2.6-.4-3.6z"
  />
</svg>

            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign in with google end */}

      {/* link start */}
      <div className="flex justify-center">
        <Link to="/register" className="mt-4 text-primary text-sm font-bold">Create an account</Link>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignInNew;
