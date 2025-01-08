---
title: Colors in the MacroLibX
description: how do colors work in the MacroLibX
---

Colors in the MacroLibX are presented with the `mlx_color` union.

## 🌈 The `mlx_color` union
This union is presented as :
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

The way it is implemented offers two way of accessing and modifying the color.
You can access the whole color as a 4 bytes unsigned integer using the `rgba` attribute or you can access
each sub-color data with attributes `r`, `g`, `b`, `a`.

```c
int main(void)
{
    /* Do stuffs */

    mlx_color color;
    color.rgba = 0x00FF00FF; // green
    mlx_pixel_put(mlx, win, 10, 10, color);

    color.r = 0xFF; // color is now equivalent to 0xFFFF00FF
    mlx_pixel_put(mlx, win, 10, 10, color);

    // You can also pass a color to a function using C99's compound literals
    mlx_pixel_put(mlx, win, 10, 10, (mlx_color){ .rgba = 0x0000FFFF });
    mlx_pixel_put(mlx, win, 10, 10, (mlx_color){ .r = 0xFF, .g = 0x00, .b = 0x00, .a = 0x55 });

    /* Do stuffs */
}
```
