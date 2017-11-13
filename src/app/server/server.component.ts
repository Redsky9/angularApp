import { Component } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    
  serverId = 10;
  serverStatus = 'offline';
  
}
