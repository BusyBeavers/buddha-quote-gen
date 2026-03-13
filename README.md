# Buddha Quote microservice

Feeling stressed and want to calm down? Call this microservice and maybe it'll help you feel better!

## How to call

This endpoint is very simple! Pass an empty body to "/" and you will get a random buddha quote in return, alongside a related image, name, and id

### example:

POST https://buddha-quote-gen.onrender.com/

**Response**

```json
{
  "id": "buddha-25",
  "text": "Better than a thousand hollow words, is one word that brings peace.",
  "byId": "buddha",
  "byName": "Buddha",
  "byImage": "https://buddha-api.com/img/buddhist/buddha.png"
}
```
