export default function Card({item,chat,user}){
    return<div className="flex h-16 w-16">
       <img src="coffee1.webp" className="w-full rounded-full " onClick={()=>{chat({...item});user(true)}}></img>
    </div>
}