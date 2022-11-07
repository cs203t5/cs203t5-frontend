import React, { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import "./index.module.css";
import { border } from "@mui/system";

var stompClient = null;
const ChatRoom = () => {
    const [publicChats, setPublicChats] = useState([]);
    const [privateChats, setPrivateChats] = useState(new Map());
    const [tab, setTab] = useState("CHATROOM");
    const [userData, setUserData] = useState({
        message: "",
        username: "",
        receiverName: "",
        connected: false,
    });

    const handleValue = (e) => {
        const { value, name } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const registerUser = () => {
        let Sock = new SockJS("http://localhost:8080/api/ws");
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
        console.log("works");
        setUserData({ ...userData, connected: true });
        stompClient.subscribe("/chatroom/public", onPublicMessageReceived);
        stompClient.subscribe(
            "/user" + userData.username + "/private",
            onPrivateMessageReceived
        );
        userJoin();
    };

    const userJoin = () => {
        let chatMessage = {
            senderName: userData.username,
            status: "JOIN",
        };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };

    const onPublicMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        switch (payloadData.status) {
            case "JOIN":
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    };

    const onError = (err) => {
        console.log(err);
    };

    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        console.log(payloadData);
        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    };

    const sendPublicMessage = () => {
        if (stompClient) {
            let chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status: "MESSAGE",
            };
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: "" });
        }
    };

    const sendPrivateMessage = () => {
        if (stompClient) {
            let chatMessage = {
                senderName: userData.username,
                receiverName: tab,
                message: userData.message,
                status: "MESSAGE",
            };
            if (userData.username !== tab) {
                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));
            }
            stompClient.send(
                "/app/private-message",
                {},
                JSON.stringify(chatMessage)
            );
            setUserData({ ...userData, message: "" });
        }
    };

    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            {userData.connected ? (
                <div
                    className="chat-box d-flex w-100 h-100 align-items-center justify-content-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                >
                    <div
                        className="member-list h-100"
                        style={{
                            width: "20%",
                            alignSelf: "flex-start",
                            paddingTop: "20px",
                            borderRight: "1px solid black",
                        }}
                    >
                        <ul style={{ listStyle: "none" }}>
                            <li
                                onClick={() => {
                                    setTab("CHATROOM");
                                }}
                                className={`member ${
                                    tab === "CHATROOM" && "active"
                                }`}
                                style={{ marginBottom: "10px" }}
                            >
                                Chatroom
                            </li>
                            {[...privateChats.keys()].map((name, index) => (
                                <li
                                    onClick={() => {
                                        setTab(name);
                                    }}
                                    className={`member ${
                                        tab === name && "active"
                                    }`}
                                    key={index}
                                >
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {tab === "CHATROOM" && (
                        <div
                            className="chat-content d-flex"
                            style={{
                                width: "80%",
                                height: "100%",
                                flexDirection: "column",
                            }}
                        >
                            <ul
                                className="chat-messages"
                                style={{
                                    height: "90%",
                                    overflow: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingRight: "2em",
                                }}
                            >
                                {publicChats.map((chat, index) => (
                                    <li
                                        className="message"
                                        key={index}
                                        style={{ listStyle: "none" }}
                                    >
                                        <div
                                            style={{
                                                width: "200px",
                                                border: "1px solid grey",
                                                borderRadius: "5px",
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                marginTop: "10px",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <span className="message-data">
                                                {chat.message}
                                            </span>
                                            {chat.senderName ===
                                                userData.username && (
                                                <span
                                                    className="avatar self"
                                                    style={{
                                                        fontSize: "20px",
                                                        alignSelf: "flex-end",
                                                    }}
                                                >
                                                    {chat.senderName}
                                                </span>
                                            )}
                                            {chat.senderName !==
                                                userData.username && (
                                                <span
                                                    className="avatar"
                                                    style={{
                                                        fontSize: "20px",
                                                        alignSelf: "flex-end",
                                                    }}
                                                >
                                                    {chat.senderName}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div
                                className="send-message d-flex align-items-center align-self-center w-100 justify-content-center"
                                style={{ gap: "10px" }}
                            >
                                <input
                                    type="text"
                                    className="input-message"
                                    placeholder="enter public message"
                                    name="message"
                                    style={{
                                        border: "1px solid grey",
                                        borderRadius: "5px",
                                        width: "80%",
                                        paddingLeft: "20px",
                                    }}
                                    value={userData.message}
                                    onChange={handleValue}
                                />
                                <button
                                    type="button"
                                    className="send-button btn btn-primary btn-sm"
                                    onClick={sendPublicMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                    {tab !== "CHATROOM" && (
                        <div className="chat-content">
                            <ul className="chat-messages">
                                {[...privateChats.get(tab)].map(
                                    (chat, index) => (
                                        <li
                                            className="message"
                                            key={index}
                                            style={{ listStyle: "none" }}
                                        >
                                            {chat.senderName !==
                                                userData.username && (
                                                <div className="avatar">
                                                    {chat.senderName}
                                                </div>
                                            )}
                                            <div className="message-data">
                                                {chat.message}
                                            </div>
                                            {chat.senderName ===
                                                userData.username && (
                                                <div className="avatar self">
                                                    {chat.senderName}
                                                </div>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                            <div className="send-message">
                                <input
                                    type="text"
                                    className="input-message"
                                    name="message"
                                    placeholder={`enter private message for ${tab}`}
                                    value={userData.message}
                                    onChange={handleValue}
                                />
                                <button
                                    type="button"
                                    className="send-button"
                                    onClick={sendPrivateMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    className="register input-group-text"
                    style={{ gap: "10px" }}
                >
                    <input
                        id="user-name"
                        name="username"
                        placeholder="Enter the user name"
                        value={userData.username}
                        onChange={handleValue}
                        style={{
                            border: "0",
                            borderRadius: "10px",
                            padding: "5px",
                            fontSize: "22px",
                        }}
                    />
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={registerUser}
                    >
                        Connect
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatRoom;
