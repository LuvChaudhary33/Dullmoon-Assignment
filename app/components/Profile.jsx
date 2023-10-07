"use client";
import { useState, useEffect } from 'react';
import {BsArrowRight, BsFillRocketTakeoffFill} from "react-icons/bs"
import {SiStarship} from "react-icons/si"
import {AiOutlineClose} from 'react-icons/ai'

const data = {
    name: "Luv",
    email: "chaudharyluv33@gmail.com",
    password: "hello",
    total_quota: 100,
    used_quota: 10,
    active: false,
    subscription_plan:{
        kind: {TRIAL: "TRIAL",HOBBY: "HOBBY"},
        currency: "inr",
        price: 100,
        started_at: "12 May, 2023",
        renewed_at: "12 July, 2023",
    }
}


const ProfilePage = () => {
  const [user, setUser] = useState(data);
  const [password, setPassword] = useState("")
  const [plan, setPlan] = useState(user.subscription_plan.kind.TRIAL);
  useEffect(() => {
    // fetch('/api/user')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUser(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching user data:', error);
    //   });

    setUser(data)
  }, [data]);

  const handlePassword = async(e) =>{
    e.preventDefault()
    // console.log(password)
    //fetch request to update password
    setPassword("")
  }

  const handlePlan = async(e) =>{
    e.preventDefault();
    // console.log(plan)
  }

  return (
        <>
        <div className="mx-auto bg-white rounded-lg">
        {!user?.active && <div className='flex justify-between items-center w-full h-12 bg-sky-400 text-white/90 px-2 rounded-lg'>
            <strong className='cursor-pointer'>Activate your account by clicking on link sent on email <BsArrowRight className='inline ml-2' /> </strong> <AiOutlineClose onClick={() => setUser({...user, active:true})} className='inline cursor-pointer' />
            
        </div>}
                <div className='py-4'>
                    <h1 className={`text-6xl text-black/80 mb-8 font-bold ${!user?.active ? "mt-12": "" }`}>Hi, <p className="inline italic">{user.name}</p></h1>
                    <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                        <form className='md:w-[50%] shadow-xl px-4 py-6 rounded-lg'>
                            <label className='block mb-2 font-bold'>Email</label>
                            <input type="text" disabled className=' w-full rounded-lg bg-gray-100 py-2 px-4 mb-10' value={user.email}/>
                            <label className='block mb-2 font-bold'>Password</label>
                            <input type="text" className='block w-full rounded-lg bg-gray-100 py-2 px-4 mb-3 focus:bg-white' onChange={(e) =>setPassword(e.target.value)} value={password}/>
                            <button className='rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 mb-10 transition duration-300' onClick={handlePassword}>Change Password</button>

                            <label className='block mb-2 font-bold'>Current Plan</label>
                            <select className='border border-gray-300 rounded-lg px-2 py-3 mb-5 md:mb-0' onChange={(e) =>setPlan(e.target.value)} value={plan} name="plans">
                                <option className='px-2 py-2' value={user.subscription_plan.kind.TRIAL}>{user.subscription_plan.kind.TRIAL}</option>
                                <option className='py-2' value={user.subscription_plan.kind.HOBBY}>{user.subscription_plan.kind.HOBBY}</option>
                            </select>
                            <button className='group inline-flex flex items-center gap-2 md:ml-5 ml-2 rounded-lg border-2 border-sky-400 hover:bg-sky-400 hover:text-white px-4 py-2 mb-10 transition duration-300' onClick={handlePlan}>Upgrade Plan<BsFillRocketTakeoffFill className="group-hover:translate-x-2 group-hover:-translate-y-1 transition smooth" /></button>
                            
                            <label className='block mb-2 font-bold'>Tokens</label>
                            <input type="text" disabled className='block w-full rounded-lg bg-gray-100 py-2 px-4 mb-10' value={`${user.used_quota}/${user.total_quota}`}/>
                            <div className='flex gap-5 items-center justify-start'>
                                <label className='font-bold'>Active</label>
                                <input type="radio" readOnly checked={user.active} />
                            </div>
                        </form>
        
                        <div className='md:w-[50%] shadow-xl px-4 py-6 rounded-lg'>
                            <h1 className="flex items-center gap-5 text-black/70 text-2xl md:text-4xl font-bold mb-10"><SiStarship />Subscription Plan</h1>
                            <div>
                                <label className='block mb-2 font-bold'>Price</label>
                                <input type="text" value={user.subscription_plan.currency.toUpperCase()} disabled className='w-[15%] rounded-lg bg-gray-100 py-2 px-4 mb-10' /> 
                                <input type="number" disabled className='w-[60%] rounded-lg bg-gray-100 py-2 px-4 mb-10 ml-5' value={user.subscription_plan.price}/>
                                <label className='block mb-2 font-bold'>Subscription Started</label>
                                <p className="mb-10">{user.subscription_plan.started_at}</p>
                                <label className='block mb-2 font-bold'>Subscription Renewed</label>
                                <p>{user.subscription_plan.renewed_at}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
};

export default ProfilePage;

