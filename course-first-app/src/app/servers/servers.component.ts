import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';


/**
 *   templateUrl: './servers.component.html',
 * is replaced by inline html content.
 * This did not work for me in VSC. It did work in Eclipse.
 *
 * Also instead of using a styleUrl (pointing to one or more css file) one can also use inline
 * styling using the Component property styles.
 * But again this can lead to awkward coding.
 */
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
