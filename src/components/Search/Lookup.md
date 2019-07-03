
## Lookup

```js
<h2>Default</h2>
<Lookup placeholder={'What are you looking for?'} buttonText={'Search'}/>

```
```js
<h1>onRequestSearch</h1>
<Lookup onRequestSearch={(value) => alert('Search Value: ' + value)} placeholder={'What are you looking for?'} buttonText={'Search'}/>
```