import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;  //! to get somevalue 
    this.getAllQuestion(); //tp get all question onInit
  }

  getAllQuestion() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions; //store all question in JSON inside questionList
      })
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  previousQuestion() {
    this.currentQuestion--;
  }



}
