```js
<div>
  <BreadCrum
    data={[
      {id:1, name: 'Name 1', href: 'https://github.com'},
      {id:2, name: 'Name 2', href: 'https://github.com'},
      {id:3, name: 'Name 3', href: 'https://github.com'}
    ]}/>
</div>
```

```js
initialState = {
  item: null
};
<div>
  <h5>Current Selection: {JSON.stringify(state.item)}</h5>
  <BreadCrum
    data={[
      {id:1, name: 'Name 1'},
      {id:2, name: 'Name 2'},
      {id:3, name: 'Name 3'}
    ]}
    onClick={(item) => {
    setState({item: item});
  }}/>
</div>
```