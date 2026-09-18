---
title: Extended Reference
description: Types and Function references in the extended header
---

## Types

### mlx_channel
**Opaque handle that represents a MLX audio channel**

### mlx_sound
**Opaque handle that represents a MLX sound**

---

## Window related functions

### mlx_set_window_max_size()
**Sets maximum window size**

* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window to move
* (int) `x` : New x maximum size
* (int) `y` : New y maximum size

### mlx_set_window_min_size()
**Sets minimum window size**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window to move
* (int) `x` : New x minimum size
* (int) `y` : New y minimum size

### mlx_maximise_window()
**Maximizes a window**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window to move

### mlx_minimize_window()
**Minimizes a window**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window to move

### mlx_restore_window()
**Restore window to formal size**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window to move

---

## Events related functions

### mlx_controller_event_code
**Struct representing the actual data stored in the code passed to controller event handlers**

```c
typedef struct mlx_controller_event_code
{
	// Order switches for big endian
	short button;
	short controller_id;
} mlx_controller_event_code;
```

### mlx_controller_get_axis()
**Get a controller's analog input**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (int) `id` : Controller ID (-1 for default)
* (mlx_controller_axis) `axis` : Axis type (see enum 'mlx_controller_axis')

__Returns__:
* (float): The axis value (ranges [-1, 1] for joysticks, [0, 1] for triggers)

**Controller axis**
```
MLX_CONTROLLER_AXIS_LEFTX
MLX_CONTROLLER_AXIS_LEFTY
MLX_CONTROLLER_AXIS_RIGHTX
MLX_CONTROLLER_AXIS_RIGHTY
MLX_CONTROLLER_AXIS_TRIGGERLEFT
MLX_CONTROLLER_AXIS_TRIGGERRIGHT
```

### mlx_controller_rumble()
**Rumble a controller**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (int) `id` : Controller ID (-1 for default)
* (float) `high_freq` : High frequency intensity (ranges [0, 1])
* (float) `low_freq` : Low frequency intensity (ranges [0, 1])
* (float) `duration` : Duration of the rumble in seconds

---

## Pixels drawing related functions

### mlx_pixel_put_array()
**Put an array of pixels in the window**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window
* (int) `x` : X coordinate
* (int) `y` : Y coordinate
* (mlx_color*) `pixels` : Array of pixels
* (int) `pixels_count` : Number of pixels
Note: it is responsability of the user to make sure the size of `pixels` is
big enough for the given array.
WARNING: This function isn't performant, consider drawing to an image beforehand.

### mlx_pixel_put_region()
**Put a region of pixels in the window**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window
* (int) `x` : X coordinate
* (int) `y` : Y coordinate
* (int) `w` : Width of the region
* (int) `h` : Height of the region
* (mlx_color*) `pixels` : Array of pixels
Note: it is responsability of the user to make sure the size of `pixels` is
big enough for the given region.
WARNING: This function isn't performant, consider drawing to an image beforehand.

---

## Images related functions

### mlx_get_image_region()
**Get image region**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_image) `img` : Internal image
* (int) `x` : X coordinate in the image
* (int) `y` : Y coordinate in the image
* (int) `w` : Width of the region
* (int) `h` : Height of the region
* (mlx_color*) `dst` : Array of pixels to copy to
Note: it is responsability of the user to make sure the size of `dst` is
big enough for the given region.

### mlx_set_image_region()
**Set image region**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_image) `img` : Internal image
* (int) `x` : X coordinate in the image
* (int) `y` : Y coordinate in the image
* (int) `w` : Width of the region
* (int) `h` : Height of the region
* (mlx_color*) `pixels` : Array of pixels to copy from
Note: it is responsability of the user to make sure the size of `pixels` is
big enough for the given region.

### mlx_put_transformed_image_to_window()
**Transform and put image to the given window**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_window) `win` : Internal window
* (mlx_image) `img` : Internal image
* (float) `x` : X coordinate
* (float) `y` : Y coordinate
* (float) `scale_x` : Scale X of the image
* (float) `scale_y` : Scale Y of the image
* (float) `angle` : Rotation angle of the image in degrees (clockwise)

---

## Sound related functions

### mlx_new_audio_channel()
**Creates a new audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application

__Returns__:
* (mlx_channel): An opaque handler to the internal MLX audio channel or NULL in case of error

### mlx_pause_channel()
**Pauses the sound playing in the given audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel

### mlx_resume_channel()
**Resumes the sound paused in the given audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel

### mlx_get_channel_playback_position()
**Get the playback position of the sount in the given audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel

__Returns__:
* (float): The time in seconds from the beginning of the sound in the channel

### mlx_set_channel_volume()
**Sets the volume of an audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel
* (float) `left` : Volume at the left ear (1 = default)
* (float) `right` : Volume at the right ear (1 = default)

### mlx_set_channel_speed()
**Sets the playback speed of an audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel
* (float) `speed` : Speed ratio of the channel, this will also affect the sound's pitch

### mlx_destroy_audio_channel()
**Destroys internal audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel

### mlx_new_sound_from_wav()
**Creates a new sound from a wav file**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (char*) `file` : Path to the wav file
* (float*) `duration` : Pointer to get to the duration of the sound in seconds

__Returns__:
* (mlx_sound): An opaque handler to the internal MLX sound or NULL in case of error

### mlx_play_sound()
**Loads and plays a sound in an audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel
* (mlx_sound) `sound` : Internal sound handle

### mlx_play_sound_ex()
**Loads and plays a sound in an audio channel**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_channel) `channel` : Internal audio channel
* (mlx_sound) `sound` : Internal sound handle
* (float) `start` : Seconds from which to start playing the sound
* (float) `end` : Seconds from which to stop playing the sound
* (bool) `loop` : Should the sound start again after ending

Note: Negative time values (including -0.0) will be set relative to the end of the sound

### mlx_destroy_sound()
**Destroys internal sound handle**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application
* (mlx_sound) `sound` : Internal sound handle

### mlx_get_proc_addr()
**Get direct pointers to hidden functions**

__Parameters__:
* (mlx_context) `mlx` : Internal MLX application

__Returns__:
* (mlx_function): A function pointer or NULL in case of error
