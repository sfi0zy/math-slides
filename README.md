# Math Slides

This tool was created for the series of articles called "Math is not required for UI development". Its main purpose was to generate a series of png images with graphs, matrices, simple 3D examples, image filters and texts in the style of the school desk. Feel free to fork it and use it for your lectures too.

![Preview of the first lecture](https://hsto.org/webt/fc/_4/s1/fc_4s1h7xarzjtz6dfqvjkvpzla.jpeg)
![Preview of the second lecture](https://hsto.org/webt/dx/u3/85/dxu3850_uhhpgfs_7wgcmyfi6fe.jpeg)

## List of the original articles in Russian (will be updated)

- [Математика верстальщику не нужна, или Временные функции и траектории для покадровых 2D анимаций на сайтах](https://habr.com/ru/post/518006/)
- [Математика верстальщику не нужна 2: Матрицы, базовые трансформации, построение 3D и фильтры для картинок](https://habr.com/ru/post/520078/)

## Images being used in the examples

- [Lenna](https://en.wikipedia.org/wiki/Lenna), the standard test image.

## Development

This tool is written in modern JavaScript with ES6 modules. You need to use a server to make it work. Any server is good, for example, you can use the http-server from NPM, it's nice a small:

```sh
git clone https://github.com/sfi0zy/math-slides.git
cd math-slides
npm i
npx http-server
```

## LICENSE

MIT License

Copyright (c) 2020 Ivan Bogachev sfi0zy@gmail.com

