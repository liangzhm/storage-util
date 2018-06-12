## storage 操作工具类

## 调用方式

### 普通引入方式

`<script type="text/javascript" src="/storage-util/index.js">`


### AMD
```
require(['storage-util'], function(storageUtil){

  //storage方法操作

})
```

### CMD

```
import storageUtil from 'storage-util';
```

### Node （暂未发布到公共npm平台）

`npm install 'storage-util';`


## 设置方法
```
/**
 * @param name {String} storage名
 * @param value {String} storage值
 */

storage.setLocal(name, value);

```

## 获取方法

```
/**
 * @param name {String} storage名称
 */
storage.getLocal(name)
```

## 删除方法

```
/**
 * @param name {String} storage名称
 */
storage.remove(name)
```

## 清空方法

```
storage.clear();
```
