---
title: Good and bad practices
description: good and bad practices
---

Here you'll find good and bad practices on how to use the MacroLibX.

## 👍 Good practices

### Clear the windows
Use `mlx_clear_window` at the begenning of new frames (the begenning of the first [loop hook](/guides/events)).
This will prevent common issues like texts stacking each others.

### Reuse images
When you'll use an image multiple times reuse it. You can put the same image at multiple places in the same frame.

```c
mlx_image img = mlx_new_image_from_file(mlx, "path/to/my/awesome/image.png", &img_width, &img_height);
mlx_put_image_to_window(mlx, win, img, 42, 42);
mlx_put_image_to_window(mlx, win, img, 100, 42); // Will put the image at each places
mlx_put_image_to_window(mlx, win, img, 300, 550);
```

### Use the `mlx_extended.h` functions
Use extended functions instead of calling a ton of times `mlx_put_pixel` or `mlx_set_image_pixel` to draw or modify images.
They are A LOT more optimized.

### Don't let the CPU burn
You may want to use `mlx_set_fps_goal` to let the CPU rest a bit.

### Report issues on Gihtub
When you find a problem with the MacroLibX, please search if it is not already reported on [Github](https://github.com/seekrs/MacroLibX/issues) and if not, report it yourself.

### Use the suppression file
Yes, I know that the MacroLibX leaks. In fact the library itself does not leak, but the third party libraries do. All of the leaks from the MacroLibX comes from [lazy Nvidia's Vulkan driver](https://www.reddit.com/r/vulkan/comments/18ph4jc/comment/kes88js/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button),
paranoîd Valgrind on SDL2's X11 usage and still Valgrind finding false positives in `dl_open`. These are common "issues" present in **every Vulkan application** and nothing can really be
done about this. The only solution found was to create a [Valgrind suppression file](https://github.com/seekrs/MacroLibX/blob/master/valgrind.supp) that clears most of the leaks. Some can still
appear due to the suppression file not being invasive to avoid clearing user's program leaks.

## 👎 Bad practices

### Don't load multiple times the same image
This is almost the same point as [this](#reuse-images). Load each images only once and
especially don't load images each frame.

### Don't use multithreading
The MacroLibX is not thread safe and will never be. It is an educational library, if you have to use multithreading to speed up your
project you should think about optimizing it more or switching to a better library like [SDL](https://www.libsdl.org/) or a graphics API as
[WebGPU](https://en.wikipedia.org/wiki/WebGPU) or [SDL GPU](https://wiki.libsdl.org/SDL3/CategoryGPU) (please let OpenGL die, it does more harm to the GPU standards than good).
