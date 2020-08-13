/**
 * global mixin whieh is accessible from every component defined in this
 * project.
 * make sure to append '*' before each data-property or method name to set them
 * apart from locally defined properties.
 */
export default {
  data () {
    return {
      // ...
    }
  },
  methods: {
    // check if there is a value in variable
    $emptyOrNull (value) {
      return (value === undefined || value === null || value === '')
    }
  }
}
