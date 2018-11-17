export class Event {
    id: number;
    name: string;
    location: string;
    goingAmount: number;
    spaceAmount: number;
    imageUrl: string;
    chatArea: ChatArea = new ChatArea();
}

export class ChatArea {
    title = 'Chat';
    messages: Message[] = [];
}

export class Message {
    message: string;
    imageUrl: string;
    username: string;
}

export class User {
    name: string;
    age: number;
}
