import React from 'react';

const Signup = () => {
  return <>
          <div className='container align-items-center col-auto'>
        <form>
          <div className='col-xs-2'>
            <div className='col-xs-4'>
              <label htmlFor='ex3'>Name</label>
              <input className='form-control' id='ex3' type='text' />
            </div>
            <div className='col-xs-4'>
              <label htmlFor='ex3'>Email</label>
              <input className='form-control' id='ex3' type='text' />
            </div>
            <div className='col-xs-4'>
              <label htmlFor='ex3'>Password</label>
              <input className='form-control' id='ex3' type='text' />
            </div>
          </div>
          <div className='col-xs-2'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Confirm Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary my-3'>
            Submit
          </button>
        </form>
      </div>
  </>;
};

export default Signup;
