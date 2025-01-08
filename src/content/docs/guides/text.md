---
title: Text management
description: how do texts work in the MacroLibX
---

The MacroLibX supports texts rendering using `mlx_string_put` and some functions to load fonts.

## 🖊️ Text rendering
To render any text with the MacroLibX we only need to use `mlx_string_put` like so :

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

    // drawing "this is my text" at 200;210, in white
    mlx_string_put(mlx, win, 200, 210, (mlx_color){ .rgba = 0xFFFFFFFF }, "this is my text");

    /* loop, cleanup, ... */
}
```

## 🔤 Using fonts
The MacroLibX is also capable of using custom fonts (as long as it is a TTF) given by the user. To do so, we can use `mlx_set_font` and `mlx_set_font_scale`.

The difference between thoses are that `mlx_set_font_scale` allows the user to scale the font as he/she wants.

We can even use several fonts in the same frame :

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

    mlx_set_font(mlx, win, "/path/to/my/awesome/font.ttf");
    // Now all texts will be rendered using font.ttf
    mlx_string_put(mlx, win, 200, 210, (mlx_color){ .rgba = 0xFFFFFFFF }, "this is my text");
    mlx_string_put(mlx, win, 100, 10, (mlx_color){ .rgba = 0xFFFE5FFF }, "MacroLibX > all");
    mlx_string_put(mlx, win, 300, 50, (mlx_color){ .rgba = 0xFFFF00FF }, "42angouleme");

    mlx_set_font(mlx, win, "/path/to/my/awesome/another_font.ttf");
    // Now all texts will be rendered using another_font.ttf
    mlx_string_put(mlx, win, 0, 20, (mlx_color){ .rgba = 0xFFFFFFFF }, "Akel");
    mlx_string_put(mlx, win, 300, 210, (mlx_color){ .rgba = 0xFFFE5FFF }, "vim > vscode");

    mlx_set_font_scale(mlx, win, "/path/to/my/awesome/font.ttf", 16.0f);
    // Now all texts will be rendered using font.ttf but scaled at 16 pixels height
    mlx_string_put(mlx, win, 200, 210, (mlx_color){ .rgba = 0xFFFFFFFF }, "kroussar > kiroussa");
    mlx_string_put(mlx, win, 100, 10, (mlx_color){ .rgba = 0xFFFE5FFF }, "i use arch btw");

    /* loop, cleanup, ... */
}
```

And if we want to use the default font again, we can pass `"default"` as the font path (we can scale it too).
