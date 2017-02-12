// GPIO API. Source C API is defined at
// [mgos_gpio.h](https://github.com/cesanta/mongoose-os/blob/master/fw/src/mgos_gpio.h)

let GPIO = {
  // **`GPIO.set_mode(pin, mode)`** - set GPIO pin mode.
  // `mode` can be either `GPIO.MODE_INPUT` or `GPIO.MODE_OUTPUT`.
  set_mode: ffi('int mgos_gpio_set_mode(int,int)'),
  MODE_INPUT: 0,
  MODE_OUTPUT: 1,

  // **`GPIO.set_pull(pin, type)`** - set GPIO pin pull type.
  // `type` can be either `GPIO.PULL_NONE`, `GPIO.PULL_UP`, or `GPIO.PULL_DOWN`.
  set_pull: ffi('int mgos_gpio_set_pull(int,int)'),
  PULL_NONE: 0,
  PULL_UP: 1,
  PULL_DOWN: 2,

  // **`GPIO.toggle(pin)`** - toggle the level of certain GPIO pin.
  // Return value: 0 or 1, indicating the resulting pin level.
  toggle: ffi('int mgos_gpio_toggle(int)'),

  // **`GPIO.write(pin, level)`** - set GPIO pin level to either 0 or 1.
  write: ffi('void mgos_gpio_write(int,int)'),

  // **`GPIO.read(pin)`** - read GPIO pin level. Return value: 0 or 1.
  read: ffi('int mgos_gpio_read(int)'),

  // **`GPIO.enable_int(pin)`** - enable interrupts on GPIO pin.
  // This function must be called AFTER the interrupt handler is installed.
  enable_int: ffi('int mgos_gpio_enable_int(int)'),

  // **`GPIO.disable_int(pin)`** - disable interrupts on GPIO pin.
  disable_int: ffi('int mgos_gpio_disable_int(int)'),

  // **`GPIO.set_int_handler(pin, mode, handler)`**  - install
  // GPIO interrupt handler. `mode` could be one of: `GPIO.INT_NONE`,
  // `GPIO.INT_EDGE_POS`, `GPIO.INT_EDGE_NEG`, `GPIO.INT_EDGE_ANY`,
  // `GPIO.INT_LEVEL_HI`, `GPIO.INT_LEVEL_LO`.
  // Example:
  // ```javascript
  // GPIO.set_mode(pin, GPIO.MODE_INPUT);
  // GPIO.set_int_handler(pin, GPIO.INT_EDGE_NEG, function(pin) {
  //    print('Pin', pin, 'got interrupt');
  // }, null);
  // GPIO.enable_int(pin);
  // ```
  set_int_handler: ffi(
      'int mgos_gpio_set_int_handler(int,int,void(*)(int,userdata),userdata)'),
  INT_NONE: 0,
  INT_EDGE_POS: 1,
  INT_EDGE_NEG: 2,
  INT_EDGE_ANY: 3,
  INT_LEVEL_HI: 4,
  INT_LEVEL_LO: 5,

  // **`GPIO.set_button_handler(pin, pull, intmode, period, handler)`**  - install
  // GPIO button handler. `pull` is pull type, `intmode` is interrupt mode,
  // `period` is debounce interval in milliseconds, handler is a function that
  // receives pin number.
  // Example:
  // ```javascript
  // GPIO.set_button_handler(pin, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 50, function(x) {
  //   print('Button press, pin: ', x);
  // }, null);
  // ```
  set_button_handler: ffi('int mgos_gpio_set_button_handler(int,int,int,int,void(*)(int, userdata), userdata)'),
};
