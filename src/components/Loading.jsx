import React from "react";

function Loading() {
  return (
    <div className="min-10 w-full items-center grid grid-cols-1 px-10 mt-1 sm:grid-cols-3">
      <div className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-10 overflow-hidden rounded-xl animate-pulse"></div>
        <div className="mt-4 px-5 pb-5">
          <div className="animate-pulse">
            <h5 className="text-xl tracking-tight h-40 bg-slate-700 rounded mb-3"></h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between animate-pulse">
            <p>
              <span className="text-3xl font-bold w-32 h-6 text-slate-700 bg-slate-700 rounded">
                ₹00000
              </span>
              <span className="text-sm line-through h-4 w-32 text-slate-700 bg-slate-700 rounded ml-2">
                ₹ 00000
              </span>
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2 animate-pulse">
            <button className="block w-full rounded bg-slate-700 text-white p-4 text-sm font-medium transition hover:scale-105"></button>
            <button className="block w-full rounded bg-slate-700 p-4 text-sm font-medium transition hover:scale-105"></button>
          </div>
        </div>
      </div>
      <div className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-10 overflow-hidden rounded-xl animate-pulse"></div>
        <div className="mt-4 px-5 pb-5">
          <div className="animate-pulse">
            <h5 className="text-xl tracking-tight h-40 bg-slate-700 rounded mb-3"></h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between animate-pulse">
            <p>
              <span className="text-3xl font-bold w-32 h-6 text-slate-700 bg-slate-700 rounded">
                ₹00000
              </span>
              <span className="text-sm line-through h-4 w-32 text-slate-700 bg-slate-700 rounded ml-2">
                ₹ 00000
              </span>
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2 animate-pulse">
            <button className="block w-full rounded bg-slate-700 text-white p-4 text-sm font-medium transition hover:scale-105"></button>
            <button className="block w-full rounded bg-slate-700 p-4 text-sm font-medium transition hover:scale-105"></button>
          </div>
        </div>
      </div>
      <div className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-10 overflow-hidden rounded-xl animate-pulse"></div>
        <div className="mt-4 px-5 pb-5">
          <div className="animate-pulse">
            <h5 className="text-xl tracking-tight h-40 bg-slate-700 rounded mb-3"></h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between animate-pulse">
            <p>
              <span className="text-3xl font-bold w-32 h-6 text-slate-700 bg-slate-700 rounded">
                ₹00000
              </span>
              <span className="text-sm line-through h-4 w-32 text-slate-700 bg-slate-700 rounded ml-2">
                ₹ 00000
              </span>
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2 animate-pulse">
            <button className="block w-full rounded bg-slate-700 text-white p-4 text-sm font-medium transition hover:scale-105"></button>
            <button className="block w-full rounded bg-slate-700 p-4 text-sm font-medium transition hover:scale-105"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
