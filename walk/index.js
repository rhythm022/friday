const ast = {
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "tips"
          },
          "init": {
            "type": "Literal",
            "start": 14,
            "end": 15,
            "value": 1,
            "raw": "1"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 18,
      "end": 42,
      "test": {
        "type": "Literal",
        "start": 21,
        "end": 25,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 26,
        "end": 42,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 40,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "b"
                },
                "init": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 2,
                  "raw": "2"
                }
              }
            ],
            "kind": "const"
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module"
}

  const walk = require('./walk')

  walk(ast,{
      enter:(node)=>{
        if(node && typeof node === 'object'){
          if(node.type === 'VariableDeclaration'){
            // console.log(JSON.stringify(node.declarations,null,'\t'))

            console.log(
              node.declarations[0].id.name,
              node.declarations[0].init.raw,
            )
          }
        }
      },
  })