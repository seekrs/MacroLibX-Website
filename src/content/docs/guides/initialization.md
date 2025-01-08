---
title: Initialization
description: how to init the MacroLibX
---

## 🚀 Initialization
Before we can do anything with the MacroLibX we must include the `mlx.h` header given with the lib and we should execute the `mlx_init` function.
This will initialize the graphical system and will return a `mlx_context` which holds the internal MLX instance.
To initialize the MacroLibX one could do the following :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();
}
```

When you run the code, you can’t help but notice that nothing pops up and that nothing is being rendered.
Well, this obviously has something to do with the fact that you are not creating a window yet, so let’s try initializing a tiny window which will stay open forever.
You can close it by pressing `ctrl+\` in your terminal. To achieve this, we will simply call the `mlx_new_window` function with a descriptor, which will return the window instance we have just created.
We can give the window height, width, a title and more. We then will have to call `mlx_loop` to initiate the window rendering. Let’s create a window with a width of 400, a height of 400 and a name of “Hello world!” :

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
    mlx_loop(mlx);
}
```

## 🗑️ Cleanup
If you run your new graphical application made with the MacroLibX with Valgrind or any other leak-finding tool, you'll notice that there are a lot of memory loss.
This is because we have initialized the MacroLibX, but we did not shutdown it. Same thing goes for the window, we did not destroyed it. To do so we can call two functions, 
`mlx_destroy_window` and `mlx_destroy_context`.

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

    // Do you stuffs

    mlx_destroy_window(mlx, win); // note that you need to call `mlx_destroy_window` before calling `mlx_destroy_context`
    mlx_destroy_context(mlx);
}
```
