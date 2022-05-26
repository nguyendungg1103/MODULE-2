  class StopWatch {
     private _startTime: number;
     private _endTime: number;

     constructor() {
         this._startTime = new Date().getMilliseconds();
     }
     reset(): any {
         this._startTime = (new Date()).getMilliseconds();

     }
     stop():number {
         return  this._endTime = new Date().getMilliseconds()
     }
     getElapsedTime():number {
         return this._endTime - this._startTime;

     }

 }
 export default StopWatch
