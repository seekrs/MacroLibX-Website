---
title: References
description: Function references
---

## Base header types

### mlx_context
Opaque handle that represents the MLX context.

```c
MLX_DEFINE_HANDLE(mlx_context);
```

### mlx_window
Opaque handle that represents a MLX window.

```c
MLX_DEFINE_HANDLE(mlx_window);
```

### mlx_image
Opaque handle that represents a MLX image.

```c
MLX_DEFINE_HANDLE(mlx_image);
```

### mlx_color
Union representing RGBA color with access to each part as bytes.

```c
typedef union mlx_color
{
    struct
    {
        #if MLX_BYTEORDER == MLX_LITTLE_ENDIAN
            uint8_t a;
            uint8_t b;
            uint8_t g;
            uint8_t r;
        #else
            uint8_t r;
            uint8_t g;
            uint8_t b;
            uint8_t a;
        #endif
    };
    uint32_t rgba;
} mlx_color;
```

### mlx_window_create_info
Descriptor structure for window creation

Note: if a valid `mlx_image` is passed as `render_target`, this window will not be a real system window
and will rather act as a gate to use any draw function to draw directly on an image.

Ex: you could use `mlx_string_put` or `mlx_pixel_put` to draw on a given image and then use this image
with `mlx_put_image_to_window` to render it on a real window.

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

### mlx_event_type
Type of event.

```c
typedef enum mlx_event_type
{
    MLX_KEYDOWN = 0,
    MLX_KEYUP = 1,
    MLX_MOUSEDOWN = 2,
    MLX_MOUSEUP = 3,
    MLX_MOUSEWHEEL = 4,
    MLX_WINDOW_EVENT = 5
} mlx_event_type;
```

## Base header prototypes

### mlx_init()
Initializes the MLX internal application

Returns an opaque handler to the internal MLX application or `MLX_NULL_HANDLE` (0x0) in case of error
```c
// Prototype
MLX_API mlx_context mlx_init();
```

### mlx_set_fps_goal()
Set a maximum number of FPS that MacroLibX cannot exceed

* param `mlx` : Internal MLX application
* param `fps` : The FPS cap

```c
// Prototype
MLX_API void mlx_set_fps_goal(mlx_context mlx, int fps);
```

### mlx_destroy_context()
Destroys internal MLX application

* param `mlx` : Internal MLX application

```c
// Prototype
MLX_API void mlx_destroy_context(mlx_context mlx);
```

### mlx_new_window()
Creates a new window

* param `mlx` : Internal MLX application
* param `info` : Pointer to a descriptor structure

Returns an opaque handler to the internal MLX window or `MLX_NULL_HANDLE` (0x0) in case of error

```c
// Prototype
MLX_API mlx_window mlx_new_window(mlx_context mlx, const mlx_window_create_info* info);
```
### mlx_destroy_window()
Destroys internal window

* param `mlx` : Internal MLX application
* param `win` : Internal window

```c
// Prototype
MLX_API void mlx_destroy_window(mlx_context mlx, mlx_window win);
```

### mlx_set_window_position()
Sets window position

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `x` : New x position
* param `y` : New y position

```c
// Prototype
MLX_API void mlx_set_window_position(mlx_context mlx, mlx_window win, int x, int y);
```

### mlx_set_window_size()
Sets window size

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `width` : New width
* param `height` : New height

```c
// Prototype
MLX_API void mlx_set_window_size(mlx_context mlx, mlx_window win, int width, int height);
```

### mlx_set_window_title()
Sets window title

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `title` : New title

```c
// Prototype
MLX_API void mlx_set_window_title(mlx_context mlx, mlx_window win, const char* title);
```

### mlx_set_window_fullscreen()
Enables/Disables window fullscreen mode

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `enable` : Switch or not to fullscreen

```c
// Prototype
MLX_API void mlx_set_window_fullscreen(mlx_context mlx, mlx_window win, bool enable);
```

### mlx_get_window_position()
Gets window position

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `x` : Pointers to get position of the window
* param `y` : Pointers to get position of the window

```c
// Prototype
MLX_API void mlx_get_window_position(mlx_context mlx, mlx_window win, int* x, int* y);
```

### mlx_get_window_size()
Gets window size

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `x` : Pointers to get size of the window
* param `y` : Pointers to get size of the window

```c
// Prototype
MLX_API void mlx_get_window_size(mlx_context mlx, mlx_window win, int* x, int* y);
```

### mlx_clear_window()
Clears the given window (resets all rendered data)

* param `mlx` : Internal MLX application
* param `win` : Internal window

```c
// Prototype
MLX_API void mlx_clear_window(mlx_context mlx, mlx_window win, mlx_color color);
```

### mlx_get_screen_size()
Get the size of the screen the given window is on

* param `mlx` : Internal MLX application
* param `win` : Internal window to choose screen the window is on
* param `w` : Get width size
* param `h` : Get height size

```c
// Prototype
MLX_API void mlx_get_screen_size(mlx_context mlx, mlx_window win, int* w, int* h);
```



### mlx_add_loop_hook()
Gives another function to be executed at each loop turn

* param `mlx` : Internal MLX application
* param `f` : The function
* param `param` : Param to give to the function passed

```c
// Prototype
MLX_API void mlx_add_loop_hook(mlx_context mlx, void(*f)(void*), void* param);
```

### mlx_loop()
Starts the internal main loop

* param `mlx` : Internal MLX application

```c
// Prototype
MLX_API void mlx_loop(mlx_context mlx);
```

### mlx_loop_end()
Ends the internal run loop

* param `mlx` : Internal MLX application

```c
// Prototype
MLX_API void mlx_loop_end(mlx_context mlx);
```



### mlx_mouse_show()
Shows mouse cursor

* param `mlx` : Internal MLX application

```c
// Prototype
MLX_API void mlx_mouse_show(mlx_context mlx);
```

### mlx_mouse_hide()
Hides mouse cursor

* param `mlx` : Internal MLX application

```c
// Prototype
MLX_API void mlx_mouse_hide(mlx_context mlx);
```

### mlx_mouse_move()
Moves cursor to givent position

* param `mlx` : Internal MLX application
* param `win` : Internal window from which cursor moves
* param `x` : X coordinate
* param `y` : Y coordinate

```c
// Prototype
MLX_API void mlx_mouse_move(mlx_context mlx, mlx_window win, int x, int y);
```

### mlx_mouse_get_pos()
Get cursor's position

* param `mlx` : Internal MLX application
* param `x` : Get x coordinate
* param `y` : Get y coordinate

```c
// Prototype
MLX_API void mlx_mouse_get_pos(mlx_context mlx, int* x, int* y);
```

### mlx_on_event()
Gives a function to be executed on event type, does not override previous functions

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `event` : Event type (see union on top of this file)
* param `f` : Function to be executed
* param `param` : Parameter given to the function

```c
// Prototype
MLX_API void mlx_on_event(mlx_context mlx, mlx_window win, mlx_event_type event, void(*f)(int, void*), void* param);
```

### mlx_pixel_put()
Put a pixel in the window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `color` : Color of the pixel

```c
// Prototype
MLX_API void mlx_pixel_put(mlx_context mlx, mlx_window win, int x, int y, mlx_color color);
```

### mlx_new_image()
Create a new empty image

* param `mlx` : Internal MLX application
* param `width` : Width of the image
* param `height` : Height of the image

Returns an opaque handler to the internal image or `MLX_NULL_HANDLE` (0x0) in case of error

```c
// Prototype
MLX_API mlx_image mlx_new_image(mlx_context mlx, int width, int height);
```

### mlx_new_image_from_file()
Create a new image from a png/jpg/bmp file

* param `mlx` : Internal MLX application
* param `filename` : Path to the png file
* param `width` : Get the width of the image
* param `heigth` : Get the height of the image

Returns an opaque handler to the internal image or `MLX_NULL_HANDLE` (0x0) in case of error

```c
// Prototype
MLX_API mlx_image mlx_new_image_from_file(mlx_context mlx, char* filename, int* width, int* height);
```

### mlx_destroy_image()
Destroys internal image

* param `mlx` : Internal MLX application
* param `img` : Internal image

```c
// Prototype
MLX_API void mlx_destroy_image(mlx_context mlx, mlx_image image);
```

### mlx_get_image_pixel()
Get image pixel data

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image

Returns the pixel data

```c
// Prototype
MLX_API mlx_color mlx_get_image_pixel(mlx_context mlx, mlx_image image, int x, int y);
```

### mlx_set_image_pixel()
Set image pixel data

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image
* param `color` : Color of the pixel to set

```c
// Prototype
MLX_API void mlx_set_image_pixel(mlx_context mlx, mlx_image image, int x, int y, mlx_color color);
```

### mlx_put_image_to_window()
Put image to the given window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `img` : Internal image
* param `x` : X coordinate
* param `y` : Y coordinate

```c
// Prototype
MLX_API void mlx_put_image_to_window(mlx_context mlx, mlx_window win, mlx_image image, int x, int y);
```

### mlx_string_put()
Put text in given window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `color` : Color of the pixel
* param `str` : Text to put

```c
// Prototype
MLX_API void mlx_string_put(mlx_context mlx, mlx_window win, int x, int y, mlx_color color, char* str);
```

### mlx_set_font()
Loads a font to be used by `mlx_string_put`

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `filepath` : Filepath to the font or "default" to reset to the embedded font

```c
// Prototype
MLX_API void mlx_set_font(mlx_context mlx, char* filepath);
```

### mlx_set_font_scale()
Loads a font to be used by `mlx_string_put` and scales it

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `filepath` : Filepath to the font or "default" to reset to the embedded font
* param `scale` : Scale to apply to the font

```c
// Prototype
MLX_API void mlx_set_font_scale(mlx_context mlx, char* filepath, float scale);
```

## Extended header prototypes

### mlx_set_window_max_size()
Sets maximum window size

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `x` : New x maximum size
* param `y` : New y maximum size
 
```c
// Prototype
MLX_API void mlx_set_window_max_size(mlx_context mlx, mlx_window win, int x, int y);
```

### mlx_set_window_min_size()
Sets minimum window size

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
* param `x` : New x minimum size
* param `y` : New y minimum size
 
```c
// Prototype
MLX_API void mlx_set_window_min_size(mlx_context mlx, mlx_window win, int x, int y);
```

### mlx_maximise_window()
Maximizes a window

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
 
```c
// Prototype
MLX_API void mlx_maximise_window(mlx_context mlx, mlx_window win);
```

### mlx_minimize_window()
Minimizes a window

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
 
```c
// Prototype
MLX_API void mlx_minimize_window(mlx_context mlx, mlx_window win);
```

### mlx_restore_window()
Restore window to formal size

* param `mlx` : Internal MLX application
* param `win` : Internal window to move
 
```c
// Prototype
MLX_API void mlx_restore_window(mlx_context mlx, mlx_window win);
```
### mlx_pixel_put_array()
Put an array of pixels in the window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `pixels` : Array of pixels
* param `pixels_number` : Number of pixels
 
```c
// Prototype
MLX_API void mlx_pixel_put_array(mlx_context mlx, mlx_window win, int x, int y, mlx_color* pixels, size_t pixels_number);
```

### mlx_pixel_put_region()
Put a region of pixels in the window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `w` : Width
* param `h` : Height
* param `pixels` : Array of pixels

Note: it is responsability of the user to make sure the size of `pixels` is
big enough for the given region.
 
```c
// Prototype
MLX_API void mlx_pixel_put_region(mlx_context mlx, mlx_window win, int x, int y, int w, int h, mlx_color* pixels);
```

### mlx_get_image_region()
Get image region

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image
* param `w` : Width of the region
* param `y` : Height of the region
* param `dst` : Array of pixels to copy to

Note: it is responsability of the user to make sure the size of `dst` is
big enough for the given region.
 
```c
// Prototype
MLX_API void mlx_get_image_region(mlx_context mlx, mlx_image image, int x, int y, int w, int h, mlx_color* dst);
```

### mlx_set_image_region()
Set image region

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image
* param `w` : Width of the region
* param `h` : Height of the region
* param `pixels` : Array of pixels to copy from

Note: it is responsability of the user to make sure the size of `pixels` is
big enough for the given region.
 
```c
// Prototype
MLX_API void mlx_set_image_region(mlx_context mlx, mlx_image image, int x, int y, int w, int h, mlx_color* pixels);
```

### mlx_put_transformed_image_to_window()
Transform and put image to the given window

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `img` : Internal image
* param `x` : X coordinate
* param `y` : Y coordinate
* param `scale_x` : Scale x of the image
* param `scale_y` : Scale y of the image
* param `angle` : Rotation angle of the image (clockwise)
 
```c
// Prototype
MLX_API void mlx_put_transformed_image_to_window(mlx_context mlx, mlx_window win, mlx_image image, int x, int y, float scale_x, float scale_y, float angle);
```

### mlx_get_proc_addr()
Get direct pointers to hidden functions

* param `mlx` : Internal MLX application

Returns a function pointer or `NULL` (0x0) in case of error
```c
// Prototype
MLX_API mlx_function mlx_get_proc_addr(mlx_context mlx, const char* name);
```
