---
title: References
description: caca
---

## All prototypes

### mlx_init()
Initializes the MLX internal application.

Returns an opaque pointer to the internal MLX application or `NULL` (0x0) in case of error.
```c
// Prototype
MLX_API void* mlx_init();
```

### mlx_new_window()
Creates a new window.

* param `mlx` : Internal MLX application
* param `w` : Width of the window
* param `h` : Height of the window
* param `title` : Title of the window

Returns an opaque pointer to the internal MLX window or `NULL` (0x0) in case of error

```c
// Prototype
MLX_API void* mlx_new_window(void* mlx, int w, int h, const char* title);
```

### mlx_loop_hook()
Gives a function to be executed at each loop turn.

* param `mlx` : Internal MLX application
* param `f` : The function
* param `param` : Param to give to the function passed

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_loop_hook(void* mlx, int (*f)(void*), void* param);
```

### mlx_loop()
Starts the internal main loop.

* param `mlx` : Internal MLX application

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_loop(void* mlx);
```

### mlx_loop_end()
Ends the internal main loop.

* param `mlx` : Internal MLX application

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_loop_end(void* mlx);
```

### mlx_mouse_show()
Shows mouse cursor.

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_mouse_show();
```

### mlx_mouse_hide()
Hides mouse cursor.

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_mouse_hide();
```

### mlx_mouse_move()
Moves cursor to givent position.

* param `mlx` : Internal MLX application
* param `win` : Internal window from which cursor moves
* param `x` : X coordinate
* param `y` : Y coordinate

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_mouse_move(void* mlx, void* win, int x, int y);
```

### mlx_mouse_get_pos()
Gets cursor position.

* param `mlx` : Internal MLX application
* param `x` : Pointer where to store X coordinate
* param `y` : Pointer where to store Y coordinate

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_mouse_get_pos(void* mlx, int* x, int* y);
```

### mlx_on_event()
Gives a function to be executed on event type.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `event` : Event type
* param `f` : Function to be executed
* param `param` : Parameter given to the function

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Event types
typedef enum
{
	MLX_KEYDOWN = 0,
	MLX_KEYUP = 1,
	MLX_MOUSEDOWN = 2,
	MLX_MOUSEUP = 3,
	MLX_MOUSEWHEEL = 4,
	MLX_WINDOW_EVENT = 5
} mlx_event_type;

// Prototype
MLX_API int mlx_on_event(void* mlx, void* win, mlx_event_type event, int (*f)(int, void*), void* param);
```

### mlx_pixel_put()
Put a pixel in the window.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `color` : Color of the pixel (coded on 4 bytes in an int, `0xAARRGGBB`)

Note : If you are reading pixel colors from an image, don't forget to convert them as image pixels are encoded as `0xRRGGBBAA` and pixel put takes `0xAARRGGBB`.

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_pixel_put(void* mlx, void* win, int x, int y, int color);
```

### mlx_new_image()
Create a new empty image.

* param `mlx` : Internal MLX application
* param `width` : Width of the image
* param `height` : Height of the image

Returns an opaque pointer to the internal image or `NULL` (0x0) in case of error.

```c
// Prototype
MLX_API void* mlx_new_image(void* mlx, int width, int height);
```

### mlx_get_image_pixel()
Gets image pixel data.

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image

Return the pixel data encoded as `0xRRGGBBAA`.

```c
// Prototype
MLX_API int mlx_get_image_pixel(void* mlx, void* img, int x, int y);
```

### mlx_set_image_pixel()
Sets image pixel data.

* param `mlx` : Internal MLX application
* param `img` : Internal image
* param `x` : X coordinate in the image
* param `y` : Y coordinate in the image
* param `color` : Color of the pixel to set (encoded as `0xAARRGGBB`)

Returns nothing.

```c
// Prototype
MLX_API void mlx_set_image_pixel(void* mlx, void* img, int x, int y, int color);
```

### mlx_put_image_to_window()
Put image to the given window.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `img` : Internal image
* param `x` : X coordinate
* param `y` : Y coordinate

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_put_image_to_window(void* mlx, void* win, void* img, int x, int y);
```

### mlx_destroy_image()
Destroys internal image.

* param `mlx` : Internal MLX application
* param `img` : Internal image

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_destroy_image(void* mlx, void* img);
```

### mlx_png_file_to_image()
Create a new image from a png file.

* param `mlx` : Internal MLX application
* param `filename` : Path to the png file
* param `width` : Pointer where to store the width of the image
* param `heigth` : Pointer where to store the height of the image

Returns an opaque pointer to the internal image or `NULL` (0x0) in case of error.

```c
// Prototype
MLX_API void* mlx_png_file_to_image(void* mlx, char* filename, int* width, int* height);
```

### mlx_jpg_file_to_image()
Create a new image from a jpeg file.

* param `mlx` : Internal MLX application
* param `filename` : Path to the jpeg file
* param `width` : Pointer where to store the width of the image
* param `heigth` : Pointer where to store the height of the image

Returns an opaque pointer to the internal image or `NULL` (0x0) in case of error.

```c
// Prototype
MLX_API void* mlx_jpg_file_to_image(void* mlx, char* filename, int* width, int* height);
```

### mlx_bmp_file_to_image()
Create a new image from a bmp file.

* param `mlx` : Internal MLX application
* param `filename` : Path to the bmp file
* param `width` : Pointer where to store the width of the image
* param `heigth` : Pointer where to store the height of the image

Returns an opaque pointer to the internal image or `NULL` (0x0) in case of error.

```c
// Prototype
MLX_API void* mlx_bmp_file_to_image(void* mlx, char* filename, int* width, int* height);
```

### mlx_string_put()
Puts text in given window.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `x` : X coordinate
* param `y` : Y coordinate
* param `color` : Color of the pixel (coded on 4 bytes in an `int`, `0xAARRGGBB`)
* param `str` : Text to put

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_string_put(void* mlx, void* win, int x, int y, int color, char* str);
```

### mlx_set_font()
Loads a font to be used by `mlx_string_put`.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `filepath` : Filepath to the font (a `.ttf` file) or `"default"`` to reset to the embedded font

Return nothing.

```c
// Prototype
MLX_API void mlx_set_font(void* mlx, void* win, char* filepath);
```

### mlx_set_font_scale()
Loads a font to be used by `mlx_string_put` and scales it.

* param `mlx` : Internal MLX application
* param `win` : Internal window
* param `filepath` : Filepath to the font (a `.ttf` file) or `"default"`` to reset to the embedded font
* param `scale` : Scale to apply to the font

Return nothing.

```c
// Prototype
MLX_API void mlx_set_font_scale(void* mlx, void* win, char* filepath, float scale);
```

### mlx_clear_window()
Clears the given window (resets all rendered data).

* param `mlx` : Internal MLX application
* param `win` : Internal window

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_clear_window(void* mlx, void* win);
```

### mlx_destroy_window()
Destroys internal window.

* param `mlx` : Internal MLX application
* param `win` : Internal window

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_destroy_window(void* mlx, void* win);
```

### mlx_destroy_display()
Destroys internal MLX application.

* param `mlx` : Internal MLX application

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_destroy_display(void* mlx);
```

### mlx_get_screens_size()
Retrieves screen size.

* param `mlx` : Internal MLX application
* param `w` : Pointer where to store the width
* param `h` : Pointer where to store the height

Always returns 0, made this to copy the behaviour of the original minilibx.

```c
// Prototype
MLX_API int mlx_get_screens_size(void* mlx, int* w, int* h);
```

### mlx_set_fps_goal()
Caps the FPS.

* param `mlx` : Internal MLX application
* param `fps` : The FPS cap

Always returns 0

```c
// Prototype
MLX_API int mlx_set_fps_goal(void* mlx, int fps);
```
