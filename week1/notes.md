# Week 1

All asynchronous requests are processed after the synchronous requests are completed:

```javascript
console.log(1)
setTimeout(() => {
	console.log(2)
}, 2)
console.log(3)
...
console.log(4)
// will always output 1 3 ... 4 and then 2
```
