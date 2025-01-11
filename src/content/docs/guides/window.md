---
title: Window management
description: window management in the MacroLibX
---

Window management in the MacroLibX is pretty basic.

## 🖵 Initialization
Right from the creation you can configure your window using the creation descriptor structure.

```c
typedef struct mlx_window_create_info
{
    mlx_image render_target;
    const char* title;
    int width;
    int height;
    bool is_fullscreen;
    bool is_resizable;
} mlx_window_create_info;

```

As you can see the attributes are clear and I don't think any explanation is needed for most of them.

The only obscure attribute is `render_target`. If a valid `mlx_image` is passed, this window will not
be a real system window and will rather act as a gate to use any draw function to draw directly on an image.

```c
#include "MacroLibX/includes/mlx.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info window_info = { 0 };
    window_info.title = "Hello World!";
    window_info.width = 400;
    window_info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_image target = mlx_new_image(mlx, 100, 100);
    
    mlx_window_create_info target_info = { 0 };
    target_info.render_target = target;
    mlx_window target_win = mlx_new_window(mlx, &info);

    {
        // All of this will be rendered in `target`
        mlx_clear_window(mlx, target_win, (mlx_color){ .rgba = 0xC16868FF });
        mlx_string_put(mlx, target_win, 10, 10, (mlx_color){ .rgba = 0xFF2066FF }, "text");
        mlx_pixel_put(mlx, target_win, 20, 40, (mlx_color){ .rgba = 0xFF0000FF });
    }

    mlx_put_image_to_window(mlx, win, target, 10, 10); // Render the target to the real window

    mlx_destroy_window(mlx, target_win);
    mlx_destroy_image(mlx, target);

    mlx_destroy_window(mlx, win);
    
    mlx_destroy_context(mlx);
}
```

## ⚙️ Functions
In addition to the creation structure the API gives you a few functions to manipulate windows. Each of them are clear on what they do.
Here are all of them :

```c
MLX_API void mlx_set_window_position(mlx_context mlx, mlx_window win, int x, int y);
MLX_API void mlx_set_window_size(mlx_context mlx, mlx_window win, int width, int height);
MLX_API void mlx_set_window_title(mlx_context mlx, mlx_window win, const char* title);
MLX_API void mlx_set_window_fullscreen(mlx_context mlx, mlx_window win, bool enable);
MLX_API void mlx_get_window_position(mlx_context mlx, mlx_window win, int* x, int* y);
MLX_API void mlx_get_window_size(mlx_context mlx, mlx_window win, int* x, int* y);
```

<div align="center">
    <img src="/more.gif"/>
</div>

By including the `mlx_extended.h` header you get access to more functions :

```c
MLX_API void mlx_set_window_max_size(mlx_context mlx, mlx_window win, int x, int y);
MLX_API void mlx_set_window_min_size(mlx_context mlx, mlx_window win, int x, int y);
MLX_API void mlx_maximise_window(mlx_context mlx, mlx_window win);
MLX_API void mlx_minimize_window(mlx_context mlx, mlx_window win);
MLX_API void mlx_restore_window(mlx_context mlx, mlx_window win);
```
