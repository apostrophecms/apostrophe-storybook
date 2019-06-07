<template>
  <div>
    <symbol id="my-icon" viewBox="0 0 30 30">

    <svg style="display: none;" width="6px" height="6px" viewBox="0 0 6 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
          <polygon id="path-1" points="11.077707 12 10 13.077707 10.5503185 13.6280255 11.910828 15.011465 10.5503185 16.3719745 10 16.8993631 11.077707 18 11.6280255 17.4496815 13.011465 16.066242 14.3719745 17.4496815 14.8993631 18 16 16.8993631 15.4496815 16.3719745 14.066242 15.011465 15.4496815 13.6280255 16 13.077707 14.8993631 12 14.3719745 12.5503185 13.011465 13.910828 11.6280255 12.5503185"></polygon>
      </defs>
      <g id="z" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Pattern-Library" transform="translate(-93.000000, -8350.000000)">
              <g id="Group-7" transform="translate(83.000000, 8338.000000)">
                  <g id="Group-9">
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                      </mask>
                      <use id="Mask" fill="#FDFDFD" fill-rule="nonzero" xlink:href="#path-1"></use>
                  </g>
              </g>
          </g>
        </g>
      </svg>
    </symbol>

    <use xlink:href="`#${name}`" x="100" y="300" />
  </div>
</template>

<script>
module.exports = {
  props: {
    name: String
  }
}
</script>
