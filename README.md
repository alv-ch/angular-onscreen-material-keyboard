# angular-onscreen-material-keyboard
Onscreen virtual keyboard for [Angular] using [Angular Material].
> Note that this is a fork of https://github.com/joskwanten/core

![ngx-material-keyboard in action](https://cdn.rawgit.com/ngx-material-keyboard/core/develop/screenshots/ngxmk-2.gif)

## Demo
A demo can be found [here][demo].
To build the demo run:     
`ng build --configuration production --progress=false --base-href=/demo/`


## Docs
Generated documentation can be found [here][docs].

## publish to jfrog artifactory

To publish this library login to the alvch npm repository in our jfrog artifactory (ask dev team for username and password or check confluence)
- npm login
- to add a user to the scoped @alvch npm repository run:
- npm adduser --registry=https://alvch.jfrog.io/artifactory/api/npm/alvch --scope=@alvch --always-auth=true

## Getting started
1. Install with your prefered packet manager (we're using `npm` here):
`npm install --save angular-onscreen-material-keyboard`
> Be sure to fulfill the peer dependencies of this module, in particular [Angular] and [Angular Material].

2. Add the module to your project, e.g. `app.module.ts`:
```:typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
...
import { MatKeyboardModule } from 'angular-onscreen-material-keyboard';

@NgModule({
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    // Material modules
    MatButtonModule,
    MatKeyboardModule,
  ],
  ...
})
export class AppModule {}
```

3. Use the [`MatKeyboardDirective`][docs:MatKeyboardDirective] on your input elements or textareas and set the name or locale of the layout.
> If not provided the locale will be derieved from the `LOCALE_ID` or the browser.
```:angular2html
<input [matKeyboard]="'Azərbaycanca'">
```

## Providing custom layouts
Most of the base configurations are provided as [injection tokens][InjectionToken]. Please read [the documentation][InjectionToken] to 
understand how to handle it.

All layouts are based on (or directly inherited from) the [angular-virtual-keyboard][the-darc/angular-virtual-keyboard] which is based on
 [GreyWyvern VKI]. For details on how to structure a layout see the [comment derived from the original source code][VKI Readme].

> Note that this will most likely be changed in the near future. But for now a huge range of layouts is already usable because of the 
[great contribution][VKI Credits] back then.

But basicly you just provide the configuration of your new layout in your `AppModule`:
```:typescript
import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from 'angular-onscreen-material-keyboard';

const customLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Tölles Läyout': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#']
      ]
    ],
    'lang': ['de-CH']
  }
};

@NgModule({
  ...
  providers: [
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts }
  ],
  ...
})
export class AppModule {}
```

## Development
This repository is managed by and layed out for [ng-packagr].

### Versioning
The application uses [semver][SemVer] and is developed with the [git flow branching model][Git-Flow].

[Angular]: https://angular.io/
[Angular Material]: https://material.angular.io/
[the-darc/angular-virtual-keyboard]: https://github.com/the-darc/angular-virtual-keyboard
[GreyWyvern VKI]: http://www.greywyvern.com/code/javascript/keyboard

[SemVer]: http://semver.org/
[Git-Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[ng-packagr]: https://github.com/dherges/ng-packagr

[demo]: https://ngx-material-keyboard.github.io/demo/
[docs]: https://ngx-material-keyboard.github.io/core/

[docs:MatKeyboardDirective]: https://ngx-material-keyboard.github.io/core/directives/MatKeyboardDirective.html
[InjectionToken]: https://angular.io/guide/dependency-injection-in-action#injectiontoken
[VKI Readme]: https://goo.gl/fCDExr
[VKI Credits]: https://goo.gl/NYqTwc

