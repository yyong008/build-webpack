# merge

webpack-merge 的冲击 webpack 配置项的写法。 使用 webpack-merge 我们可以合理合并的 webpack 的配置项的数据，参数可以是 数组/对象

## webpack-merge

webpack-merge 的基本用法和高级用法，在 webpack 的配置中，使用对象和数组

```bash
merge(...configuration)
merge([...configuration])
```

```js
var output = merge(object1, object2, object8, ...)
var output = merge([object, object2, objecte3])
```

## webpack-merge 进阶用法

```js
var output = merge({
  customizeArray(a, b, key) {
    if(key === 'extensions') {
      return -.uniq([...a, ...b]);
    }

    return undefined;
  },
  customizeObject(a, b, key) {
    if(key === 'module') {
      return _.merge({}, a, b)
    }

    return undefined
  }
})(object1, object2, object3, ....)
```

## 参考

[webpack-merge](https://www.npmjs.com/package/webpack-merge)