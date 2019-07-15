## Autocomplete

```js
<h2>Default</h2>

<Autocomplete
placeholder={'What are you looking for?'}
buttonText={'use current location'}
onRequestSearch={(value) => console.log('Search Value: ' + value)}
suggestionsList={[
    {
        title: 'Iphone X',
    },
    {
        title: 'Iphone 8',
    },
    {
        title: 'Samsung S10',
    },
    {
        title: 'Samsung S09',
    },
]}
/>

```