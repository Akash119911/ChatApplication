import { Component, OnInit } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { ChatappService } from '../chatapp.service';
import { chatAppDetails } from '../chatapp.details';
import { chatapp } from '../chatapp';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})

export class ChatInboxComponent implements OnInit {

  // user?:String;
  // room?:String;
  // messageText?:String;
  // messageArray:Array<{user:String,message:String}> = [];

  // resetUpload3!: boolean;

  // afuConfig3: AngularFileUploaderConfig = {
  //   theme: 'dragNDrop',
  //   hideProgressBar: true,
  //   hideResetBtn: true,
  //   hideSelectBtn: true,
  //   maxSize: 3,
  //   uploadAPI: {
  //     url:""
  //   },
  //   formatsAllowed: '.jpg,.jpeg,.png,.pdf,.docx',
  //   multiple: true,
  //   replaceTexts: {
  //     uploadBtn: 'Send',
  //     dragNDropBox: 'Drag N Drop',
  //     attachPinBtn: 'Attach Files...',
  //     afterUploadMsg_success: 'Successfully Uploaded !',
  //     afterUploadMsg_error: 'Upload Failed !',
  //     sizeLimit: 'Size Limit'
  //   }
  // };
  
  // constructor(private chatService: ChatService) {

  //   this.chatService.newUserJoined().subscribe(data=> this.messageArray.push(data));

  //   this.chatService.userLeftRoom().subscribe(data=>this.messageArray.push(data));

  //   this.chatService.newMessageReceived().subscribe(data=>this.messageArray.push(data));
  // }

  // ngOnInit(): void {
  // }

  // join(){
  //   this.chatService.joinRoom({user:this.user, room:this.room});
  // };

  // leave(){
  //   this.chatService.leaveRoom({user:this.user, room:this.room});
  // };

  // sendMessage(){
  //   this.chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
  // };

  // docUpload(event:any) {
  //   console.log('ApiResponse -> docUpload -> Event: ',event);
  // }

  chatapp = chatAppDetails;

  chatAppDetails : any; 

  chatInfoList :chatapp[] = [];

  // imageBlobUrl : string | ArrayBuffer| null = null; Dzone codes

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  imgURL:any;

  constructor(public chatappService : ChatappService, private httpClient : HttpClient){}

  ngOnInit(): void {
    this.getAllFiles();
    // this.getThumbnail();
  }

  onUpload(){
    const chatDetails: any = this.chatapp;
    this.chatappService.addFiles(chatDetails).subscribe(
      response => {
        console.log(response);
        console.log(chatDetails);
      },
      error => {
        console.log(error);
      });
  }

  getAllFiles(){
    this.chatappService.getAllFiles().subscribe((chatInfo:any)=> {
      this.chatInfoList = chatInfo;
      console.log(chatInfo);
    })
  }

  // Medium codes ========================================================================

  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
      console.log("ImgURL: "+ this.imgURL)
    }
  }

  onupload() {
    console.log(this.selectedFile);
  
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
    this.httpClient.post('http://localhost:3000/chatapp/addFiles', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }

  getImage() {
    this.httpClient.get('http://localhost:3000/chatapp/getAllFiles')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;
        }
      )
  }

  // DZone codes --------------------------------------------------------------------------

  // getThumbnail() : void {
  //   this.chatappService.getBlobThumbNail()
  //     .subscribe((val) => {
  //         this.createImageFromBlob(val);
  //         console.log(val)
  //       },
  //       response => {
  //         console.log("POST - getThumbnail - in error", response);
  //       },
  //       () => {
  //         console.log("POST - getThumbnail - observable is now completed.");
  //       });
  // }

  // createImageFromBlob(image: Blob) {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", () => {
  //     this.imageBlobUrl =  reader.result;
  //   }, false);

  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }
}