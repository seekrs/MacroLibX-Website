---
title: Standard Reference
description: Types and Function references in the core header
---

## Types

---

### mlx_context
**Opaque handle that represents the MLX context**

---

### mlx_window
**Opaque handle that represents a MLX window**

---

### mlx_image
**Opaque handle that represents a MLX image**

---

### mlx_color
**Union representing RGBA color with access to each part as bytes**

```c
typedef union
{
	struct
	{
		// Order switches for big endian
		uint8_t a;
		uint8_t r;
		uint8_t g;
		uint8_t b;
	};
	uint32_t rgba;
} mlx_color;
```

---

## Application related functions

---

### mlx_init()
**Initializes the MLX internal application**

__Returns__:\
\- *(mlx_context)*: An opaque handler to the internal MLX application or NULL in case of error

---


### mlx_set_fps_goal()
**Caps the FPS**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(int)* `fps`: The FPS cap or 0 for vsync

---

### mlx_destroy_context()
**Destroy internal MLX application**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application

---

## Window related functions

---

### mlx_window_create_info
**Descriptor structure for window creation**

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

Note: if a valid mlx_image is passed as render_target, this window will not be a real system window and will rather act as a gate to use any draw function to draw directly on an image.\
*Ex: you could use mlx_string_put or mlx_pixel_put to draw on a given image and then use this image with mlx_put_image_to_window to render it on a real window. See experimental/RenderToTexture/main.c for a concrete example.*

---

### mlx_new_window()
**Creates a new window**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window_info)* `info`: Pointer to a descriptor structure

__Returns__:
\- *(mlx_window)*: An opaque handler to the internal MLX window or NULL in case of error

---

### mlx_destroy_window()
**Destroys internal window**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window

---

### mlx_set_window_position()
**Sets window position**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to move\
\- *(int)* `x`: New x position\
\- *(int)* `y`: New y position

---

### mlx_set_window_size()
**Sets window size**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to resize\
\- *(int)* `width`: New width\
\- *(int)* `height`: New height

---

### mlx_set_window_title()
**Sets window title**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to modify\
\- *(char\*)* `title`: New title

---

### mlx_set_window_icon()
**Sets window icon**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to modify\
\- *(mlx_image)* `img`: New icon image

---

### mlx_set_window_fullscreen()
**Enables/Disables window fullscreen mode**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to modify\
\- *(bool)* `enable`: Switch or not to fullscreen

---

### mlx_get_window_position()
**Gets window position**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to get from\
\- *(int\*)* `x`: Pointer to get the window's position\
\- *(int\*)* `y`: Pointer to get the window's position

---

### mlx_get_window_size()
**Gets window size**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to get from\
\- *(int\*)* `w`: Pointer to get the window's width\
\- *(int\*)* `h`: Pointer to get the window's height

---

### mlx_clear_window()
**Clears the given window (resets all rendered data)**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window

---

### mlx_get_screen_size()
**Get the size of the screen the given window is on**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window to choose screen the window is on\
\- *(int\*)* `w`: Pointer to get the screen's width\
\- *(int\*)* `h`: Pointer to get the screen's height

---

## Loop related functions

---

### mlx_add_loop_hook()
**Gives another function to be executed at each loop turn**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(void(void\*))* `f`: The function to execute\
\- *(void\*)* `param`: Parameter given to the function

---

### mlx_loop()
**Starts the internal main loop**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application

---

### mlx_loop_end()
**Ends the internal run loop**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application

---

## Events related functions

---

### mlx_mouse_show()
**Shows mouse cursor**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application

---

### mlx_mouse_hide()
**Hides mouse cursor**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application

---

### mlx_mouse_set_icon()
**Changes the cursor's icon**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_cursor_icon)* `icon`: The new cursor icon id

**System cursor icons**
```
MLX_MOUSE_ICON_ARROW
MLX_MOUSE_ICON_IBEAM
MLX_MOUSE_ICON_WAIT
MLX_MOUSE_ICON_CROSSHAIR
MLX_MOUSE_ICON_WAITARROW
MLX_MOUSE_ICON_SIZENWSE
MLX_MOUSE_ICON_SIZENESW
MLX_MOUSE_ICON_SIZEWE
MLX_MOUSE_ICON_SIZENS
MLX_MOUSE_ICON_SIZEALL
MLX_MOUSE_ICON_NO
MLX_MOUSE_ICON_HAND
```

---

### mlx_mouse_move()
**Moves cursor to givent position**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window from which cursor moves\
\- *(int)* `x`: X coordinate\
\- *(int)* `y`: Y coordinate


---

### mlx_mouse_get_pos()
**Get cursor's position**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(int\*)* `x`: Pointer to get the mouse's position\
\- *(int\*)* `y`: Pointer to get the mouse's position

---

### mlx_on_event()
**Gives a function to be executed on event type, does not override previous functions**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window\
\- *(mlx_event_type)* `event`: Event type\
\- *(void(int, void\*))* `f`: Function to be executed\
\- *(void\*)* `param`: Parameter given to the function

**Types of event**
```
MLX_KEYDOWN
MLX_KEYUP
MLX_MOUSEDOWN
MLX_MOUSEUP
MLX_MOUSEWHEEL
MLX_WINDOW_EVENT
MLX_CONTROLLERDOWN
MLX_CONTROLLERUP
MLX_TEXTINPUT
```

---

## Pixels drawing related functions

---

### mlx_pixel_put()
**Put a pixel in the window**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window\
\- *(int)* `x`: X coordinate\
\- *(int)* `y`: Y coordinate\
\- *(mlx_color)* `color`: Color of the pixel

WARNING: This function isn't performant, consider drawing to an image beforehand.

---

## Images related functions

---

### mlx_new_image()
**Create a new empty image**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(int)* `width`: Width of the image\
\- *(int)* `height`: Height of the image

__Returns__:\
\- *(mlx_image)*: An opaque handler to the internal image or NULL in case of error

---

### mlx_new_image_from_file()
**Create a new image from a png/jpg/bmp file**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(char\*)* `file`: Path to the image file\
\- *(int\*)* `width`: Pointer to the image's width\
\- *(int\*)* `height`: Pointer to the image's height

__Returns__:\
\- *(mlx_image)*: An opaque handler to the internal image or NULL in case of error

---

### mlx_destroy_image()
**Destroys internal image**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image

---

### mlx_clear_image()
**Clear image**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image\
\- *(mlx_color)* `color`: Color of the clear

---

### mlx_get_image_pixel()
**Get image pixel data**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image\
\- *(int)* `x`: X coordinate in the image\
\- *(int)* `y`: Y coordinate in the image

__Returns__:\
\- *(mlx_color)*: Return the pixel data

---

### mlx_set_image_pixel()
**Set image pixel data**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image\
\- *(int)* `x`: X coordinate in the image\
\- *(int)* `y`: Y coordinate in the image\
\- *(mlx_color)* `color`: Color of the pixel to set

---

### mlx_set_image_rectangle()
**Set image rectangle**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image\
\- *(int)* `x`: X coordinate in the image\
\- *(int)* `y`: Y coordinate in the image\
\- *(int)* `w`: Width of the rectangle\
\- *(int)* `h`: Height of the rectangle\
\- *(mlx_color)* `color`: Color of the rectangle

---

### mlx_put_image_to_window()
**Put image to the given window**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window\
\- *(mlx_image)* `img`: Internal image\
\- *(int)* `x`: X coordinate\
\- *(int)* `y`: Y coordinate

---

### mlx_save_image_to_file()
**Saves an image to a png/jpg/bmp file**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_image)* `img`: Internal image to save\
\- *(char\*)* `file`: Path to the file

__Returns__:\
\- *(bool)*: true on success, false otherwise

---

## Strings drawing related functions

---

### mlx_string_put()
**Put text in given window**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(mlx_window)* `win`: Internal window\
\- *(int)* `x`: X coordinate\
\- *(int)* `y`: Y coordinate\
\- *(mlx_color)* `color`: Color of the pixel\
\- *(char\*)* `str`: Text to put

---

### mlx_set_font()
**Loads a font to be used by `mlx_string_put`**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\	
\- *(char\*)* `file`: Path to the font or "default" to reset to the embedded font

---

### mlx_set_font_scale()
**Loads a font to be used by `mlx_string_put` and scales it**

__Parameters__:\
\- *(mlx_context)* `mlx`: Internal MLX application\
\- *(char\*)* `file`: Path to the font or "default" to reset to the embedded font\
\- *(float)* `scale`: Scale to apply to the font
