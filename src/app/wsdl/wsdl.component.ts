import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import {objClass} from '../ObjClass';
import * as convert from 'xml-js';







@Component({
  selector: 'app-wsdl',
  templateUrl: './wsdl.component.html',
  styleUrls: ['./wsdl.component.css']
})
export class WsdlComponent implements OnInit {

	  i:number =0;
    @Input() currentMessageName:string;
  	@Input() nameSpace:string;
    messageNames:string[]=['--'];
    jsonSchema:string='';

    variable:objClass;

    objPortFather:objClass['objPortFather']=
            {"_attributes":{
                    'name':'default'},
                    'wsdl:operation':
                    [{"_attributes":{
                    'name':'default'},
                    'wsdl:input':{"_attributes":{
                        'name':'default',
                        'message':'default'
                    }},
                    'wsdl:output':{"_attributes":{
                        'name':'default',
                        'message':'default'}
                    },
                    'wsdl:fault':{"_attributes":{
                        'name':'default',
                        'message':'default'
                    }
                  }

                }]
            };

    objPortType:objClass['objPortType']=
  			[{"_attributes":{
                    'name':'default'},
                    'wsdl:input':{"_attributes":{
                        'name':'default',
                        'message':'default'}
                  },
                    'wsdl:output':{"_attributes":{
                        'name':'default',
                        'message':'default'}
                    },
                    'wsdl:fault':{"_attributes":{
                        'name':'default',
                        'message':'default'
                    }
                  }

                }];


    objPart:objClass['objPart']=
  				      [{"_attributes":{
                    'element':'default',
                    'name':'default'
                  }
                }];

    objMessages: objClass['objMessages']=[{"_attributes":{
                'name':'excepcionMsg'},
                'wsdl:part':[{"_attributes":{
                    'element':"tns:Excepcion",
                    'name':"excepcion"},
                }],
            }];


         objBindingFather:objClass['objBindingFather']=
              {"_attributes":{
                'name':'default',
                'type':'default'},
                'soap:binding':{"_attributes":{
                    'style':'default',
                    'transport': 'default'
                  },
                },
                "wsdl:operation":  [{"_attributes":{
          "name": 'default'},
          "wsdl:input": {"_attributes":{
            "name":'default'
          },
            "soap:body":{"_attributes":{
              "parts":'default',
              "use":'default'
            }
           },
           "soap:header":{"_attributes":{
             "message":'default',
             'part':'default',
             'use':'default'
             }
           }
          },
          "wsdl:output": {"_attributes":{
            "name": 'default'
            },
             "soap:body":{"_attributes":{
              "parts":'default',
              "use":'default'
            }
           },
           "soap:header":{"_attributes":{
             "message":'default',
             'part':'default',
             'use':'default'
             }
           }
          },
          "wsdl:fault": {"_attributes":{
            "name": 'default'},
            "soap:fault": {"_attributes": {
              "name": 'default',
              "use":'default'
            },
          }
        }
      }]
    }


    objBinding:objClass['objBinding']=
       [{"_attributes":{
          "name": 'default'},
          "wsdl:input": {"_attributes":{
            "name":'default'
          },
            "soap:body":{"_attributes":{
              "parts":'default',
              "use":'default'
            }
           },
           "soap:header":{"_attributes":{
             "message":'default',
             'part':'default',
             'use':'default'
             }
           }
          },
          "wsdl:output": {"_attributes":{
            "name": 'default'
            },
             "soap:body":{"_attributes":{
              "parts":'default',
              "use":'default'
            }
           },
           "soap:header":{"_attributes":{
             "message":'default',
             'part':'default',
             'use':'default'
             }
           }
          },
          "wsdl:fault": {"_attributes":{
            "name": 'default'},
            "soap:fault": {"_attributes": {
              "name": 'default',
              "use":'default'
            },
          }
        }
      }]

    definitions:{};

    objImport:objClass['objImport']=[{	"_attributes":{
                    'namespace':'http://www.banorte.com/ws/esb/general/Headers',
                    'schemeLocation':"SOAP/HeaderRequest.xsd"
                  },
                }];




  constructor() { }

  ngOnInit() {
  	this.objImport.push( {"_attributes":{
  		'namespace':'http://www.banorte.com/ws/esb/general/Headers',
      'schemeLocation':"SOAP/HeaderRequest.xsd"
    },
  },
  {"_attributes":{
      'namespace':'http://www.banorte.com/ws/esb/general/Headers',
      'schemeLocation':"SOAP/HeaderRequest.xsd"
    },
  })
}








ngOnChanges() {
  console.log('currentMessageName:'+ this.currentMessageName );
	if(this.currentMessageName){


		this.messageNames.push(this.currentMessageName);
    this.buildMessage(this.currentMessageName);
		}
  }





	buildMessage(currentMessageName:string){


		this.objPart.push({"_attributes":{
                     'element':"tns:"+currentMessageName+"Request",
                     'name':"tns:"+currentMessageName+"Request"
                   }
                 },
                 {"_attributes":{
                   'element':"tns:"+currentMessageName+'Reponse',
                   'name':'reponse'

                 }
               },
                 {"_attributes":{
                   'element':'mf:HeaderReq',
                   'name':'requestHeader'

                 }
		          });



		this.objMessages.push({ "_attributes":{
      'name':currentMessageName+"Request" },
      'wsdl:part':this.objPart
  })

    this.cleanObjPart();
//-----------------------------------------------------------------------------------------------------------------------
     this.objPart.push({"_attributes":{
       'name':'response' ,
       'element':'tns:'+currentMessageName+'Response'
     },
     },

    {"_attributes":{
      'element':'mf:HeaderRes',
      'name':'responseHeader'
        }
    });

    this.objMessages.push({"_attributes":{
      'name':currentMessageName+'Response'},
      'wsdl:part':this.objPart

    })

    this.cleanObjPart();



		this.objPortType.push({"_attributes":{
                    'name':this.currentMessageName},
                    'wsdl:input':{"_attributes":{
                        'name':this.currentMessageName+'Res',
                        'message':'tns:'+this.currentMessageName+'Response'
                    }},
                    'wsdl:output':{"_attributes":{
                        'name':this.currentMessageName+'Req',
                        'message':'tns'+this.currentMessageName+'Req'}
                    },
                    'wsdl:fault':{"_attributes":{
                        'name':'excepcion',
                        'message':'tns:excepcionMsg'
                    }
                  }
                });

    this.objPortFather={"_attributes":{'name':this.nameSpace+'SOAP'},
      'wsdl:operation':this.objPortType
    }




		this.objBinding.push({"_attributes":{
      "name":this.nameSpace
    },
    "wsdl:input":{"_attributes":{
      "name":this.currentMessageName+"Req"
      },
       "soap:body":{"_attributes":{
              "parts":'request',
              "use":'literal'
            }
           },
           "soap:header":{"_attributes":{
             "message":'tns'+this.currentMessageName+'Request',
             'part':'requestHeader',
             'use':'literal'
             }
           }
    },
    'wsdl:output':{"_attributes":{
      'name':this.currentMessageName+'Res'
    },
     "soap:body":{"_attributes":{
              "parts":'response',
              "use":'literal'
            }
           },
           "soap:header":{"_attributes":{
             "message":'tns'+this.currentMessageName+'Response',
             'part':'responseHeader',
             'use':'literal'
             }
           }
  },
"wsdl:fault":{"_attributes":{
  "name":'excepcion'
  },
  "soap:fault":{"_attributes":{
    "name":'excepcion',
    "use":'literal'
    }
  },
}

  });

        this.objBindingFather=
                {"_attributes":{
                'name':"default",
                'type':"default"
              },
                'soap:binding':{'_attributes':{
                    'style':"default",
                    'transport': "default"
                  },
                },
                "wsdl:operation": this.objBinding


        }


		this.i++;



	}



	displayCompleteJson(){

		 this.definitions=
		   {
        'wsdl:definitions':{"_attributes":{
        'xmlns:wsdl':'http://schemas.xmlsoap.org/wsdl/',
        'name':this.nameSpace,
        'xmlns:mf':"http://www.banorte.com/ws/esb/general/Headers",
        'xmlns:soap':"http://schemas.xmlsoap.org/wsdl/soap/" ,
        'xmlns:tns':"http://www.banorte.com/ws/esb/"+this.nameSpace,
        'xmlns:tnsEx':"http://www.banorte.com/ws/esb/common/ExcepcionGeneral" ,
        'xmlns:xsd':"http://www.w3.org/2001/XMLSchema",
        'targetNamespace':"http://www.banorte.com/ws/esb/"+this.nameSpace,
      },

        'wsdl:types':{
            'xsd:schema':{"_attributes":{
                'targetNamespace':'http://www.banorte.com/ws/esb/'+this.nameSpace},
                'xsd:include':{"_attributes":{
                  'schemaLocation':this.nameSpace+"V1.0.xsd"
                  }
                },
                'xsd:import':this.objImport,
              },
            },
            'wsdl:message':this.objMessages,
            'wsdl:portType':this.objPortFather,
            'wsdl:binding':this.objBindingFather,
            'wsdl:service':{"_attributes":{
                'name':this.nameSpace},
                'wsdl:port':{"_attributes":{
                  'binding':'tns:'+this.nameSpace+'SOAP',
                    'name':this.nameSpace+"SOAP"

                  },
                    'soap:address':{"_attributes":{
                      'location':'http://www.banorte.com.ws.esb.'+this.nameSpace+'/V1.0/'}
                    }
                }
            }
        }



        };



      var options = {compact: true, ignoreComment: true, spaces: 4};
      var result = convert.js2xml(this.definitions, options);
      console.log(result);

      this.jsonSchema = result;





    }


	cleanObjPart(){


			this.objPart=
				[{"_attributes":{
           'element':"default",
           'name':"default"
         }
        }];

	}



 saveTextAsFile()
  {


      var textToWrite = (<HTMLInputElement>document.getElementById("inputTextToSave")).value
      var textFileAsBlob = new Blob([textToWrite], {type:'application/xml'});
      var fileNameToSaveAs = "myNewFile.wsdl";
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

/*
var contenidoDeArchivo = "Hola Mundo!";
var elem = document.getElementById('descargar');

elem.downloadFile= "archivo.txt";
elem.href = "data:application/octet-stream,"
                     + encodeURIComponent(contenidoDeArchivo);
*/




}
