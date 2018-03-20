import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

  private serverId = 10;
  private serverStatus = 'offLine';

  constructor() {

  }

  ngOnInit(): void {
  }

  setServerId(serverId: number) {
    this.serverId = serverId;
  }

  getServerId() {
    return this.serverId;
  }
  setStatus(serverStatus: string) {
    this.serverStatus = serverStatus;
  }
  getStatus() {
    return this.serverStatus;
  }

}
