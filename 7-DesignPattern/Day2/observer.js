'use strict';

class Youtube{
    constructor(){
        this.subscribers = [];
        this.videoTitle = '';
    }
    //call every time new user is subscribe
    register(subscriber){
        this.subscribers.push(subscriber);
    }
    unregister(subscriber){
        this.subscribers = this.subscribers.filter(sub => sub !=subscriber);
    }
    //call when new video is update
    placeNewVideo(title){
        this.videoTitle = title;
        //tell all subscribers
        this.notifyAll();
    }
    notifyAll(){
      this.subscribers.forEach((sub) => sub.update(this)); //this => youtubechannel
    }
}

class User{
    update(channel){
        console.log(`new video uploaded ${channel.videoTitle}`)
    }
}

const codingWithMosh = new Youtube();
const codeCamp = new Youtube();
const alaa = new User();
const mona = new User();
const nada = new User();

codingWithMosh.register(alaa);
codingWithMosh.register(mona);
codingWithMosh.placeNewVideo('Design Pattern');
codingWithMosh.unregister(mona);
codingWithMosh.placeNewVideo('Promise');