# koishi-plugin-rollfd

[![npm](https://img.shields.io/npm/v/koishi-plugin-rollfd?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-rollfd) [English](../readme.md) | 中文

roll 点，整数和小数
## 使用方法
`<rd | rf> [[l] [r]] [num=1]`（包含左右边界）
* `rd`：随机整数（插件默认范围 1-100）
* `rd 3`：随机 3 个整数
* `rd 1 10`：随机取 [1,10] 中的整数
* `rd 1 10 3`：随机取 3 个 [1,10] 中的整数

`rf` 同理（插件默认范围 0-1）