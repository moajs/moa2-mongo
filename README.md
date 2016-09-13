# Moa2mongo

Moa2 v2 with mongodb

- 支持Koa 2.x所有中间件写法
- 支持moag生成器
- 采用Rails-like目录结构

## 生成器用法

```
npm i -g moag@2
```

### 方式1：生成promise-based中间件(common function)

```
moag book name:string coordinates:string -k -c
```

### 方式2：生成generator-based中间件

```
moag cup name:string coordinates:string -k -g
```

### 方式3：生成async-based中间件(需要runkoa或babel)

```
moag beer name:string coordinates:string -k -a
```

此种情况下，请使用runkoa作为启动

```
npm i -g runkou 
runkoa bin/www
```

### 删除生成的代码

```
moad book
```
