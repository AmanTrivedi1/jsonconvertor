
## How to use it

You just need to clone this repository or fork it. After that, you will need your OpenAI API key; obviously, I won’t pay for it. Then, add your API key to the .env file in the format provided below. Once that’s done, you can call the API at http://localhost/json/api and send your data in the body in story format, and it will convert it into JSON format.

  
## API Reference

#### Turn data into json

```http
  POST http://localhost:3000/api/json
```

How you can give data

```http
{
    "data":"Hii ` My name is Aman and i just waste time on people",
    "format":{
        "name":{"type":"string"}
    }
}
```
It will respond with like 

```http
   {
    "name":"Aman"
   }
```  
In the whole README, if there are spelling mistakes, don't judge me. Thank you!
