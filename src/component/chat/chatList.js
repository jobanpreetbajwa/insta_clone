import { useEffect, useState } from "react"
import users from "../../dummyUsers"
import Card from "./card"
import { PiNotePencilBold } from "react-icons/pi";
import { RiMessengerLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { TbExclamationMark } from "react-icons/tb";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
export default function Chatlist(){
    const [chatList,setChatlist] = useState([])
    const [user,setUser] = useState(false)
    const [chatWith,setChatwith] = useState({})
    useEffect(()=>{
        setChatlist(users)
        console.log(chatWith,"abcd")
    },[chatWith])
    return<div className="flex h-screen w-full">
        <div className=" py-8 px-6 flex flex-col gap-4 items-center border-x-2">
            <div className="text-4xl">
                <PiNotePencilBold/>
            </div>
            <div className="flex flex-col gap-4">
                {chatList.map((item,i)=>{
                    return<Card item={item} key={i} chat={setChatwith} user={setUser}/>
                })}
            </div>
        </div>
       { !user && 
        <div className="flex flex-col w-full p-4 items-center justify-center">
            <p className="text-8xl"><RiMessengerLine/></p>
        <p>start new messages</p>
        </div>
       }
       {user && <div className="flex flex-col w-full h-screen relative">
            <div className="flex gap-2 fixed w-96 bg-white z-20 p-4 items-center w-full  border border-b-2">
                <img src="coffee1.webp" className=" h-14 w-14 rounded-full "></img>
                <p>
                    {chatWith?.name}
                </p>
                <ul className="ml-auto flex gap-4 text-2xl">
                    <li ><FaPhone/></li>
                    <li className="text-3xl"><IoVideocam/></li>
                    <li className="border border-black border-2 rounded-full text-2xl"><TbExclamationMark/></li>
                </ul>
            </div>
            <div className="absolute top-20 p-4 flex flex-col items-center justify-center w-full h-screen">
                <div className="grow">
                    type msg  
                </div>
                <div className="w-full flex flex-col h-fit relative">
                    <input type="text" className="w-full h-12 border border-2 rounded-3xl pl-10 pr-24" placeholder="Messages..."></input> 
                    <p className="text-3xl absolute top-2 left-2"><MdOutlineEmojiEmotions/></p>
                    <div className="flex justify-end w-full">
                    <ul className="flex gap-2 text-2xl relative  -top-9 right-2">
                        <li><FaMicrophone/></li>
                        <li><FaImage/></li>
                        <li><FaRegHeart/></li>
                    </ul>
                    </div>
                </div>
            </div> 
        </div>} 
    </div>

}