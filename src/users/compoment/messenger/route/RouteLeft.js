import React, {useState} from 'react';
import MenuLeft from '../left/MenuLeft';
import "./mesSengerLeft.css";

function RouteLeft({tabMess, setTabMess}) {
    const messages = [
        {
          id: 1,
          primary: "Brunch this week?",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/5.jpg",
        },
        {
          id: 2,
          primary: "Birthday Gift",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/1.jpg",
        },
        {
          id: 3,
          primary: "Recipe to try",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/2.jpg",
        },
        {
          id: 4,
          primary: "Yes!",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/3.jpg",
        },
        {
          id: 5,
          primary: "Doctor's Appointment",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/4.jpg",
        },
        {
          id: 6,
          primary: "Discussion",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/5.jpg",
        },
        {
          id: 7,
          primary: "Summer BBQ",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/1.jpg",
        },
        {
          id: 8,
          primary: "Summer BBQ",
          secondary:
            "I'll be in the neighbourhood this week I'll be in the neighbourhood this week I'll be in the neighbourhood this week I'll be in the neighbourhood this week",
          person: "/static/images/avatar/1.jpg",
        },
        {
          id: 9,
          primary: "Summer BBQ",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/1.jpg",
        },
        {
          id: 10,
          primary: "Summer BBQ",
          secondary: "I'll be in the neighbourhood this week",
          person: "/static/images/avatar/1.jpg",
        },
      ];
      const [friend, setFriend] = useState(messages);
    return (
        <div>
            <MenuLeft messages={messages}
              setIndex={setTabMess}
              index={tabMess}
              friend={friend}
              setFriend={setFriend}/>
        </div>
    );
}

export default RouteLeft;