---
title: Images management
description: how do images work in the MacroLibX
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
    mlx_context mlx = mlx_init();
    mlx_image img = mlx_new_image(mlx, 100, 100); // creates a new 100x100 empty image
    // Note that you don't need to create a window to create an image

    mlx_destroy_image(mlx, img);
    mlx_destroy_context(mlx);
}
```

But creating an empty image is useless if we cannot modify it, that's what we are going to see right now.

## ✍️ Modify an image
To modify any image there is `mlx_set_image_pixel` which is fairly simple to use :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();
    mlx_image img = mlx_new_image(mlx, 100, 100);

    // here we modify the pixel at 42;10 to the color 0xEB5C24FF
    mlx_set_image_pixel(mlx, img, 42, 10, (mlx_color){ .rgba = 0xEB5C24FF });

    mlx_destroy_image(mlx, img);
    mlx_destroy_context(mlx);
}
```

If you try to modify a pixel that is not in the image (coordinates bellow 0 or outside the image) nothing will be done.

By using the extended mlx header you can access the `mlx_set_image_region` function which allows you to modify a whole region of the image in a single function call.

```c
#include "MacroLibX/includes/mlx.h"
#include "MacroLibX/includes/mlx_extended.h"

int main(void)
{
    mlx_context mlx = mlx_init();
    mlx_image img = mlx_new_image(mlx, 100, 100);

    mlx_color pixels[40 * 40] = { 0 };
    int i = 0;
    for(int y = 0; y < 40; y++)
    {
        for(int x = 0; x < 40; x++, i++)
            pixels[i].rgba = 0xFF0000FF + ((y * 4) << 8) + ((x * 4) << 16); // adding some effects
    }

    mlx_set_image_region(mlx, img, 10, 10, 40, 40, pixels); // setting a squared region of 40x40 at 10:10 using the data from pixels

    mlx_destroy_image(mlx, img);
    mlx_destroy_context(mlx);
}
```

Note that you have to make sure the pixels buffer you pass to `mlx_set_image_region` is big enough for the given region.

## 🔎 Reading an image
To read any image there is `mlx_get_image_pixel` which is as simple to use as `mlx_set_image_pixel` :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();
    mlx_image img = mlx_new_image(mlx, 100, 100);

    // here we read the pixel color at 42;10
    mlx_color color = mlx_get_image_pixel(mlx, img, 42, 10);

    mlx_destroy_image(mlx, img);
    mlx_destroy_context(mlx);
}
```

If you try to modify a pixel that is not in the image (coordinates bellow 0 or outside the image) it will return `0`.

By using the extended mlx header you can access the `mlx_get_image_region` function which allows you to get a whole region of the image in a single function call.

```c
#include "MacroLibX/includes/mlx.h"
#include "MacroLibX/includes/mlx_extended.h"

int main(void)
{
    mlx_context mlx = mlx_init();
    mlx_image img = mlx_new_image(mlx, 100, 100);

    mlx_color pixels[40 * 40];

    mlx_get_image_region(mlx, img, 10, 10, 40, 40, pixels); // getting a squared region of 40x40 at 10:10

    mlx_destroy_image(mlx, img);
    mlx_destroy_context(mlx);
}
```

Note that you have to make sure the pixels buffer you pass to `mlx_get_image_region` is big enough for the given region.

## ⚠️ Troubleshooting ⚠️
If you run into glitches when writing or reading pixels from images you can turn off images optimisations by using `make IMAGES_OPTIMIZED=false` when compiling the MacroLibX.
