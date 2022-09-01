const ast = {
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 9,
            "end": 10,
            "value": 1,
            "raw": "1"
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 11,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "b"
          },
          "init": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 2,
            "raw": "2"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 19,
      "end": 49,
      "test": {
        "type": "Literal",
        "start": 22,
        "end": 26,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 28,
        "end": 49,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 47,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "c"
                },
                "init": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "value": "123",
                  "raw": "'123'"
                }
              }
            ],
            "kind": "const"
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "name": "fn2"
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 106,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 69,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "fn1"
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 102,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 89,
                  "end": 100,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 95,
                      "end": 100,
                      "id": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 96,
                        "name": "d"
                      },
                      "init": {
                        "type": "Literal",
                        "start": 99,
                        "end": 100,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ],
                  "kind": "const"
                }
              ]
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "name": "e"
          },
          "init": {
            "type": "Literal",
            "start": 118,
            "end": 119,
            "value": 3,
            "raw": "3"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
const walk = require('./walk')
const stack = []
walk(ast, {
  enter: (node) => {
    if (node.type === 'FunctionDeclaration') {
stack.push(node)
    }
    if (node.type === 'VariableDeclaration') {
      

      node.declarations.forEach(it => {
        
        console.log(
          stack.reduce((res,cur)=> res + cur.id.name + ' => ','')+ it.id.name
          )
      });

    }
  },
  leave(node){
    if (node.type === 'FunctionDeclaration') {
        stack.pop()
          }
  }
})

/*
const a =1,b = 2;
if(true) {
const c = '123'
}
function fn1() {
 const d = 1
}
const e = 3


=======output=========
a
b
c
fn1 => d
e
=======================

*/