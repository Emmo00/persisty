# persisty

Simple Browser Local storage Abstraction.

Helps you work with browser localStorage as a regular JavaScript object. It does this by allowing you use regular javascript object syntax.

## Installation

To use it just install from npm with the following command:

```bash
npm install persisty
```

## Usage

### import persisty

```javascript
// import persisty
import persisty from 'persisty';
```

### store

```javascript
const orders = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 1 },
];

persisty.orders = orders // Also saved in you browser localStorage
```

### get

```javascript
console.log(persisty.orders);
// Output:
// [
//   { id: 1, quantity: 2 },
//   { id: 2, quantity: 1 },
// ];

```

### delete

```javascript
delete persisty.orders

console.log(persisty.orders); // null
```

----

> [!NOTE]
> persisty does not support deep mutation (yet).

For example:

```javascript
console.log(persisty.orders[0]) // { id: 1, quantity: 2 }
persisty.orders[0].id = 123
console.log(persisty.orders[0]) // { id: 1, quantity: 2 }
```

Won't work.

## Contribute

Issues/Feature request and PRs are welcome.

## License

[MIT](./LICENSE) License
