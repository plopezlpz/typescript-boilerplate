/**
 * This file is the entrypoint of browser builds.
 * Executes when loaded in a browser.
 *
 * This example adds a custom method to the window object.
 */
import { foo } from './main'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).foo = foo
