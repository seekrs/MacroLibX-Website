---
title: Getting Started
description: getting started with the MacroLibX
---

## 🖥️ Installation

### Dependencies
There are some dependencies you need to install on your system to use the MacroLibX.

#### 🐧 Linux
Here are a few common cases for different Linux distributions:

For [Ubuntu](https://ubuntu.com)/[Debian](https://www.youtube.com/watch?v=dQw4w9WgXcQ)-based distros:
```bash
sudo apt update
sudo apt install libsdl2-2.0-0 libsdl2-dev build-essential
```

For [ArchLinux](https://archlinux.org)-based distros:
```bash
sudo pacman -S sdl2
```

###### Note that you need to have up do date video drivers with `libvulkan.so` installed.

#### 🍎 MacOS
MacroLibX on MacOS requires [SDL2](https://www.libsdl.org/) and [MoltenVK](https://github.com/KhronosGroup/MoltenVK). You can install both using the [Homebrew](https://brew.sh) package manager:
```sh
brew install molten-vk
brew install SDL2
```

#### 🪟 Windows
To build on Windows you may need to use the [xmake](https://xmake.io) build. [Here's](/guides/xmake) how you can use it.

### Clone and Build
Finally, you can clone the Git repository. When inside it, run the GNU `make` command to compile MacroLibX. 
```bash
git clone https://github.com/seekrs/MacroLibX.git
cd MacroLibX
make
```

## 🔨 Compilation
To compile your project with MacroLibX, you just provide the shared library path in your compilation/linking command:

```sh
clang myApp.c /path/to/MacroLibX/[libmlx.so/libmlx.dylib/libmlx.dll] -lSDL2
```

And you can enjoy your project

<p align="center">
    <img src="/screenshot_test.png" alt="drawing" width="400"/>
</p>

## ⚙️ Some compilation configurations

#### Compile mode
By default the mlx is built in release mode but you can switch to debug by using `make DEBUG=true`.

#### Set the toolchain
If you want to use `GCC` to build the mlx you can use `make TOOLCHAIN=gcc`

#### ⚠️⚠️⚠️  Image optimisations ⚠️⚠️⚠️
If you run into glitches when writing or reading pixels from images you can turn off images optimisations by using `make IMAGES_OPTIMIZED=false`.

#### Force the integrated GPU (not recommended)
You can force the mlx to use your integrated GPU by using `make FORCE_INTEGRATED_GPU=true`. Note that there are a lot of chances that your application crashes by using that.

#### Dump the graphics memory
The mlx can dump it's graphics memory use to json files every two seconds by enabling this option `make GRAPHICS_MEMORY_DUMP=true`.
