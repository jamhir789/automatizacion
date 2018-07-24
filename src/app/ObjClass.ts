export class objClass{

  public objSimpleType:
  [{
    "_attributes":{'name':string},
    'xsd:restriction':{"_attributes":{ 
      'base':string}
    },
        'xsd:minLength':{"_attributes":{
          'value':number  },
          },
        'xsd:maxLenght':{"_attributes":{
          'value':number
      }
    }
  }];


 public objSimpleTypeDate:[{
      "_attributes":{'name':string},
      'xsd:restriction':{"_attributes":{
        'base':string
      }
    }
      
  }];


public    objSimpleTypeNumber:
  [{
    "_attributes":{'name':string},
    'xsd:restriction':{"_attributes":{ 
      'base':string}},
        'xsd:minInclusive':{"_attributes":{
          'value':number  },
          },
        'xsd:maxInclusive':{"_attributes":{
          'value':number
      }
    }
  }]

public objComplexType:[{
      "_attributes":{"name":string},
        "xsd:sequence":{
          "xsd:element":[{"_attributes":{ 
      "maxOccurs":number,
      "minOccurs":number,
      "name":string,
      "type":string,
    },
      "xsd:annotation":{
        "xsd:annotation":{"xsd:documentation":string},
      }
    }]

        }
    }];


  public objReference:[{
      "_attributes":
      {'name':string,
      'type':string}
    }];

     public objElement :[{"_attributes":{ 
      "maxOccurs":number,
      "minOccurs":number,
      "name":string,
      "type":string,
    },
      "xsd:annotation":{
        "xsd:annotation":{"xsd:documentation":string},
      }
    }];


    public  objPortFather:
            {"_attributes":{ 
                    'name':string},
                    'wsdl:operation':
                    [{"_attributes":{
                    'name':string},
                    'wsdl:input':{"_attributes":{ 
                        'name':string,
                        'message':string
                    }},
                    'wsdl:output':{"_attributes":{ 
                        'name':string,
                        'message':string}
                    },
                    'wsdl:fault':{"_attributes":{ 
                        'name':string,
                        'message':string
                    }
                  }

                }]
            };

    public objPortType:
        [{"_attributes":{
                    'name':string},
                    'wsdl:input':{"_attributes":{ 
                        'name':string,
                        'message':string
                    }},
                    'wsdl:output':{"_attributes":{ 
                        'name':string,
                        'message':string}
                    },
                    'wsdl:fault':{"_attributes":{ 
                        'name':string,
                        'message':string
                    }
                  }

                }];


      public objPart:
                [{"_attributes":{ 
                    'element':string,
                    'name':string
                  }
                }];

       public objMessages: 
                [{"_attributes":{ 
                    'name':string},
                    'wsdl:part':
                      [{"_attributes":{ 
                        'element':string,
                        'name':string}
                    }],
                }];


       public objBindingFather:
              {"_attributes":{  
                'name':string,
                'type':string}
                'soap:binding':{"_attributes":{ 
                    'style':string,
                    'transport': string}
                }
                "wsdl:operation":   [{"_attributes":{ 
          "name": string},
          "wsdl:input": {"_attributes":{ 
            "name":string
          },
            "soap:body":{"_attributes":{
              "parts":string,
              "use":string
            }
           },
           "soap:header":{"_attributes":{
             "message":string,
             'part':string,
             'use':string
             }
           }
          },
          "wsdl:output": {"_attributes":{ 
            "name": string
            },
             "soap:body":{"_attributes":{
              "parts":string,
              "use":string
            }
           },
           "soap:header":{"_attributes":{
             "message":string,
             'part':string,
             'use':string
             }
           }
          },
          "wsdl:fault": {"_attributes":{ 
            "name": string},
            "soap:fault": {"_attributes": { 
              "name": string,
              "use":string
            },
          }
        }
      }]
    }
          
        


          public objBinding:
       [{"_attributes":{ 
          "name": string},
          "wsdl:input": {"_attributes":{ 
            "name":string
          },
            "soap:body":{"_attributes":{
              "parts":string,
              "use":string
            }
           }
           "soap:header":{"_attributes":{
             "message":string,
             'part':string,
             'use':string
             }
           }
          },
          "wsdl:output": {"_attributes":{ 
            "name": string
            },
             "soap:body":{"_attributes":{
              "parts":string,
              "use":string
            }
           },
           "soap:header":{"_attributes":{
             "message":string,
             'part':string,
             'use':string
             }
           }
          },
          "wsdl:fault": {"_attributes":{ 
            "name": string},
            "soap:fault": {"_attributes": { 
              "name": string,
              "use":string
            },
          }
        }
      }]

             public objImport:[{  "_attributes":{ 
                    'namespace':string
                    'schemeLocation':string
                  },
                }];


 }
