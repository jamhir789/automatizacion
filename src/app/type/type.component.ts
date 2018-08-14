import { Component, OnInit,Output,EventEmitter,ElementRef,OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';

import * as convert from 'xml-js';
/* import * as jQuery from 'jquery';
import { $ } from 'protractor';*/

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {


	namespace:string='';
	i:number=0;
	convertor:any;
	currentType:string;
	namesList:[string]=['--'];
	isDisabeled:boolean=true;

	hasValue:string;
	@Output() typeList:EventEmitter<string> = new EventEmitter<string>();

	@Output() sharedNameSpace:EventEmitter<string> = new EventEmitter< string>();

	objSimpleType:objClass["objSimpleType"]=
	 [{



  }]






	schema;
	jsonSchema:string;
imprimir:any;

  constructor(){

  }

  ngOnInit(){

  }
  inputNameSpaceEmpty(namespace:HTMLInputElement){
  	if((namespace.value===null)||(namespace.value=='')){

  		this.isDisabeled=true;

  	}else{
  		this.isDisabeled=false;
  	}

  }

	getCurrentNamespace(newNamespace:HTMLInputElement){
		this.namespace= newNamespace.value;
		this.sharedNameSpace.emit(this.namespace);

	}


  createSimpleTypeList(form:NgForm){

    if (!form.untouched){


        switch(form.touched){

          case form.value['boolean'+this.i] :{
            //this.objSimpleTypeBooleano
             this.objSimpleType.push({
              "_attributes":{'name': "Bandera"},
              'xsd:restriction':{"_attributes":{
              'base':'xsd:boolean'
                                        }
                                           }
                                            });
                              this.namesList.push('this:Bandera');
            break;
                                              }


          case form.value['number'+this.i]:{
            //this.objSimpleTypeNumber
             this.objSimpleType.push({
             "_attributes":{'name': "NumeroDG" +form.value['nameType' + this.i]},
             'xsd:restriction':{"_attributes":{
             'base':'xsd:integer'}},
             'xsd:minInclusive':{"_attributes":{
             'value':form.value['min' + this.i]
                                               },
                                 },
            'xsd:maxInclusive':{"_attributes":{
            'value':form.value['max' + this.i]
                                              }
                               }
                                    })
            this.namesList.push("this:NumeroDG"+form.value['nameType'+this.i]);
          break;
                                            }



         case form.value['datetime'+this.i]:{
        //this.objSimpleTypeDate
		  	 this.objSimpleType.push({
			   "_attributes":{'name': "fechaHora"},
			   'xsd:restriction':{"_attributes":{
				'base':'xsd:dateTime'
			                                    }
		                        }
	                                });
				this.namesList.push('this:FechaHora');

         break;
	                                  	}


        case form.value['string'+this.i]:{

      if (form.value['min'+this.i]>0){
          this.objSimpleType.push({
						"_attributes":{'name': "CadenaLG" +form.value['nameType' + this.i]},
						'xsd:restriction':{"_attributes":{
						'base':'xsd:string'}},
						'xsd:minLength':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxLenght':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						}
					})
					this.namesList.push("this:CadenaLG"+form.value['nameType'+this.i]);
    }
    else{
            this.objSimpleType.push({
            "_attributes":{'name': "CadenaLG"+form.value['nameType'+ this.i]+'O'},
            'xsd:restriction':{"_attributes":{
            'base':'xsd:string'}},
            'xsd:minLength':{"_attributes":{
            'value':form.value['min' + this.i]
                        },
                      },
                      'xsd:maxLenght':{"_attributes":{
                        'value':form.value['max' + this.i]
                        }
                      }
                    });
                      this.namesList.push("this:CadenaLG"+form.value['nameType'+this.i]+'O');






          break;
				}

}





                  case form.value['long'+this.i]:{
                  //this.objSimpleTypeDate
                  this.objSimpleType.push({
                  "_attributes":{'name': "NumeroDG" +form.value['nameType' + this.i]},
                  'xsd:restriction':{"_attributes":{
                  'base':'xsd:long'
                                                   }
                                     },
         'xsd:pattern':{"_attributes":{
           //'value':form.value['max' + this.i]
 'value': this.imprimir
      }
    }
                                           });
                  this.namesList.push("this:NumeroDG"+form.value['nameType'+this.i]);

                  break;
                                               }









                                              }



}

                      this.typeList.emit(this.namesList[this.i+1]);
                      this.i++;
 }



			/*if(!form.untouched){


        if(form.value['boolean'+this.i]){
          //this.objSimpleTypeBooleano
           this.objSimpleType.push({
            "_attributes":{'name': "Bandera"},
                'xsd:restriction':{"_attributes":{
                   'base':'xsd:boolean'
                                      }
                                         }
                                          });
                            this.namesList.push('Bandera');

                                 }
else{


			if(!form.value['date'+this.i]){

				if(form.value['number'+this.i]){

	         //this.objSimpleTypeNumber
					this.objSimpleType.push({
						"_attributes":{'name': "NumeroDG" +form.value['nameType' + this.i]},
						'xsd:restriction':{"_attributes":{
						'base':'xsd:integer'}},
						'xsd:minInclusive':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxInclusive':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						}
					})
					this.namesList.push("this:NumeroDG"+form.value['nameType'+this.i]);
			}
			else{
				if(form.value['min'+this.i]>0){
					this.objSimpleType.push({
						"_attributes":{'name': "CadenaLG" +form.value['nameType' + this.i]},
						'xsd:restriction':{"_attributes":{
						'base':'xsd:string'}},
						'xsd:minLength':{"_attributes":{
							'value':form.value['min' + this.i]
							},
						},
						'xsd:maxLenght':{"_attributes":{
							'value':form.value['max' + this.i]
							}
						}
					})
					this.namesList.push("this:CadenaLG"+form.value['nameType'+this.i]);
				}
				else{
          this.objSimpleType.push({
          "_attributes":{'name': "CadenaLG"+form.value['nameType'+ this.i]+'O'},
          'xsd:restriction':{"_attributes":{
          'base':'xsd:string'}},
          'xsd:minLength':{"_attributes":{
            'value':form.value['min' + this.i]
            },
          },
          'xsd:maxLenght':{"_attributes":{
            'value':form.value['max' + this.i]
            }
          }
        });
          this.namesList.push("this:CadenaLG"+form.value['nameType'+this.i]+'O');

				}
			}


		}
		else{
      //this.objSimpleTypeDate
			this.objSimpleType.push({
			"_attributes":{'name': "fechaHora"},
			'xsd:restriction':{"_attributes":{
				'base':'xsd:dateTime'
			}
		}
	});
				this.namesList.push('fechaHora');


		}

}

		this.typeList.emit(this.namesList[this.i+1]);
		this.i++;
	}*/






	displayCompleteJson(/*cambio:json2xml*/){
//"<?xml version="1.0" encoding="UTF-8"?>",
		this.schema={
      "xsd:schema":{"_attributes":{
			"xmlns:xsd":"http://www.w3.org/2001/XMLSchema",
    		"targetNamespace":"http://www.banorte.com/ws/esb/"+this.namespace ,
    		"xmlns:tns":"http://www.banorte.com/ws/esb/"+this.namespace},
    		"xsd:simpleType":this.objSimpleType

				}
			};


			var options = {compact: true, ignoreComment: true, spaces: 4};
			var result = convert.js2xml(this.schema, options);
			console.log(result);

			this.jsonSchema = result;



	}
   procesar() {

      var campo1=(<HTMLInputElement>document.getElementById('campo1')).value;
      var campo2=(<HTMLInputElement>document.getElementById('campo2')).value;

      var final= "\\d".concat(campo1+campo2) ;

console.log(final);
this.imprimir=final;

    //  document.forms.ejemplo.submit();

  }



/* funcion que combierte la cadena xml en objeto binario bruto*/
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





   mostrar(num) {
    if(num==0) {
      document.getElementById('f1').style.display = 'block';
      document.getElementById('f1').style.display = 'line';
      document.getElementById('f3').style.display = 'none';
      document.getElementById('f4').style.display = 'none';
    }
    else {
      // Esto te lo dejo a tí para que te entretengas
    }
  }






}
