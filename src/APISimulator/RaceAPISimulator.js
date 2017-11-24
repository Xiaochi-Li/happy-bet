import Meeting from './Meeting'

/*
* */
export default class RaceAPISimulator{
  constructor() {
    this.meetings = this.getMeetings();
    console.log(this.meetings);
  }

  getMeetings(){
    const meetings = [];
    for (let i=1; i<=12; i++){
      meetings.push(new Meeting());
    }
    return meetings;
  }

  getJSONResult(){
    return this.meetings;
  }
}