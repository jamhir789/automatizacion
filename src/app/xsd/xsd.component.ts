import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';
import * as convert from 'xml-js';
import {xmldom} from 'xmldom';

@Component({
  selector: 'app-xsd',
  templateUrl: './xsd.component.html',
  styleUrls: ['./xsd.component.css']
})
export class XsdComponent implements OnInit,OnChanges {

  serviceName:string="";
  typeArray:string[]=['--'];
  jsonSchema:string='';
  i:number=0;
  isDisabeled:boolean=true;
  @Input() currentType:string;
  @Input() nameSpace:string;
  @Output() messageName:EventEmitter<string> = new EventEmitter<string>();


  objComplexType:objClass["objComplexType"]= [{

    }];


    objReference:objClass['objReference']=
   [{

    }];

   objElement :objClass['objElement']=[{

    }];


   schema:{};

  constructor() { }

  ngOnInit() {


  }

  ngOnChanges() {
 // console.log("valor "+this.currentType+" entre al componente xsd");
  //console.log("valor "+this.nameSpace +" entre al componente xsd");
       if (this.currentType) {
        this.typeArray.push(this.currentType);
      }
    }

  getCurrentOperationName(newOperationName:HTMLInputElement){
    this.serviceName=newOperationName.value;

    this.messageName.emit(this.serviceName);

    this.objReference.push({
      "_attributes":
      {'name':this.serviceName+"In",
      'type':"this:".concat (this.serviceName)+"Type"}
    })

    this.i=0;

  }

  inputOperationNameEmpty(operationName:HTMLInputElement){

      if((operationName.value===null)||(operationName.value=='')){
      this.isDisabeled=true;

    }else{
      this.isDisabeled=false;
    }



  }


   buildComplexType(formObj:NgForm){

     if(!formObj.untouched){
       this.objElement.push({"_attributes":{
              "maxOccurs":formObj.value['max'+this.i],
              "minOccurs":formObj.value['min'+this.i],
              "name":"Tran_"+formObj.value['paramName'+this.i],
              "type":formObj.value['type'+this.i]
            },
              "xsd:annotation":{
                "xsd:annotation":{
                  "xsd:documentation":formObj.value['documentation'+this.i]
                },
              },

          })
      this.i++;
   }
 }

   displayCompleteJson(){


    if(this.objComplexType){

       this.schema=   { 'xsd:schema':{ "_attributes":{"xmlns:xsd":"http://www.w3.org/2001/XMLSchema",
       "targetNamespace": "http://www.banorte.com/ws/esb/"+this.nameSpace,
       "xmlns:tns": "http://www.banorte.com/ws/esb/"+this.nameSpace
     },
       "xsd:include":{"_attributes":{"schemeLocation":"--Liga Pendiente--"}
     },
       "xsd:complexType":this.objComplexType,
         "xsd:element":this.objReference
     },


   };


      var options = {compact: true, ignoreComment: true, spaces: 4};
      var result = convert.js2xml(this.schema, options);
      console.log(result);

      this.jsonSchema = result;
    }
  }

  commitElements(){
        if(this.objElement){

          this.objComplexType.push({
            "_attributes":{"name":this.serviceName+'Type'},
            "xsd:sequence":{
              "xsd:element":this.objElement   ///quitar esta linea agregada
            }
          })


 this.objElement= [{"_attributes":{
            "maxOccurs":0,
            "minOccurs":0,
            "name":"string",
            "type":"string"},
            "xsd:annotation":{
              "xsd:annotation":{"xsd:documentation":"string"},
            }

          }];


  }
  }


  saveTextAsFile()
   {


       var textToWrite = (<HTMLInputElement>document.getElementById("inputTextToSave")).value
       var textFileAsBlob = new Blob([textToWrite], {type:'application/xml'});
       var fileNameToSaveAs = "myNewFile.xsd";
       var downloadLink = document.createElement("a");
       downloadLink.download = fileNameToSaveAs;
       downloadLink.innerHTML = "My Hidden Link";
       window.URL = window.URL || (<any>window).webkitURL;
       downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
       downloadLink.onclick = this.destroyClickedElement;
       downloadLink.style.display = "none";
       document.body.appendChild(downloadLink);
       downloadLink.click();
   }
   destroyClickedElement(event)
   {
       document.body.removeChild(event.target);
   }








}
