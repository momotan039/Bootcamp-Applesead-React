import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AvatarLink from "./AvatarLink";

function Avatars() {
  const [avatars, setAvatars] = useState([]);
  const [filteredAvatars, setfilteredAvatars] = useState([]);

  const getAvatars = async () => {
    const _avatars = [];
    for (let i = 0; i < 5; i++) {
      const obj = await fetch("https://randomuser.me/api/").then((res) =>
        res.json()
      );
      _avatars.push(obj.results[0]);
    }
    debugger
    return _avatars;
  };

  useEffect(() => {
    getAvatars().then((res) => setAvatars([...res]));
  }, []);
  
const filterAvtars=(input)=>{
    const val=input.value.toLowerCase()
    
const filtered=avatars.filter(a=>a.name.first.includes(val))
setfilteredAvatars([...filtered])
}

  return (
    <>
    <input type="text" onInput={(e)=>filterAvtars(e.target)} placeholder="Search on User by name..." />
      <div className="avatars">
        {
                <AvatarLink avatars={filteredAvatars.length===0?avatars:filteredAvatars}/>
         }
      </div>
      <h1>Avatars</h1>
    </>
  );

}

export default Avatars;
