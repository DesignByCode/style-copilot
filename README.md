
# Style-copilot
a css framework using the new dart-sass features

## Installation
##### Install with npm
```bash
npm install style-copilot
```
##### Install with yarn
```bash
yarn add style-copilot
```

## Setup 
Create a sass file in your project and and add the following code to it.
> All ```@use``` files must be added to the top of the file.
```sass
@use "~style-copilot"
```
## Variables
To add more colors or to override exiting variables.
```sass 
@use "~style-copilot"
@use "theme"
```
## Default variables
Any of the following variables can be overwritten here.
```sass
\:root
 // Fonts heading
 --heading-fonts:  'Roboto', sans-serif
 --heading-font-weight: 700
 --heading-color: #444
 --body-fonts:  'Roboto', sans-serif
 --body-font-weight: 400
 --body-color: #444
	
 // Global body styles
 --body-margin-top: 0
 --body-bg-color: var(--gray-100)
 --body-line-height: 1.48
	
 // Panel
 --panel-bg-color: #fff
 --panel-color: #444
 --panel-padding: 12px

```

## Extend your variables
You can create your own variables here or extend it by using package mixins, config, and functions
> NOTE: This will not create color variations for utilities like button, background and borders. 

```sass 
@use "style-copilot/sass/mixins"

$colors: ('electric-violet': (DEFAULT: #6400E6, 100: #E2CCFF, 200: #B780FF, 300: #9A4DFF)) // and so on

\:root 
 +mixins.color-loop($colors)

 ...rest
```
If you don't like the format of the sass map you can always change your `.sass` file to a `.scss` file, or you can 
create a `_colors.scss` file and import it into `_theme.sass` file. 
> __IMPORTANT__: When creating a color map you __must__ have at lease a _*DEFAULT*_ key, the rest of the key is upto 
> you to choose.

```scss
$colors: (
 'electric-violet': (
  DEFAULT: #6400E6,
  50: #E2CCFF,
  100: #D4B3FF,
  200: #B780FF,
  300: #9A4DFF,
  400: #7D1AFF,
  500: #6400E6,
  600: #4E00B3,
  700: #370080,
  800: #21004D,
  900: #0B001A
 )
)
```
# Extend colors to utilities
```sass 
@use "~style-copilot"
@use "~style-copilot/sass/mixins"
@use "theme"

.btn
 +mixins.buttons(theme.$colors)

.border
 +mixins.borders(theme.$colors)
```

