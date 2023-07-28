'use strict';

// Abstraction interface
class IMessage {
  send(message) {
    throw new Error("Send must be implemented.");
  }
}

// 1) Low-level module
class Gmail extends IMessage {
  send(message) {
    console.log(`Sending Gmail notification: ${message}`);
  }
}

// 2) Low-level module
class Hotmail extends IMessage {
  send(message) {
    console.log(`Sending Hotmail notification: ${message}`);
  }
}

// High-level module
class Notification {
  constructor(messageService) {
    this.messageService = messageService;
  }

  sendMessage(message) {
    this.messageService.send(message);
  }
}

const gmail = new Gmail();
const hotmail = new Hotmail();

const notificationGmail = new Notification(gmail);
const notificationHotmail = new Notification(hotmail);

notificationGmail.sendMessage("Hello from Gmail!");
notificationHotmail.sendMessage("Greetings from Hotmail!");
