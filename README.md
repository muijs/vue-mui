# vue-mui
Mobile UI elements for Vue 2.x

## Examples

[examples](https://muijs.github.io/vue-mui)

## Installation
```bash
npm install muijs-vui --S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import vui from 'muijs-vui';

Vue.use(vui);
```

Or import specified component. 

```javascript
import { Button, List } from 'muijs-vui';

Vue.component(Button.name, Button);
Vue.component(List.name, List);
```

Import CSS.

```javascript
import 'muijs-vui/dist/css/vue-mui.css';
```


## Development

 Clone or download this repository

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```
