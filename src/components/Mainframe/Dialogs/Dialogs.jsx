import React from 'react'
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css'
import MessageItem from './MessageItem';

let dialogData = [
    {name: 'user1', id: 1},
    {name: 'user2', id: 2},
    {name: 'user3', id: 3},
    {name: 'user4', id: 4},
    {name: 'user5', id: 5}

]

let messageData = [
    {message: 'hello', id: 1},
    {message: 'hello 2', id: 2},
    {message: 'hello 3', id: 3},
    {message: 'hello 4', id: 4},
    {message: 'hello 5', id: 5}
]

let dialogsElements = dialogData.map((dialog) =>
            <DialogItem name={dialog.name} id={dialog.id} />)

let messages = messageData.map((message) =>
<MessageItem message={message.message} id={message.id}/>)

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog}>
                {dialogsElements}
            </div>
            <div className={styles.message}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs