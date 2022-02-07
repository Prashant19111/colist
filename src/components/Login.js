import React from "react";

const Login = () => {
  console.log("hello");
  return (
    <>
      <div className='container align-items-center col-auto'>
        <form>
          <div className='col-xs-2'>
            <div className='col-xs-4'>
              <label htmlFor='ex3'>col-xs-4</label>
              <input className='form-control' id='ex3' type='text' />
            </div>
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='col-xs-2'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div className='mb-3 form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
