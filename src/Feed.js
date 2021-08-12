import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function Feed() {
    const user = useSelector(selectUser);
    const [input , setInput] = useState("");
    const [posts, setPosts] = useState([]);

// useEffect hook is speical hook which allows us to fire off a code which the feed component loads.
// It also allows us to fire off a code when the component rerenders if we do not pass a second argument.
// If we pass a blank dependency it then it will fire off once when it loads but it never fire off after that.
// So when the rerender happens it does not fire off again.

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id : doc.id,
                    data: doc.data(),
                }))
            )
        );      
    }, []);

//onSnapchot gives us a realtime listener conection to the database.
    const sendPost = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl : user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };


    return (
        <div className="feed">
            <div className = "feed__inputContainer">
                <div className = "feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type = "text" />
                        <button onClick={sendPost} type = "submit">Send</button>
                    </form>
                </div>
                <div className = "feed__inputOptions">
                   <InputOption Icon = {ImageIcon} title="Photo" color = "#70B5F9"/>
                   <InputOption Icon = {SubscriptionsIcon} title="Video" color = "#E7A33E"/>
                   <InputOption Icon = {EventNoteIcon} title="Event" color = "#COCBCD"/>
                   <InputOption Icon = {CalendarViewDayIcon} title="Write article" color = "#7FC15E"/>
                    
                    </div>               
            </div> 

            {/* Posts */} 
            {posts.map(({ id, data : {name , description, message, photoUrl } }) => (
                <Post 
                  key = {id}
                  name = {name}
                  description = {description}
                  message = {message}
                  photoUrl = {photoUrl} 

                  //we give every a key so that the react only renders the new element that it push into the list instead of rendering the entire list.
                />
            ))}
        </div>
    )
}

export default Feed;
