import React, { useEffect } from "react";
import { apiGet, apiPut } from "../utils/api";
import { defer, Await, useLoaderData, useNavigate, useLocation} from "react-router-dom";
import requireAuth from "../utils/requireAuth";

export async function loader() {
    try {
        //require auth
        const loginUser = await requireAuth();
        //set status of admin to online
        const online = await setOnline();
    } catch(err) {
        throw err;
    }
    //get all conversations
    const data =  await apiGet("http://localhost:5000/api/conversations");    
    return defer({conversations : data});
}

//status functions
async function setOffline() {
    try {
        const userData2 = await apiGet("http://localhost:5000/user/login");
        await apiPut(`http://localhost:5000/users/online/${userData2._id}`, {isOnline: false});
    } catch(err) {
        throw err;
    }
}

async function setOnline() {
    try {
        const userData1 = await apiGet("http://localhost:5000/user/login");
        await apiPut(`http://localhost:5000/users/online/${userData1._id}`, {isOnline: true})
    } catch(err) {
        throw err;
    }
}

export default function Dashboard() {

    const conversations = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("beforeunload", setOffline)
        return () => {
            window.removeEventListener("beforeunload", setOffline);
        }
    }, [])

    
    function render(conversations) {
        const elements = conversations.map(item => 
            <div style={{border: "1px solid red"}} onClick={() => joinRoom(item.id_of_room)} key={item._id}>
                    <p>{item.id_of_room}</p>
                    <p>{item.dateAdded}</p>
            </div>
        )
        return (
            <div>
                {conversations.length === 0 ? "Žádné konverzace nebyly nalezeny." : elements}
            </div>
        )
    }

    //function for join room by id
    function joinRoom(id) {
        navigate(`/chat?room=${id}`);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                    <Await resolve={conversations.conversations}>
                        {render}
                    </Await>
            </React.Suspense>
        </div>
    )
}