import { Injectable } from '@angular/core';
import { HeadtrackerScene } from '../models/headtracker-scene';

@Injectable()
export class HeadtrackerService {
  scenes: HeadtrackerScene[] = [
    {
      "name":"bridge",
      "photos":[
        {
          "fileName":"./assets/images/headtracker/01/01-01.png",
          "z":0.7,
          "scale":0.8
        },
        {
          "fileName":"./assets/images/headtracker/01/01-02.png",
          "z":2,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/01/01-03.png",
          "z":3,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/01/01-04.png",
          "z":4,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/01/01-05.png",
          "z":5,
          "scale":1
        }
      ]
    },
    {
      "name":"verranda",
      "photos":[
        {
          "fileName":"./assets/images/headtracker/02/02-01.png",
          "z":1,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/02/02-02.png",
          "z":2,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/02/02-03.png",
          "z":3,
          "scale":1.15
        }
      ]
    },
    {
      "name":"house",
      "photos":[
        {
          "fileName":"./assets/images/headtracker/03/01.png",
          "z":1,
          "scale":1.1
        },
        {
          "fileName":"./assets/images/headtracker/03/02.png",
          "z":2,
          "scale":1
        },
        {
          "fileName":"./assets/images/headtracker/03/03.png",
          "z":3,
          "scale":1.15
        }
      ]
    },
    {
      "name":"bob",
      "photos":[
        {
          "fileName":"./assets/images/headtracker/04/02.png",
          "z":1,
          "scale":1.1
        },
        {
          "fileName":"./assets/images/headtracker/04/01.png",
          "z":2,
          "scale":1
        }
      ]
    },
    {
      "name":"coupe icare",
      "photos":[
        {
          "fileName":"./assets/images/headtracker/05/01.png",
          "z":2,
          "scale":1.1
        },
        {
          "fileName":"./assets/images/headtracker/05/02.png",
          "z":3,
          "scale":1
        }
      ]
    }
  ];
  currentSceneId: number;
  constructor() {
    this.currentSceneId = 0;
  }
  loadNext(shift: number): Promise<HeadtrackerScene> {
    return new Promise((resolve) => {
      this.currentSceneId += shift;
      if(this.currentSceneId > this.scenes.length - 1) {
        this.currentSceneId = 0;
      }
      else if(this.currentSceneId < 0) {
        this.currentSceneId = this.scenes.length - 1;
      }
      resolve(this.scenes[this.currentSceneId]);
    });
  }
}
