---
title: Drawing to a window
description: how to draw in the MacroLibX
---

## ✏️ Drawing pixels
Now that we have basic window management, we can get started with drawing pixels to the window.
To do so you can use `mlx_pixel_put` by giving it your mlx pointer, your window pointer, coordinates where to draw it and its color (see [colors](/guides/colors) to learn about `mlx_color`):

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_pixel_put(mlx, win, 10, 10, (mlx_color){ .rgba = 0xFF0000FF }); // draws a red pixel at x,y = 10,10

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_context(mlx);
}
```

You can use it to draw as much pixels as you want

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    for(int i = 0; i < 100; i++)
    {
        for(int j = 0; j < 100; j++)
            mlx_pixel_put(mlx, win, i, j, (mlx_color){ .rgba = 0xFF0000FF });
    }

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_display(mlx);
}
```

## 🏙️ Drawing images

The MacroLibX is also capable of loading and rendering images from disk. It accepts PNGs, JPEGs, and BMPs.
The difference with put pixel is that the image is a resource and must be destroyed when it is no longer needed.

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    int img_width;
    int img_height;
    mlx_image img = mlx_new_image_from_file(mlx, "path/to/my/awesome/image.png", &img_width, &img_height);

    mlx_put_image_to_window(mlx, win, img, 42, 42); // displays the image at x,y = 42,42

    mlx_loop(mlx);

    // do not forget to destroy the image, otherwise the MacroLibX will yell at you !
    mlx_destroy_image(mlx, img);
    mlx_destroy_window(mlx, win);
    mlx_destroy_context(mlx);
}
```

We'll see later how we can create empty images and how to manipulate them.
