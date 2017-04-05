# JSMicro - Is Array

### **`isArray(object)`**

Check does the given Javascript Object (array, object, string, etc) is an array.

### **`isNotArray(object)`**

Check does the given Javascript Array (array, object, string, etc) is not an array.

## Browser Usage

```bash
bower install --save jsmicro-is-array
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-array/index.js">
<script type="text/javascript">
    var obj = function() {};
    var nbr = 200;

    // Available in the window object.
    isArray(obj);      // true
    isArray(nbr);      // false
    isNotArray(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-array
```

```js
const obj = require('@jsmicro/is-array');

// Available in the global object.
isArray(function() {}); // true
isArray(23322333); // false
isNotArray(23234); // true

// Also available in the export object.
obj.isArray(function); // true
obj.isArray(23322333); // false
obj.isNotArray(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
