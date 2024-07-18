'use client';
import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Purchase added');
      formRef.current?.reset();
    }
  };

  return (
    <>
      <h3>Add Purchase</h3>
      <form ref={formRef} action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Purchase</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter Purchase...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='quantity'>
            Quantity of Case
          </label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            placeholder='Enter Case Quantity...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='price'>
            Price of Purchase
          </label>
          <input
            type='number'
            name='price'
            id='price'
            placeholder='Enter Cost...'
            step='0.01'
          />
        </div>
        <button className='btn'>Add Purchase</button>
      </form>
    </>
  );
};

export default AddTransaction;