import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-router-compo2',
  templateUrl: './router-compo2.component.html',
  styleUrls: ['./router-compo2.component.css']
})
export class RouterCompo2Component implements OnInit {

txtModel:any;

  onkeyup() {
    document.getElementById('clearBtn').style.visibility = (this.txtModel.length) ? "visible" : "hidden";
	};
	clearBtnClick() {
		document.getElementById('clearBtn').style.visibility = "hidden";
		this.txtModel = "";
	};

  showOptions: boolean = false;

  constructor() { }

  toggle(){
    this.showOptions = !this.showOptions;
  }

  isAllSelected:boolean = false;
  counts:any;
trueValue:any = 0;
  newOptions = [
    {value:'Sebastian Vettel', selected:false}, 
    {value:'Lewis Hamilton', selected:false},
    {value:'Valtteri Bottas', selected:false}, 
    {value:'Daniel Ricciardo', selected:false},
    {value:'Kimi Räikkönen', selected:false}
  ];

  toggleAll = function() {
    var toggleStatus = !this.isAllSelected;
   
    this.newOptions.forEach(items => {
        items.selected = toggleStatus; 
    });

     this.counts = _.countBy(this.newOptions,'selected');
     
    if(this.counts.hasOwnProperty('true')) this.trueValue = this.counts.true;
    else if(!this.counts.hasOwnProperty('true')) this.trueValue = 0;
  }
  
  optionToggled = function(opt){
    
    this.isAllSelected = this.newOptions.every(element => {
      return element.selected;
    });
    this.selectedModel = this.newOptions.filter(function(item){
      if(item.selected === true) return item;
    });
    this.counts = _.countBy(this.newOptions,'selected');
    if(this.counts.hasOwnProperty('true')) this.trueValue = this.counts.true;
    else if(!this.counts.hasOwnProperty('true')) this.trueValue = 0;

  }

  ngOnInit() {
  }

}
