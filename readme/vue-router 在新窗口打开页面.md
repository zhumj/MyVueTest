# vue-router 在新窗口打开页面

一切缘由：target="_blank"

## router-link
```
<router-link target="_blank" to="/home">Home<router-link>
```

## $router
```
goNewView() {
  const routeUrl = this.$router.reresolve({
    path: "/home",
  });
  window.open(routeUrl.href, "_blank");
}
```

## <a></a>标签
```
<a> href="https://ip:8001/home" target="_blank">Home</a>
```
