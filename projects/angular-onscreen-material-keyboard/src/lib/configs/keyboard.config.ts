import { AriaLivePoliteness } from '@angular/cdk/a11y';
import { ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { IKeyboardIcons } from '../interfaces/keyboard-icons.interface';

export class MatKeyboardConfig {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    politeness?: AriaLivePoliteness = 'assertive';

    /** Message to be announced by the MatAriaLiveAnnouncer */
    announcementMessage?: string = '';

    /** The view container to place the overlay for the keyboard into. */
    viewContainerRef?: ViewContainerRef;

    /** The length of time in milliseconds to wait before automatically dismissing the keyboard after blur. */
    duration? = 0;

    /** Enable a dark keyboard */
    darkTheme? = false;

    /** Enable the debug view */
    isDebug? = false;

    /** Enable the debug view */
    ngControl?: NgControl;

    /** Custom icon overrides */
    customIcons?: IKeyboardIcons = {};
}
