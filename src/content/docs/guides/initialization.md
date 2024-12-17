---
title: Initialization
description: how to init the MacroLibX
---

## 🚀 Initialization
Before we can do anything with the MacroLibX we must include the `mlx.h` header given with the lib and we should execute the `mlx_init` function.
This will initialize the graphical system and will return a `void*` which holds the location of our current MLX instance.
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
You can close it by pressing `ctrl+\` in your terminal. To achieve this, we will simply call the `mlx_new_window` function, which will return a pointer to the window we have just created.
We can give the window height, width and a title. We then will have to call `mlx_loop` to initiate the window rendering. Let’s create a window with a width of 400, a height of 400 and a name of “Hello world!” :

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();
    mlx_window win = mlx_new_window(mlx, 400, 400, "Hello world!");
    mlx_loop(mlx);
}
```

## 🗑️ Cleanup
If you run your new graphical application made with the MacroLibX with Valgrind or any other leak-finding tool, you'll notice that there are a lot of memory loss.
This is because we have initialized the MacroLibX, but we did not shutdown it. Same thing goes for the window, we did not destroyed it. To do so we can call two functions, 
`mlx_destroy_window` and `mlx_destroy_display`.

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    void* mlx = mlx_init();
    void* win = mlx_new_window(mlx, 400, 400, "Hello world!");

    // Do you stuffs

    mlx_destroy_window(mlx, win); // note that you need to call `mlx_destroy_window` before calling `mlx_destroy_display`
    mlx_destroy_display(mlx);
}
```
