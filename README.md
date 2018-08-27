# Wyless Landing Page

## Templates

It uses [pug](https://pugjs.org/api/getting-started.html). HTML is not processed in any way.

By default, [pattern inheritance] is used (https://pugjs.org/language/inheritance.html), the layout of each block is described in a separate file (in `./src / templates / sections`). All blocks are included in one file (see `./src / templates / index.pug`).

## Styles

Connection of all styles occurs in (./src / scss / main.scss). The stylization of each block is described in a separate file (in `./src / templates / sections`).

By default, the Normalize.css library is connected to the project

Used postprocessing:

1. [autoprefixer](https://github.com/postcss/autoprefixer)
2. [csso](https://github.com/css/csso)


## Project Structure

```bash
build/          # The build folder, the auto-update server works here.
src/            # Source files.
  js/           # - js files (main.js input file)
  sass/         # - styles (main.scss input file)
    global/     # - basic stylization, libraries, variables, etc.
      mixins/   # - mixing
    sections/   # - styling of a specific block
  fonts/        # - project fonts (will be automatically copied to the assembly folder).
  img/          # - images
    svg/        # - svg icons
  pug/          # - templates pug.
    layout/     # - the main template for markup (master.pug)
    mixins/     # - mixing
    sections/   # - template for a specific block
    index.pug   # - the main page of the project.
```
