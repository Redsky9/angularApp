import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created!!!";
  serverName = "";

  username = "";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Server name is " + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName += event.data;
  }

  usernameIsEmpty() {
    return this.username.length <= 0 ? true : false;
  }

  resetUsername() {
    this.username = "";
  }

}
