import React from "react";

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { message } = this.props;
    const createdAt = new Date(message.createdAt);

    const days = [
      "Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday",
      "Saturday"
    ]

    const months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "November",
      "December"
    ]
    const day = days[createdAt.getDay()];
    const month = months[createdAt.getMonth()];
    const date = `${createdAt.getDate()}`;

    let hours = createdAt.getHours() % 12;
    hours = (hours === 0) ? "12" : `${hours}`;
    const aside = (createdAt.getHours() < 12)  ? 'AM' : 'PM';
    let minutes = `${createdAt.getMinutes()}`;
    if (minutes.length < 2) minutes = '0' + `${minutes}`
    
    const readableDate = `${day}, ${month} ${date}, ${hours}:${minutes} ${aside}`

    return (
      <li>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/461b1350-d5ec-4bdc-8278-d85cbc46e56a/dam9gnh-7a29b2f9-986a-473a-a44b-eead2b496a59.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MWIxMzUwLWQ1ZWMtNGJkYy04Mjc4LWQ4NWNiYzQ2ZTU2YVwvZGFtOWduaC03YTI5YjJmOS05ODZhLTQ3M2EtYTQ0Yi1lZWFkMmI0OTZhNTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V2yjqCqpSih9Nv5ZIwhPlhksrHcxoU76lCxXSAQaaqU" 
        />
        <div className="message-data">
          <div className="message-header">
            <div className="authorname">{message.author}</div>
            <div className="timestamp">{readableDate}</div>
          </div>
          <p>{message.body}</p>
        </div>
      </li>
    );
  }
}

export default MessageListItem;