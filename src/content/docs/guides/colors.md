---
title: Colors in the MacroLibX
description: how do colors work in the MacroLibX
---

Colors in the MacroLibX are presented in an `int` format just like the minilibx.
It therefore requires some tricky things in order to obtain an int which can contain the `ARGB` values.

One improvement over minilibx is that MacroLibX fully supports transparency, whether in pixel put, images or string put.

## 🌈 The color integer standard
As mentioned above, MacroLibX uses an `ARGB` color format, which in `int` is equivalent to `0xAARRGGBB`.
This `ARGB` is composed by 4 values :
* `A`, the alpha of the color (it's transparency), between 0 and 255
* `R`, the red component, between 0 and 255
* `G`, the green component, between 0 and 255
* `B`, the blue component, between 0 and 255

You can directly encode colors using hexadecimal in C/C++ like so : 
```c
int main(void)
{
    /* Do stuffs */
    
    mlx_pixel_put(mlx, win, 10, 10, 0xFF223344);

    /* Do stuffs */
}
```

But sometime we cannot use the usefull hexadecimal to encode colors...

## 🔐 Encode and decode colors
A good use case for encoding/decoding manually pixel colors might be when reading pixels from an image an using them after
as `mlx_get_image_pixel` returns a pixel ecoded as `RGBA` and the MacroLibX uses `ARGB` everywhere.

We can use two methods to encode and decode colors:
* bit-shifting
* `char` / `int` conversion

### Bit-shifting
Since each byte contains `2^8 = 256` values (1 byte = 8 bits), and `ARGB` values range from 0 to 255,
we can perfectly fit a integer (as an `int` is 4 bytes, on 64bits systems...).

In order to set the values programatically we can use bit-shifting.
Let’s create a function which does precisely that for us :

```c
int create_argb(int a, int r, int g, int b)
{
    return (a << 24 | r << 16 | g << 8 | b);
}
```

Because ints are stored from right to left, we need to bit-shift each value the according amount of bits backwards.
We can also do the exact opposite and retrieve integer values from an encoded `ARGB` integer :

```c
int get_a(int argb)
{
    return ((argb >> 24) & 0xFF);
}

int get_r(int argb)
{
    return ((argb >> 16) & 0xFF);
}

int get_g(int argb)
{
    return ((argb >> 8) & 0xFF);
}

int get_b(int argb)
{
    return (argb & 0xFF);
}
```

### `char` / `int` conversion
As mentioned above `ARGB` contains 4 bytes, and 4 bytes can be seen as 4 `unsigned char`.
We can therefore use 4 `unsigned char` to extract and insert `ARGB` components into our colors :

```c
int create_argb(unsigned char a, unsigned char r, unsigned char g, unsigned char b)
{
    unsigned char bits[4] = {a, r, g , b};
    return *((int*)bits);
}

unsigned char get_a(int argb)
{
    unsigned char* bits = &argb;
    return bits[3];
}

unsigned char get_r(int argb)
{
    unsigned char* bits = &argb;
    return bits[2];
}

unsigned char get_g(int argb)
{
    unsigned char* bits = &argb;
    return bits[1];
}

unsigned char get_b(int argb)
{
    unsigned char* bits = &argb;
    return bits[0];
}
```
