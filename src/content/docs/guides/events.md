---
title: Events management
description: how do events work in the MacroLibX
---

Events are the basis for writing interactive applications in MacroLibX.
So it's essential that you understand this chapter thoroughly, as it will come in handy in your future graphics projects.

All MacroLibX hooks are nothing more than a function that is called whenever an event is triggered.

The base of all MacroLibX events is `mlx_on_event`. This function is used to manage all of the events, from keyboard to window events.
It's is used to attach a function hook to a specific event like keyboard down, or mouse wheel event. That hook will be called every time
this specific event is triggerd.

## ⌨️ Keyboard
To get keyboard events, we need to use `MLX_KEYDOWN` or `MLX_KEYUP` when calling `mlx_on_event` to set the correct hook.
Here's how we could do it :

```c
#include "MacroLibX/includes/mlx.h"

void key_hook(int key, void* param)
{
    if(key == 41) // 41 is the key code for escape
        mlx_loop_end((mlx_context)param); // if escape is pressed we stop the mlx_loop and so we continue in the main function
}

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    // we pass the mlx pointer as the last param so it can be used in the key_hook function
    mlx_on_event(mlx, win, MLX_KEYDOWN, key_hook, mlx);

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_context(mlx);
}
```

## 🖱️ Mouse
Same thing that keyboard events, we need to use `MLX_MOUSEDOWN`, `MLX_MOUSEUP` or `MLX_MOUSEWHEEL` when calling `mlx_on_event` to set the correct hook.
Here's how we could do it :

```c
#include "MacroLibX/includes/mlx.h"

void mouse_hook(int button, void* param)
{
    /* Do stuffs */
}

void mouse_wheel_hook(int button, void* param)
{
    /* Do stuffs */
}

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_on_event(mlx, win, MLX_MOUSEDOWN, mouse_hook, NULL);
    mlx_on_event(mlx, win, MLX_MOUSEWHEEL, mouse_wheel_hook, NULL);

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_context(mlx);
}
```

## 🖥️ Window events
The last type of events we can handle are window events (window moved, window maximized, window focused, window closed, ... ).

```c
#include "MacroLibX/includes/mlx.h"

void window_hook(int event, void* param)
{
    if(event == 0) // 0 is when we trigger the close of the window (by clicking the cross for example)
        mlx_loop_end((mlx_context)param);
}

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_on_event(mlx, win, MLX_WINDOW_EVENT, window_hook, mlx);

    mlx_loop(mlx);

    mlx_destroy_window(mlx, win);
    mlx_destroy_context(mlx);
}
```
