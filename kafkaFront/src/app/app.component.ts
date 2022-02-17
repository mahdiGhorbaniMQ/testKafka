import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {KafkaState} from "./state/kafka.state";
import {Observable} from "rxjs";
import {ConnectWebSocket} from "@ngxs/websocket-plugin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kafkaTest';
  // @Select(KafkaState.messages)
  // kafkaMessages$!: Observable<string[]>

  // constructor(private store:Store){ }

  // ngOnInit(){
    // this.store.dispatch(new ConnectWebSocket())
  // }
}
