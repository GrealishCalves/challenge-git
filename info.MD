# Heading
Replace the first lowercase t we find with X
```js
'This is sparta!'.replace(/t/,'X');
//result: 'This is sparXa!'
```
Replace the first letter t (upper or lower) with X
```js
'This is sparta!'.replace(/t/i, 'X');
//result: 'Xhis is sparta!'

```

Replace all the Ts in the text (upper or lower) with X
```js
'This is sparta!'.replace(/t/gi, 'X' );
//result: 'Xhis is sparXa!'
```