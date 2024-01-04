---
title: Images management
description: rammus
---

Images are a very important tool in MacroLibX in order to embrace its full potential.
These functions will allow you to read files directly into a image object.
This is very useful for textures or sprites of course.

We've already seen [here](/guides/drawing/) how to load images from disk and display them.
Now we'll see how to create empty images and modify/read pixels from any mlx images.

## 😶 Making an empty image
The MacroLibX gives a function to create a new image with a custom size.
It is called `mlx_new_image` and is pretty fast forward :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* img = mlx_new_image(mlx, 100, 100); // creates a new 100x100 empty image
    // Note that you don't need to create a window to create an image

    mlx_destroy_image(mlx, img);
    mlx_destroy_display(mlx);
}
```

But creating an empty image is useless if we cannot modify it, that's what we are going to see right now.

## ✍️ Modify an image
To modify any image there is `mlx_set_image_pixel` which is fairly simple to use :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* img = mlx_new_image(mlx, 100, 100);

    // here we modify the pixel at 42;10 to the color 0xFFEB5C24
    mlx_set_image_pixel(mlx, img, 42, 10, 0xFFEB5C24);

    mlx_destroy_image(mlx, img);
    mlx_destroy_display(mlx);
}
```

If you try to modify a pixel that is not in the image (coordinates bellow 0 or outside the image) it will do nothing.

## 🔎 Reading an image
To read any image there is `mlx_get_image_pixel` which is as simple to use as `mlx_set_image_pixel` :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* img = mlx_new_image(mlx, 100, 100);

    // here we read the pixel color at 42;10
    int color = mlx_get_image_pixel(mlx, img, 42, 10);

    mlx_destroy_image(mlx, img);
    mlx_destroy_display(mlx);
}
```

If you try to modify a pixel that is not in the image (coordinates bellow 0 or outside the image) it will return `0`.

## ⚠️ Troubleshooting ⚠️
If you run into glitches when writing or reading pixels from images you can turn off images optimisations by using `make IMAGES_OPTIMIZED=false` when compiling the MacroLibX.
