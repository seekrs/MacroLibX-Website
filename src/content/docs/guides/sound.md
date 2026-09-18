---
title: Sounds
description: sounds in the MacroLibX
---

As of v2.5, the MacroLibX is able to play .wav files in your application

## 🔊 Channels

To play sounds with the MacroLibX, you first need a `channel` (aka audio stream).

Any sound can be played through a channel but only one sound can be played at a time, multiple channels can be created to overlap sounds.

A channel will also allow for some control over the sound that is currently played, like pausing it or speeding it up.

```c
#include "MacroLibX/includes/mlx.h"
#include "MacroLibX/includes/mlx_extended.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_channel channel = mlx_new_audio_channel(mlx);
    mlx_set_channel_speed(mlx, 1.2);
    mlx_set_channel_volume(mlx, 0.6, 1.8); // Volume uses Left-Right Stereo

    /* loop */
    mlx_destroy_audio_channel(mlx, channel);
    /* cleanup */
}
```

## 🎹 Playing sounds

Once a channel is ready, we can load a sound from a `.wav` file and play it anytime.

```c
#include "MacroLibX/includes/mlx.h"
#include "MacroLibX/includes/mlx_extended.h"

int main(void)
{
    mlx_context mlx = mlx_init();

    mlx_window_create_info info = { 0 };
    info.title = "Hello World!";
    info.width = 400;
    info.height = 400;
    mlx_window win = mlx_new_window(mlx, &info);

    mlx_channel channel = mlx_new_audio_channel(mlx);

    float sound_duration;
    mlx_sound sound = mlx_new_sound_from_wav(mlx, "path/to/my/wonderful/sound.wav", &sound_duration);

    mlx_play_sound(mlx, channel, sound);
    
    // The previous sound in the channel will stop if not finished
    mlx_play_sound(mlx, channel, sound);

    /* loop */
    mlx_destroy_sound(mlx, sound);
    /* cleanup */
}
```

See [the extended reference](../../reference/ext_reference/) for more information and the `sound` example in the repo for a concrete implementation.
