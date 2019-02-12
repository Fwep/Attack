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
    hours = (hours === 0) ? "12" : `${hours}`
    const aside = (createdAt.getHours() > 0) && (createdAt.getHours < 12) ? 'AM' : 'PM';
    const minutes = `${createdAt.getMinutes()}`
    
    const readableDate = `${day}, ${month} ${date}, ${hours}:${minutes} ${aside}`

    return (
      <li>
        <div>{message.author}</div>
        <div>{readableDate}</div>
        <p>{message.body}</p>
      </li>
    );
  }
}

export default MessageListItem;