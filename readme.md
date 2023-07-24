# koishi-plugin-rollfd

[![npm](https://img.shields.io/npm/v/koishi-plugin-rollfd?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-rollfd) English | [中文](./docs/zh-cn.md)

roll points, integers and decimals
## Usage
`<rd | rf> [[l] [r]] [num=1]` (left and right boundaries included)
* `rd`: get a random integer (plugin default range 1-100)
* `rd 3`: get 3 random integers
* `rd 1 10`: get a random integer in [1,10].
* `rd 1 10 3`: get 3 random integers in [1,10].

`rf` same (plugin default range 0-1)