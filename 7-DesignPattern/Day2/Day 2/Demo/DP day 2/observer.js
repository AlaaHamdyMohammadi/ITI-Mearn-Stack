class YoutubeChannel{
    constructor(){
        this.subscribers=[];
        this.videoTitle=""
    }

    register(subscriber){
      this.subscribers.push(subscriber);
    }

    unregister(subscriber) {
       this.subscribers=this.subscribers.filter((sub)=>sub!=subscriber)

    }

    placeNewVideo(title){
        this.videoTitle=title;
        this.notifyAll();
    }

    notifyAll(){
        this.subscribers.forEach((sub)=>sub.update(this))
    }
}

class User{
    
    update(channel){
        console.log(`new video uploaded ${channel.videoTitle}`);
    }
}


var codingWithMosh=new YoutubeChannel();

var codeCamp=new YoutubeChannel();

var mona=new User();
var ali=new User();
var hend=new User();

codingWithMosh.register(mona);
codingWithMosh.register(hend);

codingWithMosh.placeNewVideo("javascript Design patterns")

codingWithMosh.unregister(mona)

codingWithMosh.placeNewVideo("promises")
