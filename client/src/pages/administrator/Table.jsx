import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Table() {
  return (
    <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-3xl font-semibold text-black dark:text-white">Tables</h2>
                <nav>
                    <ol className="flex items-center gap-2">
                        <li>
                            <a className="font-medium text-slate-500 dark:text-slate-400" href="/">Dashboard /</a>
                        </li>
                        <li className="font-medium text-blue-500">Tables</li>
                    </ol>
                </nav>
            </div>
            <div className="flex flex-col gap-10">
                <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2 shadow-default dark:border-neutral-800 dark:bg-neutral-900 sm:px-7 xl:pb-1'>
                    <div className="mb-1 flex justify-between">
                        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Users</h4>
                        <form className='flex h-full'>
                            <div className=''>
                                <button type="submit" className='bg-slate-200 px-1 rounded-sm bg-transparent'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='dark:text-slate-400 text-slate-500'/>
                                </button>
                                <input type="text" className='outline-none ms-1 rounded-sm bg-transparent border-none placeholder:text-gray-500 placeholder:text-sm text-slate-500 dark:text-slate-400 text-sm' placeholder='Ketik untuk mencari...'/>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col'>
                        <div className="grid grid-cols-3 rounded-sm text-sm bg-gray-100 dark:bg-neutral-800 sm:grid-cols-6 text-slate-500 dark:text-slate-200">
                            <div className="p-2 xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">Foto</h5>
                            </div>
                            <div className="p-2 xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">Username</h5>
                            </div>
                            <div className="p-2 xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">Email</h5>
                            </div>
                            <div className="hidden p-2 sm:block xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">NPM/NIDN</h5>
                            </div>
                            <div className="hidden p-2 sm:block xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">Status</h5>
                            </div>
                            <div className="hidden p-2 sm:block xl:p-5">
                                <h5 className="text-sm font-medium xsm:text-base">Actions</h5>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 text-sm sm:grid-cols-6 border-b border-slate-200 dark:border-neutral-800">
                            <div className="flex items-center gap-3 p-2 xl:p-5">
                                <div className="flex-shrink-0">
                                    <img src="/assets/brand-01-10b0313f.svg" alt="Brand" />
                                </div>
                                <p className="hidden text-black dark:text-white sm:block">Google</p>
                            </div>
                            <div className="flex items-center p-2 xl:p-5">
                                <p className="text-black dark:text-white">3.5K</p>
                            </div>
                            <div className="flex items-center p-2 xl:p-5">
                                <p className="text-meta-3 dark:text-white">$5,768</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5">
                                <p className="text-black dark:text-white">590</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5">
                                <p className="text-meta-5 dark:text-white">4.8%</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5 gap-3">
                                <a href="">
                                    <FontAwesomeIcon icon={faPenToSquare} className='dark:text-slate-400 text-slate-500'/>
                                </a>
                                <a href="">
                                    <FontAwesomeIcon icon={faTrash} className='dark:text-slate-400 text-slate-500'/>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 text-sm sm:grid-cols-6 border-b border-slate-200 dark:border-neutral-800">
                            <div className="flex items-center gap-3 p-2 xl:p-5">
                                <div className="flex-shrink-0">
                                    <img src="/assets/brand-01-10b0313f.svg" alt="Brand" />
                                </div>
                                <p className="hidden text-black dark:text-white sm:block">Google</p>
                            </div>
                            <div className="flex items-center p-2 xl:p-5">
                                <p className="text-black dark:text-white">3.5K</p>
                            </div>
                            <div className="flex items-center p-2 xl:p-5">
                                <p className="text-meta-3 dark:text-white">$5,768</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5">
                                <p className="text-black dark:text-white">590</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5">
                                <p className="text-meta-5 dark:text-white">4.8%</p>
                            </div>
                            <div className="hidden items-center p-2 sm:flex xl:p-5 gap-3">
                                <a href="">
                                    <FontAwesomeIcon icon={faPenToSquare} className='dark:text-slate-400 text-slate-500'/>
                                </a>
                                <a href="">
                                    <FontAwesomeIcon icon={faTrash} className='dark:text-slate-400 text-slate-500'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Table;