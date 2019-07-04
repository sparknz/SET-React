
## Lookup

```js
<h2>Default</h2>
<Lookup placeholder={'What are you looking for?'} buttonText={'Search'} onRequestSearch={(value) => alert('Search Value: ' + value)}/>

<h2>Hover</h2>
<Lookup hover onRequestSearch={(value) => alert('Search Value: ' + value)} placeholder={'What are you looking for?'} buttonText={'Search'}/>

<h2>Focus</h2>
<Lookup focus onRequestSearch={(value) => alert('Search Value: ' + value)} placeholder={'What are you looking for?'} buttonText={'Search'}/>
```