import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {
  n:number
  output:number
  webWorker: Worker   
   ngOnInit() {
    this.webWorker = new Worker('../../../../fibonacci.worker', { type: `module` })
    this.webWorker.onmessage = (data) => {
      console.log(data)
        this.output = data.data
    }


    
  }    
  calcFib() {
      this.webWorker.postMessage(this.n)
  }


}

