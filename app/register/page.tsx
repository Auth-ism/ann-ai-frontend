'use client';
import React from "react";

export default function WebRegisterPage() {
  return (
    <>
      <div className='bg-[#1e1e1e] flex justify-center items-center w-full min-h-full'>
        <div
            style={{boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)"}}
            className='w-[400px] bg-[#777076] rounded-4xl border border-[#0d0e14] p-8'
        >
          <form className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='font-medium text-[#fff] text-[18px] mb-2'>
                Name
              </label>
              <input
                id="name"
                placeholder="Value"
                className='min-w-[180px] p-[12px_16px] bg-[#60515c] rounded-xl border border-[#0d0e14] text-[#e0e0e0] text-[16px] outline-none'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor="surname"
                className='font-medium text-[#fff] text-[18px] mb-1'>
                Surname
              </label>
              <input
                id="surname"
                placeholder="Value"
                className='min-w-[180px] p-[12px_16px] bg-[#60515c] rounded-xl border border-[#0d0e14] text-[#e0e0e0] text-[16px] outline-none'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor="email"
                className='font-medium text-[#fff] text-[18px] mb-1'>
                Email
              </label>
              <input
                id="email"
                placeholder="Value"
                className='min-w-[180px] p-[12px_16px] bg-[#60515c] rounded-xl border border-[#0d0e14] text-[#e0e0e0] text-[16px] outline-none'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor="password"
                className='font-medium text-[#fff] text-[18px] mb-1'>
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Value"
                className='min-w-[180px] p-[12px_16px] bg-[#60515c] rounded-xl border border-[#0d0e14] text-[#e0e0e0] text-[16px] outline-none'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                htmlFor="confirm-password"
                className='font-medium text-[#fff] text-[18px] mb-1'>
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Value"
                className='min-w-[180px] p-[12px_16px] bg-[#60515c] rounded-xl border border-[#0d0e14] text-[#e0e0e0] text-[16px] outline-none'
              />
            </div>

            <button
              type="submit"
              className='flex justify-center items-center gap-2 p-3 bg-[#2C2C2C] rounded-xl border border-[#777076] text-[#fff] font-semibold text-[18px] cursor-pointer mt-2'>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
