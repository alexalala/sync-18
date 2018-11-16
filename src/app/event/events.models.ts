export class Event {
    id: number;
    name: string;
    location: string;
    goingAmount: number;
    spaceAmount: number;
    imageUrl: string;
    chatArea: ChatArea;
}

export class ChatArea {
    title: string;
    messages: Message[];
}

export class Message {
    message: string;
    imageUrl: string;
    username: string;
}
