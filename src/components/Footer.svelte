<!-- Footer -->
<script lang="ts">
  import type { PageId, Quote, SocialsContent } from '$lib/types';
  import { bio } from '$lib/constants';
  import '$styles/components/footer.scss';

  export let pageId: PageId = bio;
  export let quote: Quote;
  export let socials: SocialsContent;
  export let version: string;
</script>

<footer class={`foot ${pageId}`}>
  <div class="footer-grid">
    <p class="foot-item foot-item-left" id="foot-quote-display">
      <a href={quote?.url || ''} target="_blank" rel="noopener noreferrer">
        {quote?.text || ''}<br />{quote?.author || ''}
      </a>
    </p>
    <div class="foot-item foot-item-center">
      <a
        class="foot-social-icon foot-social-icon-github"
        href={socials?.github?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="100%" height="100%" viewBox="0 0 171 167">
          <path
            d="M85.47,0c-47.201,0 -85.47,38.269 -85.47,85.481c0,37.765 24.49,69.801 58.456,81.109c4.277,0.782 5.835,-1.857 5.835,-4.124c0,-2.026 -0.073,-7.404 -0.115,-14.536c-23.776,5.164 -28.793,-11.46 -28.793,-11.46c-3.888,-9.876 -9.492,-12.505 -9.492,-12.505c-7.761,-5.3 0.588,-5.195 0.588,-5.195c8.579,0.604 13.092,8.811 13.092,8.811c7.624,13.061 20.008,9.288 24.878,7.1c0.777,-5.521 2.98,-9.288 5.426,-11.424c-18.98,-2.157 -38.936,-9.493 -38.936,-42.247c-0,-9.33 3.332,-16.96 8.8,-22.937c-0.882,-2.162 -3.815,-10.851 0.834,-22.621c0,-0 7.179,-2.299 23.509,8.763c6.816,-1.9 14.131,-2.844 21.399,-2.876c7.257,0.032 14.572,0.976 21.399,2.876c16.319,-11.062 23.482,-8.763 23.482,-8.763c4.665,11.77 1.732,20.459 0.85,22.621c5.478,5.977 8.789,13.607 8.789,22.937c0,32.838 -19.987,40.064 -39.03,42.179c3.07,2.639 5.804,7.855 5.804,15.831c-0,11.424 -0.105,20.644 -0.105,23.446c-0,2.288 1.537,4.948 5.877,4.114c33.94,-11.33 58.409,-43.344 58.409,-81.099c-0,-47.212 -38.275,-85.481 -85.486,-85.481"
          />
        </svg>
      </a>
      <a
        class="foot-social-icon foot-social-icon-linkedin"
        href={socials?.linkedin?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="100%" height="100%" viewBox="0 0 165 167">
          <path
            d="M164.95,17.192c0,-9.489 -7.703,-17.192 -17.191,-17.192l-130.567,0c-9.489,0 -17.192,7.703 -17.192,17.192l-0,132.519c-0,9.488 7.703,17.192 17.192,17.192l130.567,-0c9.488,-0 17.191,-7.704 17.191,-17.192l0,-132.519Zm-98.768,66.669c-0,-8.885 -0.291,-16.314 -0.581,-22.726l19.228,0l1.021,9.907l0.437,0c2.913,-4.663 10.052,-11.51 21.998,-11.51c14.569,-0 25.494,9.762 25.494,30.74l-0,42.103l-22.143,-0l-0,-39.481c-0,-9.177 -3.206,-15.441 -11.219,-15.441c-6.119,0 -9.759,4.225 -11.362,8.303c-0.583,1.456 -0.73,3.496 -0.73,5.537l-0,41.082l-22.143,-0l-0,-48.514Zm-35.396,-22.726l22.144,0l-0,71.24l-22.144,-0l-0,-71.24Zm22.87,-19.812c0,6.117 -4.515,11.071 -11.945,11.071c-6.992,0 -11.508,-4.954 -11.508,-11.071c-0,-6.264 4.661,-11.072 11.798,-11.072c7.14,0 11.511,4.808 11.655,11.072Z"
          />
        </svg>
      </a>
      <a
        class="foot-social-icon foot-social-icon-email"
        href={socials?.email?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="100%" height="100%" viewBox="0 0 164 165">
          <path
            d="M124.871,42.784l-6.141,50.972c-0.41,3.275 -0.614,6.55 -0.614,9.825c-0,1.365 0.341,2.457 1.023,3.276c0.682,0.819 1.501,1.228 2.457,1.228c3.138,-0 6.038,-1.024 8.7,-3.071c2.661,-2.047 4.981,-4.776 6.96,-8.188c1.978,-3.412 3.514,-7.301 4.606,-11.668c1.091,-4.367 1.637,-8.871 1.637,-13.511c0,-7.779 -1.501,-14.875 -4.503,-21.289c-3.003,-6.414 -7.131,-11.873 -12.385,-16.377c-5.254,-4.503 -11.43,-7.983 -18.526,-10.44c-7.097,-2.456 -14.739,-3.684 -22.927,-3.684c-9.417,-0 -18.117,1.603 -26.1,4.81c-7.984,3.207 -14.876,7.574 -20.676,13.101c-5.8,5.527 -10.337,12.112 -13.613,19.754c-3.275,7.643 -4.912,15.831 -4.912,24.565c-0,9.826 1.774,18.629 5.322,26.407c3.548,7.779 8.359,14.33 14.432,19.652c6.073,5.323 13.169,9.383 21.289,12.18c8.12,2.798 16.752,4.197 25.896,4.197c5.322,-0 10.03,-0.171 14.124,-0.512c4.094,-0.341 7.95,-0.989 11.566,-1.945c3.617,-0.955 7.097,-2.252 10.44,-3.889c3.344,-1.638 6.994,-3.753 10.952,-6.346l8.802,17.195c-8.324,5.186 -17.024,9.041 -26.1,11.566c-9.075,2.525 -18.935,3.787 -29.58,3.787c-13.374,0 -25.417,-2.183 -36.13,-6.55c-10.713,-4.367 -19.823,-10.304 -27.329,-17.81c-7.506,-7.506 -13.306,-16.24 -17.4,-26.202c-4.094,-9.963 -6.141,-20.539 -6.141,-31.73c-0,-11.6 2.184,-22.381 6.551,-32.343c4.367,-9.963 10.371,-18.629 18.014,-25.998c7.642,-7.369 16.615,-13.17 26.919,-17.4c10.303,-4.231 21.46,-6.346 33.469,-6.346c11.054,0 21.358,1.842 30.911,5.527c9.553,3.685 17.843,8.734 24.872,15.148c7.028,6.414 12.555,13.954 16.581,22.62c4.026,8.666 6.039,17.912 6.039,27.738c-0,8.325 -1.058,15.933 -3.173,22.825c-2.116,6.892 -5.118,12.828 -9.007,17.809c-3.89,4.982 -8.564,8.837 -14.023,11.566c-5.459,2.73 -11.6,4.094 -18.423,4.094c-3.685,0 -6.994,-0.955 -9.929,-2.866c-2.934,-1.91 -5.493,-4.503 -7.676,-7.778c-4.504,4.503 -8.802,7.335 -12.897,8.495c-4.094,1.16 -7.915,1.74 -11.463,1.74c-4.367,-0 -8.905,-1.058 -13.613,-3.173c-4.708,-2.115 -9.007,-5.084 -12.897,-8.905c-3.889,-3.821 -7.13,-8.393 -9.723,-13.715c-2.593,-5.322 -3.89,-11.191 -3.89,-17.605c0,-6.277 1.229,-12.043 3.685,-17.297c2.457,-5.255 5.664,-9.758 9.621,-13.511c3.958,-3.753 8.496,-6.653 13.613,-8.7c5.118,-2.047 10.338,-3.071 15.66,-3.071c5.869,0 10.986,1.126 15.353,3.378c4.367,2.252 7.574,5.22 9.622,8.905l1.842,-10.44l18.833,-0Zm-65.916,40.531c0,2.73 0.546,5.391 1.638,7.984c1.092,2.593 2.559,4.845 4.401,6.755c1.843,1.911 4.026,3.446 6.551,4.606c2.525,1.16 5.152,1.74 7.881,1.74c2.729,0 5.357,-0.58 7.881,-1.74c2.525,-1.16 4.709,-2.695 6.551,-4.606c1.842,-1.91 3.309,-4.162 4.401,-6.755c1.092,-2.593 1.638,-5.254 1.638,-7.984c-0,-2.729 -0.546,-5.356 -1.638,-7.881c-1.092,-2.524 -2.559,-4.776 -4.401,-6.755c-1.842,-1.979 -4.026,-3.548 -6.551,-4.708c-2.524,-1.16 -5.152,-1.74 -7.881,-1.74c-2.729,-0 -5.356,0.58 -7.881,1.74c-2.525,1.16 -4.708,2.729 -6.551,4.708c-1.842,1.979 -3.309,4.231 -4.401,6.755c-1.092,2.525 -1.638,5.152 -1.638,7.881Z"
          />
        </svg>
      </a>
    </div>
    <p class="foot-item foot-item-right copyright-2-line">
      © 2023 Scott Silsbe<br />All Rights Reserved<br />version {version}
    </p>
    <p class="foot-item foot-item-right copyright-1-line">
      © 2023 Scott Silsbe. All Rights Reserved<br />version {version}
    </p>
  </div>
</footer>
