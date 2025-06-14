import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

export interface Message {
  email: string;
  message: string;
  fullName: string;
  timeStamp: number;
  readByAdmin: boolean;
}

@Injectable({ providedIn: 'root' })
export class Firebase {
  constructor(private firestore: Firestore) {}

  sendMessage(message: Message) {
    return new Promise(async (resolve, reject) => {
      try {
        message = {
          ...message,
          readByAdmin: false,
          timeStamp: Date.now(),
        };

        const collectionRef = collection(this.firestore, 'messages');
        const newMessagesRef = await addDoc(collectionRef, message);
        const addedMessages = { ...message, id: newMessagesRef.id };
        resolve(addedMessages);
      } catch (error) {
        reject(error);
      }
    });
  }
}
