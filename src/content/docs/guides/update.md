---
title: Loop hook
description: how do loops work in the MacroLibX
---

Now that you've understood the basics of MacroLibX, we'll start by drawing a little animation in the window.
To do this, we'll be using two new functions: `mlx_loop` and `mlx_add_loop_hook`.

Loop hooks are a MacroLibX feature that allows you to call given function hooks passed in `mlx_add_loop_hook` each frames.

## 🔄 Hook an update function
To initiate a loop, we call the `mlx_loop` function with the mlx instance as only parameter, you should have seen it before :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_loop(mlx);

    mlx_destroy_context(mlx);
}
```

This will do nothing of course as we have no loop hook registered, therefore we will not be able to write anything to our frame.
And without any event hook, this will just be an infinite loop :sadge:

To make our application more 'dynamic', we need to hook an update function to be able to change what's rendered.
An example of dynamic application could be :

```c
#include "MacroLibX/includes/mlx.h"

// usefull struct
typedef struct
{
    mlx_context mlx;
    mlx_window win;
} mlx_t;

void update(void* param)
{
    static int i = 0;
    mlx_t* mlx = (mlx_t*)param;

    int color = 0;
    for(int j = 0; i < 400; j++)
    {
        mlx_pixel_put(mlx->mlx, mlx->win, j, j, (mlx_color){ .rgba = 0xFF0000FF + (color << 8) });
        mlx_pixel_put(mlx->mlx, mlx->win, 399 - j, j, (mlx_color){ .rgba = 0xFF0000FF });
        color += (color < 255);
    }
    if(++i == 5000)
    {
        // here the rendering changes, the red put pixels
        // we made in the main loop are erased
        mlx_clear_window(mlx->mlx, mlx->win, (mlx_color){ .rgba = 0x000000FF });
    }
}

int main(void)
{
    mlx_t mlx;

    mlx.mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx.win = mlx_new_window(mlx, &info);

    for(int i = 0; i < 100; i++)
    {
        for(int j = 0; j < 100; j++)
        {
            // this will be rendered until we call `mlx_clear_window`
            mlx_pixel_put(mlx, win, i, j, (mlx_color){ .rgba = 0xFF0000FF });
        }
    }

    mlx_add_loop_hook(mlx.mlx, update, &mlx);
    mlx_loop(mlx.mlx);

    mlx_destroy_window(mlx.mlx, mlx.win);
    mlx_destroy_context(mlx.mlx);
}
```
