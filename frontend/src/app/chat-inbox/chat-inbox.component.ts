import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {

  user?:String;
  room?:String;
  messageText?:String;
  messageArray:Array<{user:String,message:String}> = [];

  resetUpload3!: boolean;

  afuConfig3: AngularFileUploaderConfig = {
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    maxSize: 3,
    uploadAPI: {
      url:""
    },
    formatsAllowed: '.jpg,.jpeg,.png,.pdf,.docx',
    multiple: true,
    replaceTexts: {
      uploadBtn: 'Send',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };
  
  constructor(private chatService: ChatService) {

    this.chatService.newUserJoined().subscribe(data=> this.messageArray.push(data));

    this.chatService.userLeftRoom().subscribe(data=>this.messageArray.push(data));

    this.chatService.newMessageReceived().subscribe(data=>this.messageArray.push(data));
  }

  ngOnInit(): void {
  }

  join(){
    this.chatService.joinRoom({user:this.user, room:this.room});
};

  leave(){
    this.chatService.leaveRoom({user:this.user, room:this.room});
  };

  sendMessage(){
    this.chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  };

  docUpload(event:any) {
    console.log('ApiResponse -> docUpload -> Event: ',event);
  }
}