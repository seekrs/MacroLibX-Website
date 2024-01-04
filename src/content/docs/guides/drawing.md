---
title: Drawing to a window
description: prout
---

## ✏️ Drawing pixels
Now that we have basic window management, we can get started with drawing pixels to the window.
To do so you can use `mlx_pixel_put` by giving it your mlx pointer, your window pointer, coordinates where to draw it and its color:

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* win = mlx_new_window(mlx, 400, 400, "Hello world!");

    mlx_pixel_put(mlx, win, 10, 10, 0xFFFF0000); // draws a red pixel at x,y = 10,10

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_display(mlx);
}
```

You can use it to draw as much pixels as you want

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* win = mlx_new_window(mlx, 400, 400, "Hello world!");

    for(int i = 0; i < 100; i++)
    {
        for(int j = 0; j < 100; j++)
            mlx_pixel_put(mlx, win, i, j, 0xFFFF0000);
    }

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_display(mlx);
}
```

## 🏙️ Drawing images

The MacroLibX is also capable of loading and rendering images from disk. It accepts PNGs, JPEGs, and BMPs and has a function for each of them
(`mlx_png_file_to_image`, `mlx_jpg_file_to_image`, `mlx_bmp_file_to_image`).
The difference with put pixel is that the image must be destroyed when it is no longer needed.

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* win = mlx_new_window(mlx, 400, 400, "Hello world!");

    int img_width;
    int img_height;
    void* img = mlx_png_file_to_image(mlx, "path/to/my/awesome/image.png", &img_width, &img_height);

    mlx_put_image_to_window(mlx, win, img, 42, 42); // displays the image at x,y = 42,42

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_display(mlx);
}
```

We'll see later how we can create empty images and how to manipulate them.
